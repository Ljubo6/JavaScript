const { assert, expect } = require('chai');
let mathEnforcer = require('..//MathEnforcer.js');
describe('math enforcer', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = mathEnforcer;
    })

    describe('addFive', () => {
        it('should return undefined if parameter is not number', () => {
            assert.isUndefined(instance.addFive('a'));
            assert.isUndefined(instance.addFive('1'));
        });
        it('should return result if parameter is number', () => {
            assert.equal(instance.addFive(1), 6);
        });
        it('should return result if parameter is negative number', () => {
            assert.equal(instance.addFive(-1), 4);
        });
        it('should return result if parameter is decimal number', () => {
            assert.closeTo(instance.addFive(1.2), 6.2,0.01);
        });
    })


    describe('subtractTen',() => {
        it('should return undefined if parameter is not number', () => {
            assert.isUndefined(instance.subtractTen('a'));
            assert.isUndefined(instance.subtractTen('1'));
        });
        it('should return result if parameter is number', () => {
            assert.equal(instance.subtractTen(20), 10);
        });
        it('should return result if parameter is negative number', () => {
            assert.equal(instance.subtractTen(-1), -11);
        });
        it('should return result if parameter is decimal number', () => {
            assert.closeTo(instance.subtractTen(10.2), 0.2,0.01);
        });
    })

    describe('sum',() => {
        it('should return undefined if any of two parameters is not number', () => {
            assert.isUndefined(instance.sum('a', 1));
            assert.isUndefined(instance.sum(1, 'a'));
        });
        it('should return result if a both  parameters are number', () => {
            assert.equal(instance.sum(5, 5), 10);
        });
        it('should return result if a both  parameters are negative number', () => {
            assert.equal(instance.sum(-5, -5), -10);
        });
        it('should return result if one parameter is decimal number', () => {
            assert.closeTo(instance.sum(1.2,1.2), 2.4,0.01);
        });
    });    
});