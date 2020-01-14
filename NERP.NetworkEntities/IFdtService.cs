using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IFdtService
    {
        Task<FDT> GetFdt(string FdtId);
        Task<IEnumerable<FDT>> GetFdts(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetFdtsCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<FDT> SaveFdt(FDT Fdt);
        Task<bool> DeleteFdt(string FdtId);
    }
}
