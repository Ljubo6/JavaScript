const {assert,expect} = require('chai');
let isSymmetric = require('../CheckForSymmetry.js');

describe('check for symmetry',() => {
    
    it('should return true if array is symmetry with 2 elements',() => {
        assert.equal(isSymmetric([1,1]),true);
    });
    it('should return true if array is symmetry with 3 or more elements',() => {
        assert.equal(isSymmetric([1,2,1]),true);
    });
    it('should return true if array is symmetry with equal 3 or more elements',() => {
        assert.equal(isSymmetric([1,1,1]),true);
    });
    it('should return true if array is symmetry with  string elements',() => {
        assert.equal(isSymmetric(['a','a']),true);
    });
    it('should return true if array is symmetry with 3 or more string elements',() => {
        assert.equal(isSymmetric(['a','b','a']),true);
    });



    it('should return false if array is not symmetry with 2 elements',() => {
        assert.equal(isSymmetric([1,2]),false);
    });
    it('should return false if array is not symmetry with 3 or more elements',() => {
        assert.equal(isSymmetric([1,2,3]),false);
    });
    it('should return false if input is not array',() => {
        assert.equal(isSymmetric(1),false);
    });
    it('should return false if input is not array with string',() => {
        assert.equal(isSymmetric('a'),false);
    });
    it('should return false if input array elements are not corect type-one',() => {
        assert.equal(isSymmetric([1,'a']),false);
    });
    it('should return false if input array elements are not corect type-two',() => {
        assert.equal(isSymmetric([1,'1']),false);
    });

    it('should return false if array is symmetry with 3 or more string elements',() => {
        assert.equal(isSymmetric(['a','a','c']),false);
    });
    it('should return false if array is not symmetry with string elements',() => {
        assert.equal(isSymmetric(['a','b']),false);
    });

});