export function drawVertical(context: CanvasRenderingContext2D, size: number): void {
    context.moveTo(size * 0.5, -size);
    context.lineTo(size * 0.5, size);
}

export function drawHorizontal(context: CanvasRenderingContext2D, size: number): void {
    context.moveTo(-size, size * 0.5);
    context.lineTo(size, size * 0.5);
}

export function drawDiagonal1(context: CanvasRenderingContext2D, size: number, offset: number): void {
    context.moveTo(0, 0);
    context.lineTo(size, size);

    context.moveTo(-size * offset, size * (1 - offset));
    context.lineTo(size * offset, size * (1 + offset));

    context.moveTo(size * (1 - offset), -size * offset);
    context.lineTo(size * (1 + offset), size * offset);
}

export function drawDiagonal2(context: CanvasRenderingContext2D | null, size: number, offset: any) {
    context.moveTo(size, 0);
    context.lineTo(0, size);

    context.moveTo(size * offset, -size * offset);
    context.lineTo(-size * offset, size * offset);

    context.moveTo(size * (1 - offset), size * (1 + offset));
    context.lineTo(size * (1 + offset), size * (1 - offset));
}
