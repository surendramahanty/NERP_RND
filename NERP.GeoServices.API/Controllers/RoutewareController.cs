using Common.Web.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NERP.GeoServices.API.Models;
using NERP.Homepasses.Model;
using Newtonsoft.Json;
using RouteWare.Network;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NERP.GeoServices.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoutewareController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AppSettings _appSettings;

        public RoutewareController(IOptions<AppSettings> appSettings, ILogger<RoutewareController> logger)
        {
            _logger = logger;
            _appSettings = appSettings.Value;
        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        public ResponseMessage SortPoints([FromBody]PointsVm pointsVm)
        {
            try
            {
                var tspmode = TTSPmode.tspOpen;
                var gf = TGISFormat.gfSHP;
                var mTSP = new List<int>();
                var sortedPoint = new List<GeoNode>();

                //var point = JsonConvert.DeserializeObject<points>(w);

                //var count = point.coordinates.Count - 1;

                var shpfolder = _appSettings.RoutewareSettings.ShapeFolder.Replace("{{region}}", pointsVm.Region);
                var binfolder = _appSettings.RoutewareSettings.BinFolder.Replace("{{region}}", pointsVm.Region);
                var outfolder = _appSettings.RoutewareSettings.OutputFolder.Replace("{{region}}", pointsVm.Region);

                var NW = new TNetwork();
                NW.InitPassword(_appSettings.RoutewareSettings.Password);
                NW.Directory = binfolder;

                NW.Open(true, true, true, 0); // open attributes too, don't cache coord3 and open externID without caching
                NW.OpenLimit(1, 1, false);
                NW.OpenLimit(2, 2, true);
                NW.OpenRoadName(1, false);
                NW.CreateArrayTime(3); // 3 time arrays: 0,1,2
                NW.CreateArrayCost(1); // 1 cost array:  0
                                       // set speed as value based upon road classes 1,2,3,4,6 (store in index 0)
                TRoadClassSpeed rcs = new TRoadClassSpeed();
                rcs[1] = 110;
                rcs[2] = 80;
                rcs[3] = 65;
                rcs[4] = 55;
                rcs[5] = 45;
                rcs[6] = 25;
                NW.CalculateTime(0, rcs);

                TRandom r = new TRandom();
                r.SetSeed(987654321);
                // read speed into ArrayTime[2] from field "speed" in link.dbf
                NW.ReadSpeed(2, shpfolder + "\\link.dbf", 0, "speed", false);

                int link;

                // set speed as random value from 60-100 km/h (store in index 1)
                for (link = 1; link <= NW.LinkCount; link++)
                {
                    NW.SetSpeed(1, link, 60 + 40 * (float)r.NextDouble());
                }

                // set cost as the same as time from index 0
                for (link = 1; link <= NW.LinkCount; link++)
                {
                    NW.SetCost(0, link, NW.GetTime(0, link));
                }
                NW.UpdateAlphas();

                TSpatialSearch ss = new TSpatialSearch(NW);
                TLocationList ll = new TLocationList();
                TBitArray TBA = new TBitArray(1000);
                TIntegerList nl = new TIntegerList();

                if (pointsVm.Nodes != null)
                {
                    for (int i = 0; i < pointsVm.Nodes.Count; i++)
                    {
                        TFloatPoint fp;
                        fp.x = Convert.ToDouble(pointsVm.Nodes[i].Coordinates[0]);
                        fp.y = Convert.ToDouble(pointsVm.Nodes[i].Coordinates[1]);
                        TLocation ll1 = new TLocation();
                        int side = 0;
                        double distance = 0;

                        TFloatPoint fPnew = new TFloatPoint();

                        ss.NearestLocation(fp, out ll1, out side, out distance, out fPnew);
                        ll.Add1(ll1);
                        ll.Add3(fp);
                        ll.Add4(ll1, fp);
                        nl.Add(ss.NearestNodeSimple(fp));
                    }

                    ll.Sort();
                    nl.Sort();
                    nl.RemoveDuplicates();
                }

                TRouteCalc calc = new TRouteCalc(NW, false);
                calc.SetTime(0);
                calc.SetFastest(false);
                calc.MaxSpeed = 110; // 90 > 80 and 110 > 80
                float[][] matrix = calc.Matrix(nl, (tspmode != TTSPmode.tspRoundTrip), false);
                // A faster and straight-line matrix
                // TMatrix Matrix = NW.Matrix(NL,(mode != TTspmode.tspRoundTrip));
                // optimize sequence of matrix
                TTSP tsp = new TTSP { Mode = tspmode };
                tsp.Execute(matrix);

                for (int i = 0; i < nl.Count; i++)
                {
                    mTSP.Add(tsp.SortedIndex[i]);
                }

                // Use TDrivingDirections for output
                TGISWrite output = NW.GISoutputInit(outfolder + "tsp_driving", gf);
                TDrivingDirections dd = new TDrivingDirections(calc)
                {
                    ConcatenationMode = TConcatenationMode.cmCompact,
                    RoundTrip = (tspmode == TTSPmode.tspRoundTrip),
                    SortedIndex = tsp.SortedIndex
                };

                dd.RouteList(output, nl);
                output = NW.GISoutputInit(outfolder + "tsp", gf);
                output.StartHeader(1, TObjectTypes.otPline);
                output.AddField("sequence", TGISField.gfInteger, 0, 0);
                int d = 0;
                if (tspmode != TTSPmode.tspRoundTrip) d = 1;
                for (int i = 0; i < nl.Count - d; i++)
                {
                    int node1 = nl[tsp.SortedIndex[i]];
                    int node2 = i != nl.Count - 1 ? nl[tsp.SortedIndex[i + 1]] : nl[tsp.SortedIndex[0]];

                    calc.Route(node1, node2);
                    TRoute route = calc.RouteFind(node2);
                    TFloatPointArrayEx list = NW.GetGISSectionRoute(route);
                    output.AddObject(1, false, i.ToString(CultureInfo.InvariantCulture));
                    output.AddSection(1, ref list);
                }
                output.Close();

                output = NW.GISoutputInit(outfolder + "tsppoint", gf);
                output.StartHeader(1, TObjectTypes.otPoint);
                output.AddField("sequence", TGISField.gfInteger, 0, 0);
                for (int i = 0; i < nl.Count; i++)
                {
                    int node1 = nl[tsp.SortedIndex[i]];
                    TFloatPoint p1 = NW.Node2Coordinate(node1);
                    output.AddPoint2(p1, i.ToString(CultureInfo.InvariantCulture));
                }
                output.Close();

                for (int i = 0; i < mTSP.Count; i++)
                {
                    sortedPoint.Add(pointsVm.Nodes[mTSP[i]]);
                }

                return new ResponseMessage { Status = "Ok", Data = sortedPoint };
            }
            catch (Exception ex)
            {
                return new ResponseMessage { Status = "Error", Message = "Error sorting nodes." };
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        public ResponseMessage GenerateMST([FromBody]PointsVm pointsVm)
        {
            _logger?.LogInformation("MST Service Started");

            _logger?.LogInformation("No. of nodes: " + pointsVm.Nodes.Count);

            var binfolder = _appSettings.RoutewareSettings.BinFolder.Replace("{{region}}", pointsVm.Region);
            _logger?.LogInformation("Accessing Region path: " + binfolder);

            var listNodes = GetMST(pointsVm.Region, pointsVm.Nodes);

            if (listNodes != null)
                return new ResponseMessage { Status = "Ok", Data = listNodes };
            else
                return new ResponseMessage { Status = "Error", Message = "Error processing nodes." };
        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        public ResponseMessage GenerateMSTRecursive([FromBody]PointsVm pointsVm)
        {
            try
            {
                _logger?.LogInformation("MST Service Started");

                _logger?.LogInformation("No. of nodes: " + pointsVm.Nodes.Count);

                var binfolder = _appSettings.RoutewareSettings.BinFolder.Replace("{{region}}", pointsVm.Region);
                _logger?.LogInformation("Accessing Region path: " + binfolder);

                var geoNodes = pointsVm.Nodes;


                foreach (var item in geoNodes)
                {
                    if (item.Children.Count > 1)
                        item.Segments = GetMST(pointsVm.Region, item.Children);
                }


                return new ResponseMessage { Status = "Ok", Data = geoNodes };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error processing nodes.");
                return new ResponseMessage { Status = "Error", Message = "Error processing nodes." };
            }


        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        public ResponseMessage HealthCheck()
        {
            try
            {
                return new ResponseMessage { Status = "Ok", Data = "Service is up" };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error processing nodes.");
                return new ResponseMessage { Status = "Error", Message = ex.Message };
            }


        }

        private List<Node> GetMST(string region, List<GeoNode> geoNodes)
        {
            try
            {
                _logger?.LogInformation("No. of nodes: " + geoNodes.Count);

                TNetwork NW = new TNetwork();

                var binfolder = _appSettings.RoutewareSettings.BinFolder.Replace("{{region}}", region);

                NW.InitPassword(_appSettings.RoutewareSettings.Password);
                NW.Directory = binfolder;

                NW.Open(false, false, true, 0);

                TIntegerList nodes = new TIntegerList();

                var ss = new TSpatialSearch(NW);

                foreach (var geoNode in geoNodes)
                {
                    var P = new TFloatPoint
                    {
                        x = geoNode.Coordinates[0],
                        y = geoNode.Coordinates[1]
                    };

                    nodes.Add(ss.NearestNodeSimple(P));
                }

                TBitArray links = new TBitArray();

                var calc = new TCalc(NW, false);
                calc.IgnoreOneway = false;

                calc.SteinerTree(nodes, links);

                var steinerTreeFile = _appSettings.RoutewareSettings.SteinerTreeFile.Replace("{{region}}", region);

                if (System.IO.File.Exists(steinerTreeFile))
                    System.IO.File.Delete(steinerTreeFile);

                var geoJsonFile = steinerTreeFile;

                if (System.IO.File.Exists(geoJsonFile + ".geojson"))
                    System.IO.File.Delete(geoJsonFile + ".geojson");

                NW.ExportLinks(geoJsonFile, TGISFormat.gfGeoJSON, null, links);

                var geoJsonData = JsonConvert.DeserializeObject<GeoJosn>(System.IO.File.ReadAllText(geoJsonFile + ".geojson"));

                var listNodes = GetMSTPaths(geoJsonData);

                return listNodes;
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error processing nodes.");
                return null;
            }

        }

        private List<Node> GetMSTPaths(GeoJosn latLongs)
        {
            var nodes = GetNodes(latLongs);

            do
            {
                var groupedNodes = nodes.GroupBy(x => x.Start);
                var maxGroupNodes = GetMaxNodes(groupedNodes);

                if (maxGroupNodes == 1) break;

                nodes = ProcessStartEndNodes(groupedNodes, true);

            } while (true);

            do
            {
                var groupedNodes = nodes.GroupBy(x => x.End);
                var maxGroupNodes = GetMaxNodes(groupedNodes);

                if (maxGroupNodes == 1) break;

                nodes = ProcessStartEndNodes(groupedNodes, false);

            } while (true);

            do
            {
                var optimizedNodes = new List<Node>();
                var excluded = new List<int>();

                for (int i = 0; i < nodes.Count(); i++)
                {
                    var isBreak = false;

                    for (int j = 0; j < nodes.Count(); j++)
                    {
                        if (i == j) continue;

                        var startNode = nodes[i];
                        var endNode = nodes[j];

                        if (startNode.End == endNode.Start)
                        {
                            optimizedNodes.Add(MergeCrossNodes(startNode, endNode));
                            excluded.Add(i);
                            excluded.Add(j);
                            isBreak = true;
                            break;
                        }
                    }

                    if (isBreak)
                        break;
                }

                if (optimizedNodes.Count == 0) break;

                for (int i = 0; i < nodes.Count(); i++)
                {
                    if (excluded.Contains(i)) continue;

                    optimizedNodes.Add(nodes[i]);
                }

                nodes = optimizedNodes;

            } while (true);

            return nodes;
        }

        private List<Node> GetNodes(GeoJosn latLongs)
        {
            var nodes = new List<Node>();

            foreach (var item in latLongs.features)
            {
                nodes.Add(new Node
                {
                    Id = MongoDB.Bson.ObjectId.GenerateNewId().ToString(),
                    Start = item.properties.FromNode.ToString(),
                    End = item.properties.ToNode.ToString(),
                    FullPath = item.properties.FromNode.ToString() + "-" + item.properties.ToNode.ToString(),
                    Coordinates = item.geometry.coordinates
                });

            }


            return nodes;
        }

        private long GetMaxNodes(IEnumerable<IGrouping<string, Node>> groupedNodes)
        {
            var maxGroupNodes = 0;

            foreach (var node in groupedNodes)
            {
                var number = node.Key;
                maxGroupNodes = node.Count();

                if (maxGroupNodes > 1)
                    break;
            }

            return maxGroupNodes;
        }

        private List<Node> ProcessStartEndNodes(IEnumerable<IGrouping<string, Node>> groupedNodes, bool isStart)
        {
            var optimizedNodes = new List<Node>();

            foreach (var node in groupedNodes)
            {
                if (node.Count() == 1)
                {
                    optimizedNodes.Add(node.FirstOrDefault());
                }
                else if (node.Count() == 2)
                {
                    var firstNode = node.FirstOrDefault();
                    var secondNode = node.LastOrDefault();

                    var newNode = MergeNodes(firstNode, secondNode, isStart);

                    optimizedNodes.Add(newNode);
                }
                else if (node.Count() > 2)
                {
                    var firstNode = node.FirstOrDefault();
                    var secondNode = node.LastOrDefault();

                    var newNode = MergeNodes(firstNode, secondNode, isStart);

                    optimizedNodes.Add(newNode);

                    for (int i = 1; i < node.Count() - 1; i++)
                    {
                        optimizedNodes.Add(node.ElementAt(i));
                    }
                }

            }

            return optimizedNodes;
        }

        private Node MergeNodes(Node firstNode, Node secondNode, bool isStart)
        {
            var newNode = new Node();
            //newNode.Geometry = new Geometry();
            newNode.Coordinates = new List<List<double>>();


            newNode.Id = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

            if (isStart)
            {
                newNode.Start = firstNode.End;
                newNode.End = secondNode.End;
                newNode.FullPath = newNode.Start + "-" + secondNode.FullPath;
                firstNode.Coordinates.Reverse();
                //List<List<double>> reverserCoordinates = new List<List<double>>();
                //reverserCoordinates.Add(firstNode.Geometry.coordinates.Reverse().ToList<double>());
                newNode.Coordinates.AddRange(firstNode.Coordinates);
                newNode.Coordinates.AddRange(secondNode.Coordinates);
            }
            else
            {
                newNode.Start = firstNode.Start;
                newNode.End = secondNode.Start;
                newNode.FullPath = firstNode.FullPath + "-" + secondNode.Start;

                secondNode.Coordinates.Reverse();
                newNode.Coordinates.AddRange(firstNode.Coordinates);
                newNode.Coordinates.AddRange(secondNode.Coordinates);

            }

            return newNode;

        }

        private Node MergeCrossNodes(Node firstNode, Node secondNode)
        {
            var newNode = new Node();

            //newNode.Geometry = new Geometry();
            newNode.Coordinates = new List<List<double>>();

            //if (isStart)
            //{
            //    newNode.Start = firstNode.End;
            //    newNode.End = secondNode.End;
            //    newNode.FullPath = newNode.Start + "-" + secondNode.FullPath;
            //}
            //else
            //{
            newNode.Id = MongoDB.Bson.ObjectId.GenerateNewId().ToString();
            newNode.Start = firstNode.Start;
            newNode.End = secondNode.End;
            newNode.FullPath = firstNode.FullPath.Substring(0, firstNode.FullPath.Length - 2) + "-" + secondNode.FullPath;

            newNode.Coordinates.AddRange(firstNode.Coordinates);
            newNode.Coordinates.AddRange(secondNode.Coordinates);
            //}

            return newNode;

        }

    }
}
