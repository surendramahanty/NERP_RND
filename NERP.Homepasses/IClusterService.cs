using Common.DataAccess.Models;
using NERP.Homepasses.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.Homepasses
{
    public interface IClusterService
    {
        Task<Cluster> GetCluster(string clusterId);
        Task<IEnumerable<Cluster>> GetClusters(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetClustersCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Cluster> SaveCluster(Cluster cluster);
        Task<bool> DeleteCluster(string clusterId);
    }
}
