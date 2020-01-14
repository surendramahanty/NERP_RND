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
    public class PoleService : IPoleService
    {
        private readonly IRepository<Pole> _polesRepository;
        private const string PolesRepository = "MST_Poles";

        public PoleService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _polesRepository = new MongoRepository<Pole>(dbSettings, PolesRepository);
        }

        public async Task<Pole> GetPole(string poleId)
        {
            if (string.IsNullOrEmpty(poleId)) return null;

            return await _polesRepository.GetByIdAsync(poleId);
        }

        public async Task<IEnumerable<Pole>> GetPoles(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Pole, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Pole>(searchFilter);

            IList<Pole> poles = null;

            if (page != null && pageSize != null)
                poles = (await _polesRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                poles = (await _polesRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return poles;
        }

        public async Task<long> GetPolesCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Pole, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Pole>(searchFilter);
            }

            return await _polesRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var pole = await _polesRepository.GetOneAsync(x => x.Name == name);

            return pole?.Id;
        }

        public async Task<Pole> SavePole(Pole pole)
        {
            return await _polesRepository.UpdateOneAsync(pole);
        }

        public async Task<bool> DeletePole(string poleId)
        {
            return (await _polesRepository.DeleteByIdAsync(poleId)) == 1;
        }
    }
}
