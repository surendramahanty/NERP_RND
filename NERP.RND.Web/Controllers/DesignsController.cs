using AutoMapper;
using Common.Config;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NERP.Commom;
using NERP.Common.Models;
using NERP.Designs;
using NERP.Designs.Models;
using NERP.NetworkEntities.Models;
using NERP.RND.Web.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using SharpKml.Base;
using SharpKml.Dom;
using SharpKml.Engine;
using Document = NERP.Common.Models.Document;
using Microsoft.AspNetCore.Hosting;

namespace NERP.RND.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class DesignsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IDesignService _designService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly IHostingEnvironment _hostingEnvironment;

        public DesignsController(IDesignService designService, IUserService userService, IOptions<AppSettings> appSettings, IMapper mapper, ILoggerFactory loggerFactory, IHostingEnvironment hostingEnvironment) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("HomePassesController");

            _designService = designService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetDesign(string designId)
        {
            try
            {
                var design = await _designService.GetDesign(designId);

                return new ResponseMessage { Status = "Ok", Data = design };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching design.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching design." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetDesigns([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _designService.GetDesignsCount(paginationRequest.Filter);
                var designs = await _designService.GetDesigns(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = designs,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching designs.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching designs." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _designService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveDesign(DesignVm designVm)
        {
            try
            {
                var design = JsonConvert.DeserializeObject<Design>(designVm.SerializedDesign);

                if (design.Id == null)
                {
                    if (string.IsNullOrEmpty(design.ReferenceId))
                        design.ReferenceId = Guid.NewGuid().ToString();

                    design.CreatedBy = LoginUser.Name;
                    design.CreatedDate = DateTime.UtcNow;
                }

                design.UpdatedBy = LoginUser.Name;
                design.UpdatedDate = DateTime.UtcNow;

                var savedDesign = await _designService.SaveDesign(design);

                SaveDocuments(designVm.DocumentFiles, savedDesign.Id, savedDesign.Documents);

                savedDesign = await _designService.SaveDesign(savedDesign);

                if (savedDesign == null) return new ResponseMessage { Status = "Error", Message = "Error saving design." };

                return new ResponseMessage { Status = "Ok", Data = savedDesign };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving design.");
                return new ResponseMessage { Status = "Error", Message = "Error saving design." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteDesign(string designId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Designs", Operator = Operator.Equals, Value = designId
                //        }
                //    }
                //};

                //var usersCount = await _designService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _designService.DeleteDesign(designId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "HomePass cannot be deleted as there are users associated with the selected design." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting design.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting design." };
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetDocument(string designId, string documentId)
        {
            try
            {
                var project = await _designService.GetDesign(designId);

                var document = project.Documents.Find(x => x.Id == documentId);

                var filePath = Path.Combine(_appSettings.DocumentsStorage, designId, documentId + "_" + document.FileName);
                var stream = FilesManager.GetFile(filePath);

                return new FileStreamResult(stream, "*/*") { FileDownloadName = document.FileName };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching document.");
                return Json(new ResponseMessage { Status = "Error", Message = "Error fetching docuent." });
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> DeleteDocument(string designId, string documentId)
        {
            try
            {
                var design = await _designService.GetDesign(designId);

                var document = design.Documents.Find(x => x.Id == documentId);

                var filePath = Path.Combine(_appSettings.DocumentsStorage, designId, documentId + "_" + document.FileName);
                var response = FilesManager.DeleteFile(filePath);

                return new ResponseMessage { Status = "Ok", Data = response };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting document.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting document." };
            }

        }

        private void SaveDocuments(List<IFormFile> files, string designId, List<Document> documents)
        {
            if (files == null) return;

            var filesFolder = Path.Combine(_appSettings.DocumentsStorage, designId);

            Directory.CreateDirectory(filesFolder);

            foreach (var file in files)
            {
                if (file.Length <= 0) continue;

                var documentId = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

                var filePath = Path.Combine(filesFolder, documentId + "_" + file.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                var doc = documents.Find(x => x.FileName == file.FileName && x.FileSize == file.Length);

                doc.Id = documentId;
                doc.FilePath = filePath;
            }
        }


        [HttpGet]
        public async Task<ResponseMessage> ExportDesign(string designId)
        {
            try
            {
                var project = await _designService.GetDesign(designId);
                string projectPath = string.Empty;

                if (project.BluePrint != null)
                {


                    List<Cable> cables = new List<Cable>();
                    List<MicroDuct> microduct = new List<MicroDuct>();
                    List<Chamber> chambers = new List<Chamber>();
                    List<ODF> oDFs = new List<ODF>();
                    List<Duct> ducts = new List<Duct>();
                    List<Pole> poles = new List<Pole>();
                    List<Splitter> splitters = new List<Splitter>();
                    List<SpliceClosure> spliceClosures = new List<SpliceClosure>();
                    List<FAT> fat = new List<FAT>();
                    List<FDT> fdt = new List<FDT>();


                    if (project.BluePrint.Children != null && project.BluePrint.Children.Count > 0)
                        ExtractNetwork(project.BluePrint.Children, cables, chambers, oDFs, ducts, microduct, poles, spliceClosures, splitters, fat, fdt);

                    if (cables.Count > 0 || chambers.Count > 0 || oDFs.Count > 0 || ducts.Count > 0 || poles.Count > 0 || splitters.Count > 0 || spliceClosures.Count > 0)
                    {
                        var uploadFolder = "\\Uploads\\" + LoginUser.Id + "\\" + System.Guid.NewGuid().ToString();

                        var uploadPath = _hostingEnvironment.ContentRootPath + uploadFolder;

                        Directory.CreateDirectory(uploadPath);


                        projectPath = Path.Combine(uploadPath, "DesignExport.kml");


                        Kml kml = new Kml();
                        Placemark placemark = new Placemark();
                        SharpKml.Dom.Point point;

                        SharpKml.Dom.Document document1 = new SharpKml.Dom.Document();
                        var style = new Style();

                        foreach (var chamber in chambers)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            point.Coordinate = new SharpKml.Base.Vector(Convert.ToDouble(chamber.Geometry.coordinates[1]), Convert.ToDouble(chamber.Geometry.coordinates[0]));
                            placemark.Geometry = point;

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);


                        }

                        foreach (var chamber in oDFs)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            point.Coordinate = new SharpKml.Base.Vector(Convert.ToDouble(chamber.Geometry.coordinates[1]), Convert.ToDouble(chamber.Geometry.coordinates[0]));
                            placemark.Geometry = point;

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);


                        }
                        foreach (var chamber in poles)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            point.Coordinate = new SharpKml.Base.Vector(Convert.ToDouble(chamber.Geometry.coordinates[1]), Convert.ToDouble(chamber.Geometry.coordinates[0]));
                            placemark.Geometry = point;

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);


                           
                        }
                        foreach (var chamber in splitters)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            point.Coordinate = new SharpKml.Base.Vector(Convert.ToDouble(chamber.Geometry.coordinates[1]), Convert.ToDouble(chamber.Geometry.coordinates[0]));
                            placemark.Geometry = point;

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);


                           
                        }
                        foreach (var chamber in spliceClosures)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            point.Coordinate = new SharpKml.Base.Vector(Convert.ToDouble(chamber.Geometry.coordinates[1]), Convert.ToDouble(chamber.Geometry.coordinates[0]));
                            placemark.Geometry = point;

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);


                           
                        }

                        foreach (var chamber in cables)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            SharpKml.Dom.LineString linestring = new SharpKml.Dom.LineString();

                            CoordinateCollection coordinates = new CoordinateCollection();

                            foreach (var coordinate in chamber.Geometry.coordinates)
                            {
                                coordinates.Add(new Vector(coordinate[1], coordinate[0]));
                            }
                            linestring.Coordinates = coordinates;
                            placemark.Geometry = linestring;

                            placemark.ExtendedData = new ExtendedData();

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ALocation",
                                Value = chamber.ALocation
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "BLocation",
                                Value = chamber.BLocation
                            });
                            if (chamber.IsUnderground.HasValue)
                            {
                                placemark.ExtendedData.AddData(new Data
                                {
                                    Name = "IsUnderground",
                                    Value = chamber.IsUnderground.ToString()
                                });
                            }

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);

                            
                        }

                        foreach (var chamber in ducts)
                        {

                            placemark = new Placemark();
                            placemark.Name = chamber.EntityType;
                            placemark.ExtendedData = new ExtendedData();

                            point = new SharpKml.Dom.Point();

                            SharpKml.Dom.LineString linestring = new SharpKml.Dom.LineString();

                            CoordinateCollection coordinates = new CoordinateCollection();

                            foreach (var coordinate in chamber.Geometry.coordinates)
                            {
                                coordinates.Add(new Vector(coordinate[1], coordinate[0]));
                            }
                            linestring.Coordinates = coordinates;
                            placemark.Geometry = linestring;

                            placemark.ExtendedData = new ExtendedData();

                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Code",
                                Value = chamber.Code
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ConstructionStage",
                                Value = chamber.ConstructionStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "ActivationStage",
                                Value = chamber.ActivationStage
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "Accessibility",
                                Value = chamber.Accessibility
                            });
                            placemark.ExtendedData.AddData(new Data
                            {
                                Name = "HierarchyType",
                                Value = chamber.HierarchyType
                            });

                            document1.AddFeature(placemark);

                            
                        }


                        kml.Feature = document1;
                        KmlFile kmlfile = KmlFile.Create(kml, false);

                        System.IO.File.Create(projectPath).Dispose();

                        using (var stream1 = System.IO.File.OpenWrite(projectPath))
                        {
                            kmlfile.Save(stream1);
                        }
                    }

                }


                return new ResponseMessage() { Status = "ok", Data = projectPath };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error export design.");
                return new ResponseMessage() { Status = "Error", Message = "Error export design." };
            }

        }

        [HttpGet]
        public ActionResult Download(string fileName)
        {
            byte[] fileBytes = System.IO.File.ReadAllBytes(fileName);

            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, Path.GetFileName(fileName));
        }

        public void ExtractNetwork(List<GeoNode> geoNodes, List<Cable> cables, List<Chamber> chambers, List<ODF> oDFs, List<Duct> ducts, List<MicroDuct> microduct, List<Pole> poles, List<SpliceClosure> spliceClosures, List<Splitter> splitters, List<FAT> fat, List<FDT> fdt)
        {


            foreach (var childs in geoNodes)
            {

                if (childs.Segments != null && childs.Segments.Count > 0)
                {
                    foreach (var segment in childs.Segments)
                    {
                        if (segment.Cable != null)
                            cables.Add(segment.Cable);
                        if (segment.Chambers != null && segment.Chambers.Count > 0)
                            chambers.AddRange(segment.Chambers);
                        if (segment.Odfs != null && segment.Odfs.Count > 0)
                            oDFs.AddRange(segment.Odfs);
                        if (segment.Ducts != null)
                            ducts.Add(segment.Ducts);
                        if (segment.microduct != null)
                            microduct.Add(segment.microduct);
                        //if (segment.Ducts != null && segment.Ducts.Count > 0)
                        //    ducts.AddRange(segment.Ducts);

                        if (segment.Poles != null && segment.Poles.Count > 0)
                            poles.AddRange(segment.Poles);
                        if (segment.Splitters != null && segment.Splitters.Count > 0)
                            splitters.AddRange(segment.Splitters);
                        if (segment.SpliceClosures != null && segment.SpliceClosures.Count > 0)
                            spliceClosures.AddRange(segment.SpliceClosures);

                    }
                }

                if (childs.Children != null && childs.Children.Count > 0)
                {

                    ExtractNetwork(childs.Children, cables, chambers, oDFs, ducts,microduct, poles, spliceClosures, splitters, fat, fdt);
                }
            }
        }
    }
}
