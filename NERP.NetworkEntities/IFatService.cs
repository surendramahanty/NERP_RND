using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IFatService
    {
        Task<FAT> GetFat(string fatId);
        Task<IEnumerable<FAT>> GetFats(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetFatsCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<FAT> SaveFat(FAT fat);
        Task<bool> DeleteFat(string FatId);
    }
}
