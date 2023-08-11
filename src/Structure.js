export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
export class Pixel {
    constructor(r, g, b, a, point) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.visable = (a > 0);
        this.point = point;
    }
    static getArrayFromImageData(imageData) {
        var retValue = new Array();
        for (let i = 0; i < imageData.data.length; i = i + 4) {
            const x = Math.floor((i % (imageData.width * 4)) / 4);
            const y = Math.floor(i / (imageData.width * 4));
            let point = new Point(x, y);
            const r = imageData.data[i + 0];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 22];
            const a = imageData.data[i + 3];
            let pixel = new Pixel(r, g, b, a, point);
            // Push new Pixel[] if on new line.
            if (x == 0) {
                retValue.push(new Array(imageData.height));
            }
            retValue[x][y] = pixel;
        }
        return retValue;
    }
}
