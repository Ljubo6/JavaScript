const {assert,expect} = require('chai');
let testNumbers = require('../testNumbers.js');


describe('test numbers',() =>{
    it('sumNumbers',() => {
        assert.equal(testNumbers.sumNumbers('a','1'),undefined);
        assert.equal(testNumbers.sumNumbers('1','a'),undefined);
        assert.equal(testNumbers.sumNumbers('a','b'),undefined);
        assert.equal(testNumbers.sumNumbers('',''),undefined);


        assert.equal(testNumbers.sumNumbers(1,1),'2.00');
        assert.equal(testNumbers.sumNumbers(1.2222,1.2222),'2.44');
    })
    it('numberChecker',() => {
        assert.throw(() => testNumbers.numberChecker(NaN,`The input is not a number!`));
        assert.equal(testNumbers.numberChecker(4),`The number is even!`);
        assert.equal(testNumbers.numberChecker(5),`The number is odd!`);
    })
    it('averageSumArray',() => {
        let result = testNumbers.averageSumArray([1,1])
        assert.equal(result,1);
        result = testNumbers.averageSumArray([1,2,3]);
        assert.equal(result,2);
    })
})