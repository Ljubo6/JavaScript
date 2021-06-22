const {assert,exept} = require('chai');
let pizzUni = require('../pizzaPlace.js');

describe('Pizza Place',() => {
    it('makeAnOrder',() => {
        let pizza1 = {};
        let pizza2 = {orderedDrink: 'drink'};
        let pizza3 = {orderedPizza: 'pizza'};
        let pizza4 = {orderedPizza: 'pizza', orderedDrink: 'drink'};

        assert.throw(() => pizzUni.makeAnOrder(pizza1),'You must order at least 1 Pizza to finish the order.');
        assert.throw(() =>pizzUni.makeAnOrder(pizza2),'You must order at least 1 Pizza to finish the order.');
        assert.equal(pizzUni.makeAnOrder(pizza3),`You just ordered ${pizza3.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza4),`You just ordered ${pizza4.orderedPizza} and ${pizza4.orderedDrink}.`);

    });
    it('getRemainingWork',() => {
        let pizza1 = [];
        let pizza2 = [{pizzaName: 'pizza2', status: 'ready'}];
        let pizza3 = [{pizzaName: 'pizza3', status: 'preparing'}];

        assert.equal(pizzUni.getRemainingWork(pizza1),'All orders are complete!');
        assert.equal(pizzUni.getRemainingWork(pizza2),'All orders are complete!');
        assert.equal(pizzUni.getRemainingWork(pizza3),`The following pizzas are still preparing: pizza3.`);
    });
    it('orderType',() => {
        let orderTypeDelivery = 'Delivery';
        let orderTypeCarry = 'Carry Out';
        let totalSum1 = 100;
        let totalSum2 = -100;
        let totalSum3 = 0;

        assert.equal(pizzUni.orderType(totalSum1,orderTypeDelivery),100);
        assert.equal(pizzUni.orderType(totalSum1,orderTypeCarry),90);

        assert.equal(pizzUni.orderType(totalSum2,orderTypeDelivery),-100);
        assert.equal(pizzUni.orderType(totalSum2,orderTypeCarry),-90);

        assert.equal(pizzUni.orderType(totalSum3,orderTypeDelivery),0);
        assert.equal(pizzUni.orderType(totalSum3,orderTypeCarry),0);
    });
});