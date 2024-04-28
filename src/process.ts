import { InputParams, PatternType, Colour, RGB } from "./types";
import { drawVertical, drawHorizontal, drawDiagonal1, drawDiagonal2 } from "./draw";

export function parseInput(input: string): InputParams {
    const [direction, sizeStr, strokeWidthPcgStr, strokeR, strokeG, strokeB, strokeA, bgR, bgG, bgB, bgA] = input.split('-');

    return {
        patternType: direction as PatternType,
        size: parseInt(sizeStr),
        strokeWidthPercentage: parseFloat(strokeWidthPcgStr),
        stroke: {
            R: parseInt(strokeR),
            G: parseInt(strokeG),
            B: parseInt(strokeB),
            A: parseInt(strokeA)
        } as Colour,
        background: {
            R: parseInt(bgR),
            G: parseInt(bgG),
            B: parseInt(bgB),
            A: parseInt(bgA)
        } as Colour
    };
}

function colourString(colour: Colour): RGB {
    return `rgb(${colour.R} ${colour.G} ${colour.B} / ${colour.A}%)`;
}

export function processCanvas(input: InputParams) {
    const { patternType: direction, size, strokeWidthPercentage: strokeWidthPcg, stroke, background } = input;

    let offset;
    let strokeWidth = strokeWidthPcg;
    if (direction === 'd1' || direction === 'd2') {
        strokeWidth *= 0.71;
        offset = strokeWidth * 0.5 * 0.01;

    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    context.fillStyle = colourString(background);
    context.fillRect(0, 0, size, size);

    context.strokeStyle = colourString(stroke);
    context.lineWidth = strokeWidth * size * 0.01;

    context.beginPath();
    switch (direction) {
        case 'v':
            drawVertical(context, size);
            break;

        case 'h':
            drawHorizontal(context, size);
            break;

        case 'c':
            drawVertical(context, size);
            drawHorizontal(context, size);
            break;

        case 'd1':
            drawDiagonal1(context, size, offset);
            break;

        case 'd2':
            drawDiagonal2(context, size, offset);
            break;

        case 'd3':
            drawDiagonal1(context, size, offset);
            drawDiagonal2(context, size, offset);
            break
    }
    context.stroke();

    return canvas;
}
