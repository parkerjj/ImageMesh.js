declare namespace ImageMesh {
    /**
     * 生成数字范围内的随机数
     * @param min 最小数字
     * @param max 最大数字
     * @returns number类型
     */
    export function random(min: number, max: number): number



    /**
     * Create triangular mesh within rectangular area defined by width/height.
     * Density of triangular mesh is adjustable via parameter delta, which defines
     * distance between two vertices situated on frame of rectangle.
     * In sketch bellow, delta is distance from corner 0 to vertex x.
     * 
     *  

        0___x_______ width
        |
        x
        |
        |
        height

     * @param ImageData ImageData
     * @param height Integer
     * @param width Integer
     * @param delta Integer
     */
    export function createMesh(imageData: ImageData, height: number, width: number, delta: number)
}

declare module 'image-mesh' {
    export = ImageMesh
}
