const functions = require('../functions')
const {calculateAge, calculateTax, greet} = require("../functions");

describe('functions - calculate age', () => {
    it('returns false when given future date', () => {
        expect(calculateAge('2024-06-07')).toBeFalsy();
    });

    it('returns 2 when given date 2 years ago', () => {
        expect(calculateAge('2021-06-07')).toBe(2);
    });

    it('returns false when given invalid date', () => {
        expect(calculateAge('20242-063-07')).toBeFalsy();
    });
});

describe('functions - calculate tax', () => {
    it('give tax as 0 if salary is less that 12500', () => {
        expect(calculateTax(11500)).toBe(0);
    });

    it('give tax as 250 if given salary of 18000', () => {
        expect(calculateTax(18000)).toBe(275);
    });

    it('give tax as 2100 if given salary of 21000', () => {
        expect(calculateTax(21000)).toBe(425);
    });

    it('give tax as 8100 if given salary of 58000', () => {
        expect(calculateTax(58000)).toBe(4475);
    });
});

describe('functions - greet', () => {
    it('return just name if give false for showWeather', () => {
        expect(greet('Brent', false)).toBe('Hi Brent.');
    });

    it('check to make sure what is returned as a string', () => {
        expect(typeof greet('Brent')).toBe('string');
    });
});
