using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface ICivilworkService
    {
        Task<Civilwork> GetCivilwork(string civilworkId);
        Task<IEnumerable<Civilwork>> GetCivilworks(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetCivilworksCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Civilwork> SaveCivilwork(Civilwork civilwork);
        Task<bool> DeleteCivilwork(string civilworkId);
    }
}
