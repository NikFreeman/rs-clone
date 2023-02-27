import { getRandomDigit } from '../src/models/utils';

describe('test Random Digit', () => {
    let controlValues: Array<number>;
    const digit = 10;
    beforeAll(() => {
        controlValues = Array.from({ length: 200 }, () => getRandomDigit(digit));
    });
    test('control values not contain digit', () => {
        expect(controlValues).not.toContain(digit);
    });
    test('control values are less than digit', () => {
        controlValues.every((x) => expect(x).toBeLessThan(digit));
    });
    test('control values are greater than digit', () => {
        controlValues.every((x) => expect(x).toBeGreaterThanOrEqual(0));
    });
});
