using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IODFService
    {
        Task<ODF> GetODF(string odfId);
        Task<IEnumerable<ODF>> GetODFs(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetODFsCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<ODF> SaveODF(ODF odf);
        Task<bool> DeleteODF(string odfId);
    }
}
