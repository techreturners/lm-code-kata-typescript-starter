import calc from './index';
/**
 * The calculator serve only to prove that the
 * testing framework is working properly. 
 * Feel free to remove them :) 
 */
describe('Calc', () => {
    test('should return 10 for add(6, 4)', () => {
        expect(calc.add(6, 4)).toBe(10);
    });
    test('should return 9 for add(10, -1)', () => {
        expect(calc.add(10, -1)).toBe(9);
    });
});