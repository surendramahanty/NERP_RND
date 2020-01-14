using Common.DataAccess.Models;
using NERP.Common.Models;
using NERP.Homepasses.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.Homepasses
{
    public interface IHomepassService
    {
        Task<Homepass> GetHomepass(string homepassId);
        Task<IEnumerable<Homepass>> GetHomepasses(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<IEnumerable<Homepass>> GetHomepasses(IList<string> ids);
        Task<IEnumerable<Homepass>> GetHomepassesInCluster(Polygon cluster, bool includeDeteted = false);
        Task<IEnumerable<Homepass>> GetPointsWithinRadius(double[] center, double radius, bool includeDeteted = false);
        Task<long> GetHomepassesCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Homepass> SaveHomepass(Homepass homepass);
        Task<bool> DeleteHomepass(string homepassId);
    }
}
