using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IPoleService
    {
        Task<Pole> GetPole(string poleId);
        Task<IEnumerable<Pole>> GetPoles(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetPolesCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Pole> SavePole(Pole pole);
        Task<bool> DeletePole(string poleId);
    }
}
