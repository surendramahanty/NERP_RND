import { LatLng } from './latLng';

export class geoHash {
    /**
      * Get the geohash of a point.
      * @param coordinates Coordinates to hash.
      * @param precision Precision of hash desired, defaults to 10.
      * @returns Geohash of point.
      */
    static hash(coordinates: LatLng, precision: number = 10): string {
        const valid: Error = this.validateCoordinates(coordinates);
        if (valid instanceof Error) { throw valid; }

        let hash: string = '';
        const latRng: number[] = [-90, 90];
        const lngRng: number[] = [-180, 180];

        while (hash.length < precision) {
            let temp: number = 0;
            for (let i: number = 0; i < 5; i++) {
                const even: boolean = (((hash.length * 5) + i) % 2) == 0;
                const coord: number = (even) ? coordinates.lng : coordinates.lat;
                const range: number[] = (even) ? lngRng : latRng;
                const middle: number = (range[0] + range[1]) / 2;
                temp = (temp << 1) + this.getBit(coord, range);
                (coord > middle) ? range[0] = middle : range[1] = middle;
            }
            hash += this.base32(temp);
        }

        return hash;
    }

    /**
      * Decodes a Geohash into a LatLngLiteral.
      * @param hash Geohash string.
      * @returns Coordinates to hash.
      */
    static decodeHash(hash: string): LatLng {
        let even: boolean = true;
        const latRng: number[] = [-90, 90];
        const lngRng: number[] = [-180, 180];
        const hashChars: string[] = hash.split('');

        while (hashChars.length) {
            const chunk: number = this.decimalChunk(hashChars.shift());
            for (let i = 0; i < 5; i++) {
                const mask = [16, 8, 4, 2, 1][i];
                const range: number[] = (even) ? lngRng : latRng;
                const middle: number = (range[0] + range[1]) / 2;
                range[((chunk & mask) ? 0 : 1)] = middle;
                even = !even;
            }
        }

        return { lat: ((latRng[0] + latRng[1]) / 2), lng: ((lngRng[0] + lngRng[1]) / 2) };
    }

   /**
   * Get Base 32 symbol from decimal chunk (5 bit binary value).
   * @param value Decimal value of chunk (5 bit binary value).
   * @returns Base 32 value.
   */
    static base32(value: number): string {
        return '0123456789bcdefghjkmnpqrstuvwxyz'.charAt(value);
    }

    static validateCoordinates(coordinates: LatLng): Error {
        const error: string[] = [];
        if (coordinates.lat > 90) { error.push('Your latitude is greater than 90°'); }
        if (coordinates.lat < -90) { error.push('Your latitude is less than -90°'); }
        if (coordinates.lng > 180) { error.push('Your longitude is greater than 180°'); }
        if (coordinates.lng < -180) { error.push('Your longitude is less than -180°'); }
        if (error.length !== 0) { return new Error(error.join(' ')); }
    }

    /**
      * Determine if coordinate is greater than midle of range in a bit representation.
      * @param point Coordinates.
      * @param range Range of coordinates to check.
      * @returns Number representation if point is greater than the middle of the range.
      */
    static getBit(point: number, range: number[]): number {
        const middle: number = (range[0] + range[1]) / 2;
        return (middle > point) ? 0 : 1;
    }

    /**
    * Get decimal chunk (5 bit binary value) from Base 32 character.
    * @param value Base 32 character.
    * @returns Decimal value of chunk (5 bit binary value).
    */
    static decimalChunk(value: string): number {
        return '0123456789bcdefghjkmnpqrstuvwxyz'.indexOf(value.toLowerCase());
    }
}
