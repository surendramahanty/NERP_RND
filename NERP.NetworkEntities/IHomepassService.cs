using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IHomepassService
    {
        Task<Homepass> GetHomepass(string homepassId);
        Task<IEnumerable<Homepass>> GetHomepasses(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<IEnumerable<Homepass>> GetHomepasses(IList<string> ids);
        Task<long> GetHomepassesCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Homepass> SaveHomepass(Homepass homepass);
        Task<bool> DeleteHomepass(string homepassId);
    }
}
