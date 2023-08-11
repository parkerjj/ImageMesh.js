import { findFirstEdge } from "./Mesh";
import { Pixel } from "./Structure";
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function createMesh(imageData, delta) {
    let pixelArray = Pixel.getArrayFromImageData(imageData);
    let firstEdgePoint = findFirstEdge(pixelArray);
    console.log('First Edge Point:', firstEdgePoint);
}
