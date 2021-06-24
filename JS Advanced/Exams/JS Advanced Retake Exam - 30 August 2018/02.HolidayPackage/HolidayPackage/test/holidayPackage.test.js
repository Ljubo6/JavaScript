const { assert, expect } = require('chai');
const HolidayPackage = require('../holidayPackage.js');

describe('holiday package', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new HolidayPackage('Varna', 'Summer');
    });
    it('constructor', () => {
        assert.isArray(instance.vacationers);
        assert.isString(instance.destination);
        assert.isString(instance.season);
        assert.isBoolean(instance.insuranceIncluded);

        assert.equal(instance.destination,'Varna');
        assert.equal(instance.season,'Summer');   
    });
    it('constructor class methods',() => {
        assert.isFunction(instance.showVacationers);
        assert.isFunction(instance.addVacationer);
        assert.isFunction(instance.generateHolidayPackage);
    });
    it('showVacationers',() => {
        assert.equal(instance.showVacationers(),`No vacationers are added yet`);
        instance.vacationers = ['Ljubo Ljubo'];
        assert.equal(instance.showVacationers(),`Vacationers:\nLjubo Ljubo`);
        instance.vacationers = ['Ljubo Ljubo','Mimi Mimi'];
        assert.equal(instance.showVacationers(),`Vacationers:\nLjubo Ljubo\nMimi Mimi`);
    });
    it('addVacationers',() => {
        assert.throw(() => instance.addVacationer(2),`Vacationer name must be a non-empty string`);
        assert.throw(() => instance.addVacationer(' '),`Vacationer name must be a non-empty string`);
        assert.throw(() => instance.addVacationer('Ljubo'),`Name must consist of first name and last name`);
        assert.throw(() => instance.addVacationer('Ljubo Ljubo Ljubo'),`Name must consist of first name and last name`);
    });
    it('get inshuranceIncluded',() => {
        assert.equal(instance._insuranceIncluded,false);
        instance._insuranceIncluded = true;
        assert.equal(instance._insuranceIncluded,true);

    });
    it('set inshuranceIncluded', () => {
        assert.throw(() => instance.insuranceIncluded = 2,`Insurance status must be a boolean`);
        assert.equal(instance.insuranceIncluded = true,true);
    })
    it('generateHolidayPackage',() => {
        assert.throw(() => instance.generateHolidayPackage(),`There must be at least 1 vacationer added`);
        instance.addVacationer('Ljubo Ljubov');
        assert.equal(instance.generateHolidayPackage(),'Holiday Package Generated\nDestination: Varna\nVacationers:\nLjubo Ljubov\nPrice: 600');
        instance.insuranceIncluded = true;
        assert.equal(instance.generateHolidayPackage(),'Holiday Package Generated\nDestination: Varna\nVacationers:\nLjubo Ljubov\nPrice: 700');

        let instance2 = new HolidayPackage('Varna','Winter');
        instance2.addVacationer('Ljubo Ljubov');
        instance2.insuranceIncluded = true;
        assert.equal(instance2.generateHolidayPackage(),'Holiday Package Generated\nDestination: Varna\nVacationers:\nLjubo Ljubov\nPrice: 700');
    });
});


