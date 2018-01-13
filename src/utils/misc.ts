export function clamp(value: number, min: number, max: number): number {
    if (min > max) { throw new Error('min > max!'); }
    if (value < min) { return min; }
    if (value > max) { return max; }
    return value;
}

export type Point = {
    x: number,
    y: number,
};

const CLICK_THRESHOLD = 25;
export function posIsClose(a: Point, b: Point): boolean {
    return Math.abs(a.x - b.x) < CLICK_THRESHOLD && Math.abs(a.y - b.y) < CLICK_THRESHOLD;
}

export const nDigits = (x: number) => (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;