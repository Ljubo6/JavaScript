const {assert,expect} = require('chai');
let createCalculator = require('../AddSubtract');
describe('add or substract',() => {
    let instance = undefined;
    beforeEach(() => {
        instance = createCalculator();
    });

    it('object instance is correct',() => {
        assert.isTrue(instance.hasOwnProperty('add'));
        assert.isTrue(instance.hasOwnProperty('subtract'));
        assert.isTrue(instance.hasOwnProperty('get'));
    })
    it('keep internal sum',() => {
        assert.equal(instance.value,undefined);
    });

    it('add',() => {
        instance.add(1)
        assert.equal(instance.get(),1);
        instance.add('5');
        assert.equal(instance.get(),6);
        assert.isUndefined(instance.add('a'));
    });
    it('subtract',() => {
        instance.subtract(5)
        assert.equal(instance.get(),-5);
        instance.subtract('1');
        assert.equal(instance.get(),-6);
        assert.isUndefined(instance.subtract('a'));
    });
    it('should return instance of object value from get()',() => {
        assert.equal(instance.get(),0);
        instance.add(1);
        assert.equal(instance.get(),1);
    });
});