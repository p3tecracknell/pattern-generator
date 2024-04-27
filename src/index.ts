export function generateCanvas(input: string): HTMLCanvasElement {
    const [direction, sizeStr, strokeWidthPcgStr, strokeR, strokeG, strokeB, strokeA, bgR, bgG, bgB, bgA] = input.split('-')
    const size = parseInt(sizeStr)
    let strokeWidthPcg = parseFloat(strokeWidthPcgStr)

    let offset
    if (direction === 'd1' || direction === 'd2') {
        strokeWidthPcg *= 0.71
        offset = strokeWidthPcg * 0.5 * 0.01

    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    context.fillStyle = `rgb(${bgR} ${bgG} ${bgB} / ${bgA}%)`;
    context.fillRect(0, 0, size, size);

    context.strokeStyle = `rgb(${strokeR} ${strokeG} ${strokeB} / ${strokeA}%)`
    context.lineWidth = strokeWidthPcg * size * 0.01

    context.beginPath()
    switch (direction) {
        case 'v':
            context.moveTo(size * 0.5, -size)
            context.lineTo(size * 0.5, size)
            break
        case 'h':
            context.moveTo(-size, size * 0.5)
            context.lineTo(size, size * 0.5)
            break
        case 'd1':
            context.moveTo(0, 0)
            context.lineTo(size, size)

            context.moveTo(-size * offset, size * (1 - offset))
            context.lineTo(size * offset, size * (1 + offset))

            context.moveTo(size * (1 - offset), -size * offset)
            context.lineTo(size * (1 + offset), size * offset)
            break
        case 'd2':
            context.moveTo(size, 0)
            context.lineTo(0, size)

            context.moveTo(size * offset, -size * offset)
            context.lineTo(-size * offset, size * offset)

            context.moveTo(size * (1 - offset), size * (1 + offset))
            context.lineTo(size * (1 + offset), size * (1 - offset))

    }
    context.stroke()

    return canvas
}

export function generateImageData(input: string): ImageData {
    const canvas = generateCanvas(input)
    return canvas.getContext("2d").getImageData(0, 0, 8, 8)
}
