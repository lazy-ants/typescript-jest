import * as math from '../src/math-operators';

describe('Test math operators', () => {
    it('should be equal to 4 when 1 + 3', () => {
        expect(math.sum(1, 3)).toBe(4);
    });

    it('should be equal to -2 when 1 - 3', () => {
        expect(math.sub(1, 3)).toBe(-2);
    });

    it('should be equal to 3 when 1 * 3', () => {
        expect(math.multiply(1, 3)).toBe(3);
    });

    it('should be equal to 0.33 when 1 / 3', () => {
        expect(math.div(1, 3)).toBeCloseTo(0.33);
    });

    it('should be greater than 3 when 1 + 3', () => {
        expect(math.sum(1, 3)).toBeGreaterThan(3);
    });

    it('should be equal to 3 when 1 + 2', () => {
        expect(math.sum(1, 2)).toEqual(3);
    });

    it('should be less than 3 when 1 + 1', () => {
        expect(math.sum(1, 1)).toBeLessThan(3);
    });
});
