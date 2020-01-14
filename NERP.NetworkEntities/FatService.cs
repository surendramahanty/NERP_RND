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
    public class FatService : IFatService
    {
        private readonly IRepository<FAT> _fatRepository;
        private const string FatRepository = "MST_Fat";

        public FatService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _fatRepository = new MongoRepository<FAT>(dbSettings, FatRepository);
        }

        public async Task<FAT> GetFat(string fatId)
        {
            if (string.IsNullOrEmpty(fatId)) return null;

            return await _fatRepository.GetByIdAsync(fatId);
        }

        public async Task<IEnumerable<FAT>> GetFats(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<FAT, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<FAT>(searchFilter);

            IList<FAT> fats = null;

            if (page != null && pageSize != null)
                fats = (await _fatRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                fats = (await _fatRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return fats;
        }

        public async Task<long> GetFatsCount(SearchFilter searchFilter = null)
        {
            Expression<Func<FAT, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<FAT>(searchFilter);
            }

            return await _fatRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var fat = await _fatRepository.GetOneAsync(x => x.Name == name);

            return fat?.Id;
        }

        public async Task<FAT> SaveFat(FAT fat)
        {
            return await _fatRepository.UpdateOneAsync(fat);
        }
        public async Task<bool> DeleteFat(string FatId)
        {
            return (await _fatRepository.DeleteByIdAsync(FatId)) == 1;
        }
    }
}
