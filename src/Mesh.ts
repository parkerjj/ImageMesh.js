import { Pixel, Point } from "./Structure";



/**
 * Start from center of image data,
 * "draw" a circle to find the first point for image edge.
 * ***The edge could be any Point beround of the image.
 * @param pixelArray Pixel[][]
 * @returns 
 */
export function findFirstEdge(pixelArray: Pixel[][]): Point {

    let center_x = Math.floor(pixelArray.length / 2)
    let center_y = Math.floor(pixelArray[0].length / 2)


    let last_pixel = pixelArray[center_x][center_y]
    let step = 1
    let last_step = 1
    const step_length = 5
    let step_horizontal = step_length
    let step_vertical = 0
    let result_pixel = last_pixel
    while (true) {
        let pixel = pixelArray[last_pixel.point.x + step_horizontal][last_pixel.point.y + step_vertical]
        if (pixel.visable != last_pixel.visable || step * step_length > Math.max(pixelArray.length, pixelArray[0].length)) {
            result_pixel = pixel
            break
        }
        last_pixel = pixel

        last_step--
        if (last_step == 0) {
            // Need to change orientation
            step_horizontal = (Math.abs(step_horizontal) - step_length) / (1 - (step % 2 * 2))
            step_vertical = (Math.abs(step_vertical) - step_length) / (1 - (step % 2 * 2))
            step++
            last_step = step
        }
    }

    if (result_pixel.point.x == last_pixel.point.x) {
        // Find by vertical
        for (let i = last_pixel.point.y; i != result_pixel.point.y; i = i + (result_pixel.point.y - last_pixel.point.y) / step_length) {
            let pixel = pixelArray[last_pixel.point.x][i]
            if (pixel.visable == result_pixel.visable) {
                // FOUND
                result_pixel = pixel
                break
            }
        }
    } else {
        // Find by horizontal
        for (let i = last_pixel.point.x; i != result_pixel.point.x; i = i + (result_pixel.point.x - last_pixel.point.x) / step_length) {
            let pixel = pixelArray[i][last_pixel.point.y]
            if (pixel.visable == result_pixel.visable) {
                // FOUND
                result_pixel = pixel
                break
            }
        }
    }



    return result_pixel.point
}
