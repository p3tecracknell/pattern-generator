export function generatePattern(input: string) {
    const [direction, sizeStr, strokeWidthPcgStr, strokeR, strokeG, strokeB, strokeA, bgR, bgG, bgB, bgA] = input.split('-')
    const size = parseInt(sizeStr)
    const strokeWidthPcg = parseFloat(strokeWidthPcgStr)

    console.log(direction)

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    context.fillStyle = `rgb(${bgR} ${bgG} ${bgB} / ${bgA}%)`;
    console.log(`rgba(${bgR}, ${bgG}, ${bgB}, ${bgA})`);
    context.fillRect(0, 0, size, size);

    context.strokeStyle = `rgb(${strokeR} ${strokeG} ${strokeB} / ${strokeA}%)`
    console.log(`rgba(${strokeR}, ${strokeG}, ${strokeB}, ${strokeA})`)
    context.lineWidth = strokeWidthPcg * size * 0.01

    context.beginPath()
    context.moveTo(size * 0.5, -size)
    context.lineTo(size * 0.5, size)
    context.stroke()

    return canvas
}