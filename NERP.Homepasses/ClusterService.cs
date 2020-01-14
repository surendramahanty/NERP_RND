using Common.Config;
using Common.DataAccess.Models;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.Homepasses.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.Homepasses
{
    public class ClusterService : IClusterService
    {
        private readonly IRepository<Cluster> _clustersRepository;
        private const string ClustersRepository = "Clusters";

        public ClusterService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _clustersRepository = new MongoRepository<Cluster>(dbSettings, ClustersRepository);
        }

        public async Task<Cluster> GetCluster(string clusterId)
        {
            if (string.IsNullOrEmpty(clusterId)) return null;

            return await _clustersRepository.GetByIdAsync(clusterId);
        }

        public async Task<IEnumerable<Cluster>> GetClusters(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Cluster, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Cluster>(searchFilter);

            IList<Cluster> clusters = null;

            if (page != null && pageSize != null)
                clusters = (await _clustersRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                clusters = (await _clustersRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return clusters;
        }

        public async Task<long> GetClustersCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Cluster, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Cluster>(searchFilter);
            }

            return await _clustersRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var cluster = await _clustersRepository.GetOneAsync(x => x.Name == name);

            return cluster?.Id;
        }

        public async Task<Cluster> SaveCluster(Cluster cluster)
        {
            return await _clustersRepository.UpdateOneAsync(cluster);
        }

        public async Task<bool> DeleteCluster(string clusterId)
        {
            return (await _clustersRepository.DeleteByIdAsync(clusterId)) == 1;
        }
    }
}
