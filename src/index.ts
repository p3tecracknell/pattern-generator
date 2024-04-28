import { parseInput, processCanvas } from "./process"

export function generateCanvas(inputString: string): HTMLCanvasElement {
    const inputParams = parseInput(inputString)
    return processCanvas(inputParams)
}

export function generateImageData(inputString: string): ImageData {
    const inputParams = parseInput(inputString)
    const canvas = processCanvas(inputParams)

    const imageData = canvas.getContext("2d").getImageData(0, 0, inputParams.size, inputParams.size)

    canvas.remove()

    return imageData
}
