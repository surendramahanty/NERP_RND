using Common.Config;
using Common.DataAccess.Models;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.Designs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.Designs
{
    public class DesignService : IDesignService
    {
        private readonly IRepository<Design> _designsRepository;
        private const string DesignsRepository = "Designs";

        public DesignService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _designsRepository = new MongoRepository<Design>(dbSettings, DesignsRepository);
        }

        public async Task<Design> GetDesign(string designId)
        {
            if (string.IsNullOrEmpty(designId)) return null;

            return await _designsRepository.GetByIdAsync(designId);
        }

        public async Task<IEnumerable<Design>> GetDesigns(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Design, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Design>(searchFilter);

            IList<Design> designs = null;

            if (page != null && pageSize != null)
                designs = (await _designsRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                designs = (await _designsRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return designs;
        }

        public async Task<long> GetDesignsCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Design, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Design>(searchFilter);
            }

            return await _designsRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var design = await _designsRepository.GetOneAsync(x => x.Name == name);

            return design?.Id;
        }

        public async Task<Design> SaveDesign(Design design)
        {
            return await _designsRepository.UpdateOneAsync(design);
        }

        public async Task<bool> DeleteDesign(string designId)
        {
            return (await _designsRepository.DeleteByIdAsync(designId)) == 1;
        }
    }
}
