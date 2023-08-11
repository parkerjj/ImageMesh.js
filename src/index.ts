import { findFirstEdge } from "./Mesh"
import { Pixel } from "./Structure"

export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


export function createMesh(imageData: ImageData, delta: number) {

    let pixelArray = Pixel.getArrayFromImageData(imageData)
    let firstEdgePoint = findFirstEdge(pixelArray)

    console.log('First Edge Point:', firstEdgePoint)

}
