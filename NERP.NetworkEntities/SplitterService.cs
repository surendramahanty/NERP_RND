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
    public class SplitterService : ISplitterService
    {
        private readonly IRepository<Splitter> _splittersRepository;
        private const string SplittersRepository = "MST_Splitters";

        public SplitterService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _splittersRepository = new MongoRepository<Splitter>(dbSettings, SplittersRepository);
        }

        public async Task<Splitter> GetSplitter(string splitterId)
        {
            if (string.IsNullOrEmpty(splitterId)) return null;

            return await _splittersRepository.GetByIdAsync(splitterId);
        }

        public async Task<IEnumerable<Splitter>> GetSplitters(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Splitter, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Splitter>(searchFilter);

            IList<Splitter> splitters = null;

            if (page != null && pageSize != null)
                splitters = (await _splittersRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                splitters = (await _splittersRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return splitters;
        }

        public async Task<long> GetSplittersCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Splitter, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Splitter>(searchFilter);
            }

            return await _splittersRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var splitter = await _splittersRepository.GetOneAsync(x => x.Name == name);

            return splitter?.Id;
        }

        public async Task<Splitter> SaveSplitter(Splitter splitter)
        {
            return await _splittersRepository.UpdateOneAsync(splitter);
        }

        public async Task<bool> DeleteSplitter(string splitterId)
        {
            return (await _splittersRepository.DeleteByIdAsync(splitterId)) == 1;
        }
    }
}
