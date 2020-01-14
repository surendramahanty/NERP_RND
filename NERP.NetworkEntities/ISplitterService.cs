using Common.DataAccess.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.NetworkEntities
{
    public interface ISplitterService
    {
        Task<Splitter> GetSplitter(string splitterId);
        Task<IEnumerable<Splitter>> GetSplitters(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null);
        Task<long> GetSplittersCount(SearchFilter searchFilter = null);
        Task<string> CheckNameExists(string name);
        Task<Splitter> SaveSplitter(Splitter splitter);
        Task<bool> DeleteSplitter(string splitterId);
    }
}
