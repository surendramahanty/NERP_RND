using Common.DataAccess.Models;
using NERP.Designs.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.Designs
{
    public interface IDesignService
    {
        Task<Design> GetDesign(string designId);
        Task<IEnumerable<Design>> GetDesigns(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetDesignsCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Design> SaveDesign(Design design);
        Task<bool> DeleteDesign(string designId);
    }
}
