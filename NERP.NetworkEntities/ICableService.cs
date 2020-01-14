using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface ICableService
    {
        Task<Cable> GetCable(string cableId);
        Task<IEnumerable<Cable>> GetCables(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetCablesCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Cable> SaveCable(Cable cable);
        Task<bool> DeleteCable(string cableId);
    }
}
