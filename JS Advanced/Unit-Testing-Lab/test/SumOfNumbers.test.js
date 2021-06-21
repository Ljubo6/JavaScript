  
const { assert,expect } = require('chai');
const sum = require('../SumOfNumbers.js');

describe ('Sum numbers', () => {
    it('sums single number', () => {
        assert.equal(sum([1]),1);
    });

    it('sums multiple numbers', () => {
        assert.equal(sum([1, 1]),2);
    });

    it('sums single number', () => {
        assert.equal(sum([1, 2, 3]),6);
    });
});