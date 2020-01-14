using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface ISpliceClosureService
    {
        Task<SpliceClosure> GetSpliceClosure(string spliceClosureId);
        Task<IEnumerable<SpliceClosure>> GetSpliceClosures(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetSpliceClosuresCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<SpliceClosure> SaveSpliceClosure(SpliceClosure spliceClosure);
        Task<bool> DeleteSpliceClosure(string spliceClosureId);
    }
}
