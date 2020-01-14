using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IDuctService
    {
        Task<Duct> GetDuct(string ductId);
        Task<IEnumerable<Duct>> GetDucts(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetDuctsCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Duct> SaveDuct(Duct duct);
        Task<bool> DeleteDuct(string ductId);
    }
}
