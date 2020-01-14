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
    public class SpliceClosureService : ISpliceClosureService
    {
        private readonly IRepository<SpliceClosure> _spliceClosuresRepository;
        private const string SpliceClosuresRepository = "MST_SpliceClosures";

        public SpliceClosureService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _spliceClosuresRepository = new MongoRepository<SpliceClosure>(dbSettings, SpliceClosuresRepository);
        }

        public async Task<SpliceClosure> GetSpliceClosure(string spliceClosureId)
        {
            if (string.IsNullOrEmpty(spliceClosureId)) return null;

            return await _spliceClosuresRepository.GetByIdAsync(spliceClosureId);
        }

        public async Task<IEnumerable<SpliceClosure>> GetSpliceClosures(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<SpliceClosure, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<SpliceClosure>(searchFilter);

            IList<SpliceClosure> spliceClosures = null;

            if (page != null && pageSize != null)
                spliceClosures = (await _spliceClosuresRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                spliceClosures = (await _spliceClosuresRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return spliceClosures;
        }

        public async Task<long> GetSpliceClosuresCount(SearchFilter searchFilter = null)
        {
            Expression<Func<SpliceClosure, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<SpliceClosure>(searchFilter);
            }

            return await _spliceClosuresRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var spliceClosure = await _spliceClosuresRepository.GetOneAsync(x => x.Name == name);

            return spliceClosure?.Id;
        }

        public async Task<SpliceClosure> SaveSpliceClosure(SpliceClosure spliceClosure)
        {
            return await _spliceClosuresRepository.UpdateOneAsync(spliceClosure);
        }

        public async Task<bool> DeleteSpliceClosure(string spliceClosureId)
        {
            return (await _spliceClosuresRepository.DeleteByIdAsync(spliceClosureId)) == 1;
        }
    }
}
