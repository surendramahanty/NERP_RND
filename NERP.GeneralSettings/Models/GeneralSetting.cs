using Common.DataAccess.Mongo;

namespace NERP.GeneralSettings.Model
{
    public class GeneralSetting: DbBaseEntity
    {
        public int FileAttachmentLimit { get; set; }
    }
}
