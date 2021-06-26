const numberOperations = require('../NumberOperations.js');
const { expect } = require('chai');

describe('numberOps tests', () => {
    it('pow', () => {
        expect(numberOperations.powNumber(2)).to.equal(4);
        expect(numberOperations.powNumber(3)).to.equal(9);
    });

    it('numChecker', () => {
        expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');

        expect(() => { numberOperations.numberChecker('a') }).to.throw('The input is not a number!');
    });

    it('sumArrays', () => {
        let result = numberOperations.sumArrays([1], [1])
        expect(result.join()).to.equal('2');
        let result2 = numberOperations.sumArrays([1, 2], [1])
        expect(result2.join()).to.equal('2,2');
    });
});
