using Common.Config;
using Common.DataAccess.Models;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.NetworkEntities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public class ODFService : IODFService
    {
        private readonly IRepository<ODF> _odfsRepository;
        private const string ODFsRepository = "MST_ODFs";

        public ODFService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _odfsRepository = new MongoRepository<ODF>(dbSettings, ODFsRepository);
        }

        public async Task<ODF> GetODF(string odfId)
        {
            if (string.IsNullOrEmpty(odfId)) return null;

            return await _odfsRepository.GetByIdAsync(odfId);
        }

        public async Task<IEnumerable<ODF>> GetODFs(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<ODF, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<ODF>(searchFilter);

            IList<ODF> odfs = null;

            if (page != null && pageSize != null)
                odfs = (await _odfsRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                odfs = (await _odfsRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return odfs;
        }

        public async Task<long> GetODFsCount(SearchFilter searchFilter = null)
        {
            Expression<Func<ODF, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<ODF>(searchFilter);
            }

            return await _odfsRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var odf = await _odfsRepository.GetOneAsync(x => x.Name == name);

            return odf?.Id;
        }

        public async Task<ODF> SaveODF(ODF odf)
        {
            return await _odfsRepository.UpdateOneAsync(odf);
        }

        public async Task<bool> DeleteODF(string odfId)
        {
            return (await _odfsRepository.DeleteByIdAsync(odfId)) == 1;
        }
    }
}
