////https://www.talkingdotnet.com/how-to-increase-file-upload-size-asp-net-core/
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;
//using Microsoft.Extensions.Options;
//using NetTopologySuite.Geometries;
//using NetTopologySuite.IO;
//using System;
//using System.Collections;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace NERP.API.Controllers
//{
//    public class LayerController : BaseController
//    {
//        private readonly ILogger _logger;
//        private readonly VectorManager _vectorManager;
//        private readonly IHostingEnvironment _hostingEnvironment;

//        DbaseFileReader _dbfReader;
//        ShapefileReader _shpReader;
//        IEnumerator _dbfEnumerator;
//        IEnumerator _shpEnumerator;
//        ShapefileHeader _shpHeader;
//        DbaseFileHeader _dbfHeader;
//        Geometry _shpRecord = null;
//        List<object> _columnValues;
//        int _recordCount = 0;
//        ArrayList _ShapeFileValues;

//        bool isDeleted = false;

//        bool isMetadataUpdated = false;

//        public vectorLayerController(IOptions<DbConfig> dbConfigs, ILogger<vectorLayerController> logger, IHostingEnvironment hostingEnvironment) : base(dbConfigs.Value)
//        {
//            _logger = logger;
//            _vectorManager = new VectorManager(dbConfigs.Value);
//            _hostingEnvironment = hostingEnvironment;
//        }

//        [HttpPost]
//        public async Task<DataTablesResponse> GetvectorLayer([FromBody]DataTablesRequest dataTablesRequest)
//        {
//            try
//            {

//                dataTablesRequest.Order.OrderByProperty = char.ToUpper(dataTablesRequest.Order.OrderByProperty[0]) + dataTablesRequest.Order.OrderByProperty.Substring(1);
//                //return char.ToUpper(s[0]) + s.Substring(1);
//                SearchFilter searchFilter = null;

//                if (!string.IsNullOrEmpty(dataTablesRequest.Search.Value))
//                {
//                    searchFilter = new SearchFilter
//                    {
//                        ConditionOperator = ConditionOperator.OR,
//                        Filters = new List<Filter>
//                        {
//                            new Filter { PropertyName = "Text", Operator = Operator.Contains, Value = dataTablesRequest.Search.Value, CaseSensitive = false },
//                            new Filter { PropertyName = "ParentId", Operator = Operator.Contains, Value = dataTablesRequest.Search.Value, CaseSensitive = false },
//                        }
//                    };
//                }

//                var recordCount = await _vectorManager.GetVectorsCount(searchFilter);
//                var logActivities = await _vectorManager.GetVectors(searchFilter, dataTablesRequest.Order.OrderByProperty, dataTablesRequest.Order.SortOrder, (dataTablesRequest.Start / dataTablesRequest.Length) + 1, dataTablesRequest.Length);

//                List<VectorLayers> vectorLayers = new List<VectorLayers>();
//                //foreach (VectorLayers vectorlayer in logActivities)
//                //{
//                //    var tempVector = await _vectorManager.getVectorDetailsWithParent(vectorlayer.ParentId);

//                //    if (tempVector != null)
//                //    {
//                //        vectorlayer.ParentId = tempVector.Text;
//                //    }

//                //    vectorLayers.Add(vectorlayer);
//                //}



//                return new DataTablesResponse
//                {
//                    message = "Ok",
//                    data = logActivities,
//                    recordsTotal = recordCount,
//                    draw = dataTablesRequest.Draw,
//                    recordsFiltered = recordCount

//                };
//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error fetching  details.");
//                return new DataTablesResponse { message = "Error" };
//            }


//        }


//        [HttpGet]
//        public async Task<ResponseMessage> GetvectorLayerByName(string layerName)
//        {
//            try
//            {
//                var RegionsData = await _vectorManager.getVectorsDetails(layerName);
//                return new ResponseMessage { Status = "Ok", Data = RegionsData };
//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error fetching Vector Layers Data.");
//                return new ResponseMessage { Status = "Error", Message = "Error fetching Vectors Data." };
//            }

//        }


//        [HttpGet]
//        public async Task<ResponseMessage> GetvectorLayerByIds(string layerId)
//        {
//            try
//            {
//                string[] layersIds = layerId.Split(";");
//                var vectorLayerData = await _vectorManager.getVectorsDetailsById(layersIds[0]);
//                List<Records> records = vectorLayerData.Data.FindAll(x => x.Id == layersIds[1]);

//                return new ResponseMessage { Status = "Ok", Data = records };
//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error fetching Vector Layers Data.");
//                return new ResponseMessage { Status = "Error", Message = "Error fetching Vectors Data." };
//            }

//        }


//        [HttpDelete]
//        public async Task<ResponseMessage> DeleteVector(string layerId)
//        {
//            try
//            {
//                var RegionsData = await _vectorManager.DeleteVectors(layerId);
//                return new ResponseMessage { Status = "Ok", Data = RegionsData };
//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error fetching Vector Layers Data.");
//                return new ResponseMessage { Status = "Error", Message = "Error fetching Vectors Data." };
//            }

//        }


//        [HttpGet]
//        public async Task<ResponseMessage> GetVectorsForTree()
//        {
//            try
//            {
//                var RegionsData = await _vectorManager.GetVectors();
//                return new ResponseMessage { Status = "Ok", Data = RegionsData };
//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error fetching Regions Data.");
//                return new ResponseMessage { Status = "Error", Message = "Error fetching Vectors Data." };
//            }

//        }

//        [HttpPost]
//        [RequestSizeLimit(500000000)]
//        public async Task<ResponseMessage> UploadVectors(FileUploadVm shapeFiles)
//        {
//            try
//            {
//                if (shapeFiles.Tags == "styling")
//                {
//                    var currentVector = await _vectorManager.getVectorsDetails(shapeFiles.Folder);


//                    if (currentVector != null)
//                    {
//                        var vectorsData = await ProcessPointerImageFile(shapeFiles, shapeFiles.Folder);
//                        if (vectorsData.Status == "Ok")
//                        {
//                            currentVector.PointerImagePath = vectorsData.Message;

//                            var currentVector1 = await _vectorManager.SaveVectors(currentVector);
//                        }
//                        return vectorsData;
//                    }
//                    else
//                    {
//                        return new ResponseMessage { Status = "Error", Message = "Layer Name can't be duplicate" };
//                    }
//                }
//                else
//                {
//                    if (shapeFiles.Tags == "update")
//                    {
//                        await _vectorManager.DeleteVectors(shapeFiles.Folder);
//                    }

//                    var currentVector = await _vectorManager.getVectorsDetails(shapeFiles.Folder);

//                    if (currentVector == null)
//                    {
//                        var vectorsData = await ProcessShapeFiles(shapeFiles, shapeFiles.Folder);
//                        return vectorsData;
//                    }
//                    else
//                    {
//                        return new ResponseMessage { Status = "Error", Message = "Layer Name can't be duplicate" };
//                    }
//                }

//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error in Region Upload");
//                return new ResponseMessage { Status = "Error", Message = "Error in Region Upload" };
//            }
//        }

//        [HttpGet]
//        public async Task<ResponseMessage> GetVectorLayerColor(string layerName, string colorName, string thickness)
//        {
//            try
//            {

//                var currentVector = await _vectorManager.getVectorsDetails(layerName);

//                if (currentVector != null)
//                {
//                    currentVector.Color = colorName;
//                    currentVector.Thickness = thickness;
//                    var currentVector1 = await _vectorManager.SaveVectors(currentVector);

//                    return new ResponseMessage { Status = "Ok", Data = currentVector1 };
//                }
//                else
//                {
//                    return new ResponseMessage { Status = "Error", Message = "Error in updating color" };
//                }

//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error in updating color");
//                return new ResponseMessage { Status = "Error", Message = "Error in updating color" };
//            }
//        }


//        private async Task<ResponseMessage> ProcessPointerImageFile(FileUploadVm shapeFiles, string layerName)
//        {
//            try
//            {
//                //isDeleted = false;

//                //var uploadFolder = "/Uploads/" + LoginUser.Id + "/" + System.Guid.NewGuid().ToString();
//                //var uploadPath = _hostingEnvironment.ContentRootPath + uploadFolder;

//                //Directory.CreateDirectory(uploadPath);

//                if (shapeFiles.Files == null) return null;

//                string imgBase64 = string.Empty;
//                using (var ms = new MemoryStream())
//                {
//                    shapeFiles.Files[0].CopyTo(ms);
//                    var fileBytes = ms.ToArray();

//                    imgBase64 = Convert.ToBase64String(fileBytes);
//                }

//                return new ResponseMessage { Status = "Ok", Message = imgBase64 };

//                //var filePath = "";

//                //if (shapeFiles.Files.Count > 0)
//                //{

//                //    filePath = Path.Combine(uploadPath, shapeFiles.Files[0].FileName);

//                //    using (var stream = new FileStream(filePath, FileMode.Create))
//                //    {
//                //        stream.rea
//                //        shapeFiles.Files[0].CopyTo(stream);
//                //    }
//                //}



//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error in Region Upload");
//                return new ResponseMessage { Status = "Error", Message = "Error in Region Upload" };
//            }

//        }

//        private async Task<ResponseMessage> ProcessShapeFiles(FileUploadVm shapeFiles, string layerName)
//        {
//            try
//            {
//                isDeleted = false;

//                var uploadFolder = "/Uploads/" + LoginUser.Id + "/" + System.Guid.NewGuid().ToString();
//                var uploadPath = _hostingEnvironment.ContentRootPath + uploadFolder;

//                //var uploadPath = Path.Combine(_hostingEnvironment.ContentRootPath, "Uploads", LoginUser.Id, System.Guid.NewGuid().ToString());

//                Directory.CreateDirectory(uploadPath);

//                if (shapeFiles.Files == null) return null;

//                var shpFile = "";
//                var dbfFile = "";

//                var filePath = "";

//                foreach (var shapeFile in shapeFiles.Files)
//                {
//                    if (shapeFile.Length <= 0) continue;

//                    filePath = Path.Combine(uploadPath, shapeFile.FileName);

//                    var ext = Path.GetExtension(filePath).ToLower();

//                    if (ext == ".shp")
//                        shpFile = filePath;
//                    else if (ext == ".dbf")
//                        dbfFile = filePath;

//                    using (var stream = new FileStream(filePath, FileMode.Create))
//                    {
//                        shapeFile.CopyTo(stream);
//                    }

//                }

//                //var shpStream = new FileStreamProvider(StreamTypes.Shape, Path.ChangeExtension(shpFile, ".shp"), true);
//                //var dbfStream = new FileStreamProvider(StreamTypes.Data, Path.ChangeExtension(shpFile, ".dbf"), true);
//                //var shxStream = new FileStreamProvider(StreamTypes.Index, Path.ChangeExtension(shpFile, ".shx"), true);


//                //Read Dbf file
//                _dbfReader = new DbaseFileReader(dbfFile);

//                //Read Shp file
//                _shpReader = new ShapefileReader(shpFile, GeometryFactory.Floating);

//                _dbfHeader = _dbfReader.GetHeader();

//                _recordCount = _dbfHeader.NumRecords;

//                _dbfEnumerator = _dbfReader.GetEnumerator();
//                _shpEnumerator = _shpReader.GetEnumerator();

//                _ShapeFileValues = new ArrayList();

//                StringBuilder fileContent = new StringBuilder();

//                List<Region> regions = new List<Region>();

//                VectorLayers vectorLayers = new VectorLayers();

//                List<Records> records = new List<Records>();

//                while (_dbfEnumerator.MoveNext() && _shpEnumerator.MoveNext())
//                {
//                    _shpRecord = (Geometry)_shpEnumerator.Current;

//                    // get current dbase record
//                    // _columnValues = ((ArrayList)_dbfEnumerator.Current).Cast<string>().ToList();

//                    _columnValues = ((ArrayList)_dbfEnumerator.Current).Cast<object>().ToList();

//                    //_columnValues.Insert(0, _shpRecord.Coordinates);

//                    //  var regionList = _columnValues.Skip(1).ToList();

//                    var vectorList = _columnValues.ToList();

//                    if (!isMetadataUpdated)
//                    {
//                        vectorLayers.LayerName = layerName;
//                        vectorLayers.LayerType = _shpRecord.GeometryType;
//                        vectorLayers.ShapeFileName = Path.GetFileNameWithoutExtension(shpFile);


//                        List<string> liCloumns = new List<string>();
//                        foreach (var field in _dbfHeader.Fields)
//                        {
//                            liCloumns.Add(field.Name);
//                        }

//                        vectorLayers.Metadata = liCloumns;

//                        isMetadataUpdated = true;
//                    }


//                    LocationVector locationVector = GetVectorBoundry(_shpRecord.Coordinates).Result;

//                    string guidEachEntity = Guid.NewGuid().ToString("N").Replace("-", "").Substring(0, 24);

//                    records.Add(new Records() { Id = guidEachEntity, Location = locationVector, Attributes = _columnValues });



//                    //var index = 0;

//                    //foreach (var region in regionList)
//                    //{
//                    //    var parentIndex = (index == 0) ? 0 : index - 1;

//                    //    var regionCoordinates = (index == regionList.Count - 1) ? _shpRecord.Coordinates : null;

//                    //    var regionsDetail=await GetRegionDetailsAsync(region.ToString(), regionList[parentIndex].ToString(), regionCoordinates);

//                    //    regions.Add(regionsDetail);

//                    //    index++;

//                    //}


//                    //if (_columnValues.Count == 2)
//                    //{
//                    //    region.Text = _columnValues[1].ToString();
//                    //    region.ParentId = "#";
//                    //}

//                    //var existingRegion = await _regionsManager.getRegionDetails(region.Text);

//                    //if (existingRegion != null) continue;

//                    //regions.Add(region);

//                    //var RegionLocation = _hostingEnvironment.ContentRootPath + "/Regions/" + Guid.NewGuid();

//                    //Directory.CreateDirectory(RegionLocation.Replace("/", "\\"));

//                    //RegionLocation = RegionLocation + "\\" + region.Text + ".json";

//                    //System.IO.File.WriteAllText(RegionLocation.Replace("/", "\\"), JsonConvert.SerializeObject(region));

//                    //// region.Location.coordinates = new List<double[]>();

//                    //region.FilePath = RegionLocation;

//                    //var saveRegion = await _regionsManager.SaveRegions(region);

//                    //if (_columnValues.Count > 2)
//                    //{

//                    //    for (int i = 2; i < _columnValues.Count; i++)
//                    //    {
//                    //        region.Text = _columnValues[i].ToString();

//                    //        existingRegion = await _regionsManager.getRegionDetails(_columnValues[i - 1].ToString());

//                    //        if (existingRegion != null)
//                    //            region.ParentId = existingRegion.Id;
//                    //        else
//                    //            continue;

//                    //        regions.Add(region);

//                    //        saveRegion = await _regionsManager.SaveRegions(region);
//                    //    }
//                    //}

//                }

//                vectorLayers.Data = records;

//                var savedVector = await _vectorManager.SaveVectors(vectorLayers);

//                return new ResponseMessage { Status = "Ok", Data = savedVector };

//            }
//            catch (Exception ex)
//            {
//                _logger?.LogError(ex, "Error in Region Upload");
//                return new ResponseMessage { Status = "Error", Message = "Error in Region Upload" };
//            }

//        }

//        private async Task<ResponseMessage> DeleteVectorByLevel(string Level)
//        {
//            try
//            {

//                var currentVector = await _vectorManager.DeleteVectors(Level);
//                isDeleted = true;


//                var RegionsData = await _vectorManager.GetVectorsForTree();
//                return new ResponseMessage { Status = "Ok", Data = RegionsData };

//                //return currentVector;
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex, "error in deleting in vector layer ");
//                isDeleted = false;


//                return new ResponseMessage { Status = "Error", Message = "deleting in vector layer." };

//            }


//        }

//        private async Task<LocationVector> GetVectorBoundry(Coordinate[] vectorCoordinates)
//        {
//            try
//            {
//                if (vectorCoordinates == null) return null;

//                LocationVector loc = new LocationVector();

//                loc.type = _shpRecord.GeometryType;

//                var latlng = new List<List<double[]>>();

//                var list = new List<double[]>();

//                foreach (var coordinate in _shpRecord.Coordinates)
//                {

//                    double[] lnglat = new double[2];

//                    lnglat[0] = Convert.ToDouble(coordinate.X);
//                    lnglat[1] = Convert.ToDouble(coordinate.Y);

//                    list.Add(lnglat);

//                }

//                //if (list[0][0] != list[list.Count - 1][0] && list[0][1] != list[list.Count - 1][1])
//                //    list.Add(list[0]);

//                //latlng.Add(list);

//                loc.coordinates = list;

//                return loc;
//            }
//            catch (Exception e)
//            {
//                throw e;
//            }
//        }

//        private async Task<VectorLayers> GetVectorDetailsAsync(string VectorName, string parentId, Coordinate[] RegionCoordinates)
//        {
//            try
//            {

//                //LocationSite loc = await GetVectorBoundry(RegionCoordinates);

//                var currentVector = await _vectorManager.getVectorsDetails(VectorName);

//                if (currentVector == null)
//                {
//                    var parent = (parentId == VectorName) ? "#" : parentId;

//                    //currentVector = await _vectorManager.SaveVectors(new VectorLayers() { Text = VectorName, ParentId = parent, Location = loc });
//                }

//                return currentVector;
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex, "Invalid polygon for Region : " + VectorName);
//                return null;
//            }
//        }
//    }
//}
