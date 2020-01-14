using Common.Config;
using Common.DataAccess.Models;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.Common.Models;
using NERP.NetworkEntities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public class HomepassService : IHomepassService
    {
        private readonly IRepository<Homepass> _homepassesRepository;
        private const string HomepassesRepository = "MST_Homepasses";

        public HomepassService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _homepassesRepository = new MongoRepository<Homepass>(dbSettings, HomepassesRepository);
        }

        public async Task<Homepass> GetHomepass(string homepassId)
        {
            if (string.IsNullOrEmpty(homepassId)) return null;

            return await _homepassesRepository.GetByIdAsync(homepassId);
        }

        public async Task<IEnumerable<Homepass>> GetHomepasses(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Homepass, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Homepass>(searchFilter);

            IList<Homepass> homepasses = null;

            if (page != null && pageSize != null)
                homepasses = (await _homepassesRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                homepasses = (await _homepassesRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return homepasses;
        }

        public async Task<IEnumerable<Homepass>> GetHomepasses(IList<string> ids)
        {
            return (await _homepassesRepository.GetByIdsAsync(ids)).ToList();
        }

        public async Task<long> GetHomepassesCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Homepass, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Homepass>(searchFilter);
            }

            return await _homepassesRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var homepass = await _homepassesRepository.GetOneAsync(x => x.Name == name);

            return homepass?.Id;
        }

        public async Task<Homepass> SaveHomepass(Homepass homepass)
        {
            return await _homepassesRepository.UpdateOneAsync(homepass);
        }

        public async Task<bool> DeleteHomepass(string homepassId)
        {
            return (await _homepassesRepository.DeleteByIdAsync(homepassId)) == 1;
        }
    }
}
