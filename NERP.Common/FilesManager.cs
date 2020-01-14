using System.IO;

namespace NERP.Commom
{
    public static class FilesManager
    {
        //public static Stream GetFile(string networkFilePath, string networkUserId, string networkPassword)
        //{
        //    using (new Impersonation(networkFilePath, networkUserId, networkPassword))
        //    {
        //        if (File.Exists(networkFilePath))
        //        {
        //            return new FileStream(networkFilePath, FileMode.Open, FileAccess.Read);
        //        }
        //        else
        //            return null;
        //    }
        //}

        public static Stream GetFile(string filePath)
        {
            if (File.Exists(filePath))
                return new FileStream(filePath, FileMode.Open, FileAccess.Read);
            else
                return null;

        }

        public static bool DeleteFile(string filePath)
        {
            File.Delete(filePath);
            return true;
        }

        //public static void CopyFile(string sourceFilePath, string destinationFilePath, string networkUserId, string networkPassword)
        //{
        //    var destFolder = Directory.GetParent(destinationFilePath).FullName;

        //    using (new Impersonation(destFolder, networkUserId, networkPassword))
        //    {
        //        if (!Directory.Exists(destFolder))
        //            Directory.CreateDirectory(destFolder);

        //        File.Copy(sourceFilePath, destinationFilePath, true);
        //    }
        //}

        public static void CopyFile(string sourceFilePath, string destinationFilePath)
        {
            var destFolder = Directory.GetParent(destinationFilePath).FullName;


            if (!Directory.Exists(destFolder))
                Directory.CreateDirectory(destFolder);

            File.Copy(sourceFilePath, destinationFilePath, true);

        }

        //public static void MoveFile(string sourceFilePath, string destinationFilePath, string networkUserId, string networkPassword)
        //{
        //    var destFolder = Directory.GetParent(destinationFilePath).FullName;

        //    using (new Impersonation(destFolder, networkUserId, networkPassword))
        //    {
        //        if (!Directory.Exists(destFolder))
        //            Directory.CreateDirectory(destFolder);

        //        File.Copy(sourceFilePath, destinationFilePath, true);

        //        if (File.Exists(destinationFilePath))
        //            File.Delete(sourceFilePath);
        //    }
        //}

        public static void MoveFile(string sourceFilePath, string destinationFilePath)
        {
            var destFolder = Directory.GetParent(destinationFilePath).FullName;

            if (!Directory.Exists(destFolder))
                Directory.CreateDirectory(destFolder);

            File.Copy(sourceFilePath, destinationFilePath, true);

            if (File.Exists(destinationFilePath))
                File.Delete(sourceFilePath);

        }

        //public static void SaveFile(byte[] data, string destinationFilePath, string networkUserId, string networkPassword)
        //{
        //    var destFolder = Directory.GetParent(destinationFilePath).FullName;

        //    using (new Impersonation(destFolder, networkUserId, networkPassword))
        //    {
        //        if (!Directory.Exists(destFolder))
        //            Directory.CreateDirectory(destFolder);

        //        File.WriteAllBytes(destinationFilePath, data);
        //    }
        //}

        public static void SaveFile(byte[] data, string destinationFilePath)
        {
            var destFolder = Directory.GetParent(destinationFilePath).FullName;

            if (!Directory.Exists(destFolder))
                Directory.CreateDirectory(destFolder);

            File.WriteAllBytes(destinationFilePath, data);

        }

        //public static void SaveFile(Stream stream, string destinationFilePath, string networkUserId, string networkPassword)
        //{
        //    var destFolder = Directory.GetParent(destinationFilePath).FullName;

        //    using (new Impersonation(destFolder, networkUserId, networkPassword))
        //    {
        //        if (!Directory.Exists(destFolder))
        //            Directory.CreateDirectory(destFolder);

        //        using (var fileStream = new FileStream(destinationFilePath, FileMode.Create))
        //        {
        //            stream.CopyTo(fileStream);
        //        }
        //    }
        //}

    }
}
