const {assert,expect} = require('chai');
let isOddOrEven = require('../EvenOrOdd.js');

describe('odd or even',() => {
    it('should return undefined if type of input is not string',() => {
        assert.isUndefined(isOddOrEven(12345),'string');
    });
    it('should return even message',() => {
        assert.equal(isOddOrEven('1234'),'even');
    });
    it('should return odd message',() => {
        assert.equal(isOddOrEven('12345'),'odd');
    });
    
});