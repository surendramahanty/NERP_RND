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
    public class CivilworkService : ICivilworkService
    {
        private readonly IRepository<Civilwork> _civilworksRepository;
        private const string CivilworksRepository = "MST_Civilworks";

        public CivilworkService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _civilworksRepository = new MongoRepository<Civilwork>(dbSettings, CivilworksRepository);
        }

        public async Task<Civilwork> GetCivilwork(string civilworkId)
        {
            if (string.IsNullOrEmpty(civilworkId)) return null;

            return await _civilworksRepository.GetByIdAsync(civilworkId);
        }

        public async Task<IEnumerable<Civilwork>> GetCivilworks(SearchFilter searchFilter, string orderBy, SortOrder sortOrder, int? page, int? pageSize)
        {
            Expression<Func<Civilwork, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Civilwork>(searchFilter);

            IList<Civilwork> civilworks = null;

            if (page != null && pageSize != null)
                civilworks = (await _civilworksRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                civilworks = (await _civilworksRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return civilworks;
        }

        public async Task<long> GetCivilworksCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Civilwork, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Civilwork>(searchFilter);

                //var filter = new Filter<Civilwork>();

                //foreach (var item in searchFilter.Filters)
                //{
                //    filter.By(item.PropertyName, Operation.Contains, item.Value, Connector.And);
                //}

                //filter.By("Name", Operation.Contains, " John");

                //filterExpression = new FilterBuilder().GetExpression<Civilwork>(filter);
            }

            return await _civilworksRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var civilwork = await _civilworksRepository.GetOneAsync(x => x.Name == name);

            return civilwork?.Id;
        }

        public async Task<Civilwork> SaveCivilwork(Civilwork civilwork)
        {
            return await _civilworksRepository.UpdateOneAsync(civilwork);
        }

        public async Task<bool> DeleteCivilwork(string civilworkId)
        {
            return (await _civilworksRepository.DeleteByIdAsync(civilworkId)) == 1;
        }

    }
}
