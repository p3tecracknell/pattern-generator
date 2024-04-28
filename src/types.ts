export type Colour = {
    R: number;
    G: number;
    B: number;
    A: number;
};
export type RGB = `rgb(${number} ${number} ${number} / ${number}%)`;
export type PatternType = 'v' | 'h' | 'c' | 'd1' | 'd2' | 'd3';
export type InputParams = {
    patternType: PatternType;
    size: number;
    strokeWidthPercentage: number;
    stroke: Colour;
    background: Colour;
};
