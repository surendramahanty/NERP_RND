using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface IAccessoryService
    {
        Task<Accessory> GetAccessory(string accessoryId);
        Task<IEnumerable<Accessory>> GetAccessories(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetAccessoriesCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Accessory> SaveAccessory(Accessory accessory);
        Task<bool> DeleteAccessory(string accessoryId);
    }
}
