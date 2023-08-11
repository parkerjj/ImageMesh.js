

export class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

export class Pixel {
    r: number
    g: number
    b: number
    a: number
    visable: boolean
    point: Point

    constructor(r: number, g: number, b: number, a: number, point: Point) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a

        this.visable = (a > 0)
        this.point = point
    }

    static getArrayFromImageData(imageData: ImageData): Pixel[][] {

        var retValue: Pixel[][] = new Array<Array<Pixel>>()

        for (let i = 0; i < imageData.data.length; i = i + 4) {



            const x = Math.floor((i % (imageData.width * 4)) / 4)
            const y = Math.floor(i / (imageData.width * 4))
            let point = new Point(x, y)


            const r = imageData.data[i + 0];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            const a = imageData.data[i + 3];
            let pixel = new Pixel(r, g, b, a, point)

            // Push new Pixel[] if on new line.
            if (y == 0) {
                retValue.push(new Array<Pixel>(imageData.width))
            }
            retValue[x][y] = pixel

        }

        return retValue
    }
}