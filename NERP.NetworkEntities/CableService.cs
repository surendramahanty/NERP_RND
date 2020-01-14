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
    public class CableService : ICableService
    {
        private readonly IRepository<Cable> _cablesRepository;
        private const string CablesRepository = "MST_Cables";

        public CableService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _cablesRepository = new MongoRepository<Cable>(dbSettings, CablesRepository);
        }

        public async Task<Cable> GetCable(string cableId)
        {
            if (string.IsNullOrEmpty(cableId)) return null;

            return await _cablesRepository.GetByIdAsync(cableId);
        }

        public async Task<IEnumerable<Cable>> GetCables(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Cable, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Cable>(searchFilter);

            IList<Cable> cables = null;

            if (page != null && pageSize != null)
                cables = (await _cablesRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                cables = (await _cablesRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return cables;
        }

        public async Task<long> GetCablesCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Cable, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Cable>(searchFilter);
            }

            return await _cablesRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var cable = await _cablesRepository.GetOneAsync(x => x.Name == name);

            return cable?.Id;
        }

        public async Task<Cable> SaveCable(Cable cable)
        {
            return await _cablesRepository.UpdateOneAsync(cable);
        }

        public async Task<bool> DeleteCable(string cableId)
        {
            return (await _cablesRepository.DeleteByIdAsync(cableId)) == 1;
        }
    }
}
