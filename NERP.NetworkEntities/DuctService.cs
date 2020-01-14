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
    public class DuctService : IDuctService
    {
        private readonly IRepository<Duct> _ductsRepository;
        private const string DuctsRepository = "MST_Ducts";

        public DuctService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _ductsRepository = new MongoRepository<Duct>(dbSettings, DuctsRepository);
        }

        public async Task<Duct> GetDuct(string ductId)
        {
            if (string.IsNullOrEmpty(ductId)) return null;

            return await _ductsRepository.GetByIdAsync(ductId);
        }

        public async Task<IEnumerable<Duct>> GetDucts(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Duct, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Duct>(searchFilter);

            IList<Duct> ducts = null;

            if (page != null && pageSize != null)
                ducts = (await _ductsRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                ducts = (await _ductsRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return ducts;
        }

        public async Task<long> GetDuctsCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Duct, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Duct>(searchFilter);
            }

            return await _ductsRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var duct = await _ductsRepository.GetOneAsync(x => x.Name == name);

            return duct?.Id;
        }

        public async Task<Duct> SaveDuct(Duct duct)
        {
            return await _ductsRepository.UpdateOneAsync(duct);
        }

        public async Task<bool> DeleteDuct(string ductId)
        {
            return (await _ductsRepository.DeleteByIdAsync(ductId)) == 1;
        }
    }
}
