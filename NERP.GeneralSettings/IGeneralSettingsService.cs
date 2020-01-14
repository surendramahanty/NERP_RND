using NERP.GeneralSettings.Model;
using System.Threading.Tasks;

namespace NERP.GeneralSettings
{
    public interface IGeneralSettingsService
    {
        Task<GeneralSetting> GetGeneralSettings();
        Task<GeneralSetting> SaveGeneralSettings(GeneralSetting generalSettings);
    }
}
