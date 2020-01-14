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
    public class FdtService : IFdtService
    {
        private readonly IRepository<FDT> _fdtRepository;
        private const string FdtRepository = "MST_Fdt";

        public FdtService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _fdtRepository = new MongoRepository<FDT>(dbSettings, FdtRepository);
        }

        public async Task<FDT> GetFdt(string fdtId)
        {
            if (string.IsNullOrEmpty(fdtId)) return null;

            return await _fdtRepository.GetByIdAsync(fdtId);
        }

        public async Task<IEnumerable<FDT>> GetFdts(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<FDT, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<FDT>(searchFilter);

            IList<FDT> fdts = null;

            if (page != null && pageSize != null)
                fdts = (await _fdtRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                fdts = (await _fdtRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return fdts;
        }

        public async Task<long> GetFdtsCount(SearchFilter searchFilter = null)
        {
            Expression<Func<FDT, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<FDT>(searchFilter);
            }

            return await _fdtRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var fdt = await _fdtRepository.GetOneAsync(x => x.Name == name);

            return fdt?.Id;
        }

        public async Task<FDT> SaveFdt(FDT fdt)
        {
            return await _fdtRepository.UpdateOneAsync(fdt);
        }
        public async Task<bool> DeleteFdt(string FdtId)
        {
            return (await _fdtRepository.DeleteByIdAsync(FdtId)) == 1;
        }
    }
}
