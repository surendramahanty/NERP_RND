export type Position = number[];

export class Point {
    type: string = "Point";
    coordinates: Position

    constructor(coordinates?: Position) {
        this.coordinates = coordinates;
    }
}

export class MultiPoint {
    type: string = "MultiPoint";
    coordinates: Array<Position>;

    constructor(coordinates?: Array<Position>) {
        this.coordinates = coordinates;
    }
}

export class LineString {
    type:string = "LineString";
    coordinates: Array<Position>;

    constructor(coordinates?: Array<Position>) {
        this.coordinates = coordinates;
    }
}

export class MultiLineString {
    type: string = "MultiLineString";
    coordinates: Array<Array<Position>>;
}

export class Polygon {
    type: string = "Polygon";
    coordinates: Array<Array<Position>>;

    constructor(coordinates?: Array<Array<Position>>) {
        this.coordinates = coordinates;
    }
}

export class MultiPolygon {
    type: string = "MultiPolygon";
    coordinates: Array<Array<Array<Position>>>;

    constructor(coordinates?: Array<Array<Array<Position>>>) {
        this.coordinates = coordinates;
    }
}

//export enum GeoJsonObjectType {
//    Feature = 0,
//    FeatureCollection = 1,
//    GeometryCollection = 2,
//    LineString = 3,
//    MultiLineString = 4,
//    MultiPoint = 5,
//    MultiPolygon = 6,
//    Point = 7,
//    Polygon = 8
//}
