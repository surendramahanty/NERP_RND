using Common.Config;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.GeneralSettings.Model;
using System.Linq;
using System.Threading.Tasks;

namespace NERP.GeneralSettings
{
    public class GeneralSettingsService : IGeneralSettingsService
    {
        private readonly IRepository<GeneralSetting> _generalSettingsRepository;
        private const string GeneralSettingsRepository = "GeneralSettings";

        public GeneralSettingsService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _generalSettingsRepository = new MongoRepository<GeneralSetting>(dbSettings, GeneralSettingsRepository);
        }

        public async Task<GeneralSetting> GetGeneralSettings()
        {
            var generalSettings = (await _generalSettingsRepository.GetAllAsync(x=>true)).ToList();

            return generalSettings.FirstOrDefault();
        }

        public async Task<GeneralSetting> SaveGeneralSettings(GeneralSetting generalSettings)
        {
            return await _generalSettingsRepository.UpdateOneAsync(generalSettings);
        }

    }
}
