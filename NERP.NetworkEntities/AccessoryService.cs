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
    public class AccessoryService : IAccessoryService
    {
        private readonly IRepository<Accessory> _accessoriesRepository;
        private const string AccessoriesRepository = "MST_Accessories";

        public AccessoryService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _accessoriesRepository = new MongoRepository<Accessory>(dbSettings, AccessoriesRepository);
        }

        public async Task<Accessory> GetAccessory(string accessoryId)
        {
            if (string.IsNullOrEmpty(accessoryId)) return null;

            return await _accessoriesRepository.GetByIdAsync(accessoryId);
        }

        public async Task<IEnumerable<Accessory>> GetAccessories(SearchFilter searchFilter, string orderBy, SortOrder sortOrder, int? page, int? pageSize)
        {
            Expression<Func<Accessory, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Accessory>(searchFilter);

            IList<Accessory> accessories = null;

            if (page != null && pageSize != null)
                accessories = (await _accessoriesRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                accessories = (await _accessoriesRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return accessories;
        }

        public async Task<long> GetAccessoriesCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Accessory, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Accessory>(searchFilter);

                //var filter = new Filter<Accessory>();

                //foreach (var item in searchFilter.Filters)
                //{
                //    filter.By(item.PropertyName, Operation.Contains, item.Value, Connector.And);
                //}

                //filter.By("Name", Operation.Contains, " John");

                //filterExpression = new FilterBuilder().GetExpression<Accessory>(filter);
            }

            return await _accessoriesRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var accessory = await _accessoriesRepository.GetOneAsync(x => x.Name == name);

            return accessory?.Id;
        }

        public async Task<Accessory> SaveAccessory(Accessory accessory)
        {
            return await _accessoriesRepository.UpdateOneAsync(accessory);
        }

        public async Task<bool> DeleteAccessory(string accessoryId)
        {
            return (await _accessoriesRepository.DeleteByIdAsync(accessoryId)) == 1;
        }

    }
}
