let { Repository } = require("../solution.js");
const { assert, expect } = require('chai');
let { beforeEach } = require('mocha');


describe('Repository', function () {
    let instance = undefined;
    beforeEach(() => {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        instance = new Repository(properties);

    })
    it('constructor', () => {
        assert.equal(typeof instance.props, 'object')
        assert.equal(instance.props.name, 'string');
        assert.equal(instance.props.age, 'number');
        assert.isString(instance.props.birthday, 'object');
        assert.equal(typeof instance.data, 'object');
        assert.isFunction(instance.nextId);
        instance.nextId();
        assert.equal(instance.nextId(), 1);
    })
    it('get count', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        assert.equal(instance.count, 1);
        instance.add(entity);
        assert.equal(instance.count, 2);
    })
    it('add entity', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        assert.equal(instance.add(entity), 0);
        assert.equal(instance.add(entity), 1);
    })
    it('getId', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        instance.add(entity);
        assert.equal(instance.getId(0), entity);
        assert.equal(instance.getId(1), entity);
        assert.throw(() => instance.getId(3), `Entity with id: 3 does not exist!`);
    })
    it('update(id, newEntity)', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        entity = {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.update(0, entity);
        assert.equal(instance.getId(0), entity);
        assert.throw(() => instance.update(1, entity), `Entity with id: 1 does not exist!`)
    })
    it('del(id)', () => {

        let entity1 = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        let entity2 = {
            name: "Pesho1",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        let entity3 = {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        instance.add(entity1)
        instance.add(entity2)
        instance.add(entity3)
        instance.del(0)
        instance.del(1)

        assert.equal(instance.count, 1);
        assert.throw(() => instance.del(3), `Entity with id: 3 does not exist!`)
    })
    it('_validate(entity)', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        let anotherEntity = {
            name: 'Stamat',
            age: 29,
            birthday: 1991
        };
        assert.throw(() => instance.add(anotherEntity), `Property birthday is not of correct type!`);
        assert.throw(() => instance.update(0, anotherEntity), `Property birthday is not of correct type!`);
        entity = {
            name: 'Gosho',
            age: '22',
            birthday: new Date(1998, 0, 7)
        };
        assert.throw(() => instance.add(entity), `Property age is not of correct type!`);
        assert.throw(() => instance.update(0, entity), `Property age is not of correct type!`);

        anotherEntity = {
            name: 'Stamat',
            age: 29
        };
        assert.throw(() => instance.add(anotherEntity), `Property birthday is missing from the entity!`);
        assert.throw(() => instance.update(0, anotherEntity), `Property birthday is missing from the entity!`);
        anotherEntity = {
            name1: 'Stamat',
            age: 29,
            birthday: new Date(1991, 0, 21)
        };
        assert.throw(() => instance.add(anotherEntity), `Property name is missing from the entity!`);
        assert.throw(() => instance.update(0, anotherEntity), `Property name is missing from the entity!`);
    })

});
