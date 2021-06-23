const { assert, expect } = require('chai');
const dealership = require('../dealership.js');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('should return discounted amount of money', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000);
            assert.equal(dealership.newCarCost('Audi TT 8J', 24000), 10000);
        })
        it('should return the same mone if wrong car or empty', () => {
            assert.equal(dealership.newCarCost('', 30000), 30000);
            assert.equal(dealership.newCarCost('qwerty', 30000), 30000);
        })
    });
    describe('carEquipment', () => {
        it('should return selected extras', () => {
            assert.deepEqual(dealership
                .carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'stereo'], [0, 1]), ['heated seats', 'sliding roof']);
            assert.deepEqual(dealership
                .carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'stereo'], [1]), ['sliding roof']);
        })

    });
    describe('euroCategory', () => {
        it('should return message with acsepted diccount',() => {
            assert.equal(dealership.euroCategory(5),`We have added 5% discount to the final price: 14250.`);
            assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`);
        });
        it('should return message without diccount',() => {
            assert.equal(dealership.euroCategory(3),`Your euro category is low, so there is no discount from the final price!`)
        })
    });
});