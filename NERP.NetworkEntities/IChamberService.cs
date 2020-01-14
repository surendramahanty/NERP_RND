using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IChamberService
    {
        Task<Chamber> GetChamber(string chamberId);
        Task<IEnumerable<Chamber>> GetChambers(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetChambersCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Chamber> SaveChamber(Chamber chamber);
        Task<bool> DeleteChamber(string chamberId);
    }
}
