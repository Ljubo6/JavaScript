// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }
const{assert,expect} = require('chai');
const lookupChar = require('../CharLookup.js');
let charLookup = require('../CharLookup.js')

describe('char lookup',() => {
    it('should return undefined if arguments are not correct type',() => {
        assert.isUndefined(lookupChar(1,1));
        assert.isUndefined(lookupChar('abc',1.2));
        assert.isUndefined(lookupChar('abc','a'));
    });
    it('should return incorect index',() => {
        assert.equal(lookupChar('abc',-1),'Incorrect index');
        assert.equal(lookupChar('abc',3),'Incorrect index');
        assert.equal(lookupChar('abc',4),'Incorrect index');
    });
    it('should return correct index',() => {
        assert.equal(lookupChar('abc',0),'a');
        assert.equal(lookupChar('abc',2),'c');
    });
});