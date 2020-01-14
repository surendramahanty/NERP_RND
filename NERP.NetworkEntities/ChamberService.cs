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
    public class ChamberService : IChamberService
    {
        private readonly IRepository<Chamber> _chambersRepository;
        private const string ChambersRepository = "MST_Chambers";

        public ChamberService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _chambersRepository = new MongoRepository<Chamber>(dbSettings, ChambersRepository);
        }

        public async Task<Chamber> GetChamber(string chamberId)
        {
            if (string.IsNullOrEmpty(chamberId)) return null;

            return await _chambersRepository.GetByIdAsync(chamberId);
        }

        public async Task<IEnumerable<Chamber>> GetChambers(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Chamber, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Chamber>(searchFilter);

            IList<Chamber> chambers = null;

            if (page != null && pageSize != null)
                chambers = (await _chambersRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                chambers = (await _chambersRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return chambers;
        }

        public async Task<long> GetChambersCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Chamber, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Chamber>(searchFilter);
            }

            return await _chambersRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var chamber = await _chambersRepository.GetOneAsync(x => x.Name == name);

            return chamber?.Id;
        }

        public async Task<Chamber> SaveChamber(Chamber chamber)
        {
            return await _chambersRepository.UpdateOneAsync(chamber);
        }

        public async Task<bool> DeleteChamber(string chamberId)
        {
            return (await _chambersRepository.DeleteByIdAsync(chamberId)) == 1;
        }
    }
}
