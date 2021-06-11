const { expect } = require('chai');
const PaymentPackage = require('./paymentPackage');

describe('paymentPackage tests', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('HR Services', 1500);
    })
    it('constructor', () => {
        expect(instance._name).to.equal('HR Services');
        expect(instance._value).to.equal(1500);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);
    });

    it('name', () => {
        expect(instance.name).to.equal('HR Services');

        instance.name = 'Pesho';

        expect(instance.name).to.equal('Pesho');
        expect(() => { instance.name = '' }).to.throw('Name must be a non-empty string');
        expect(() => { instance.name = 1 }).to.throw('Name must be a non-empty string');
    });

    it('value', () => {
        expect(instance.value).to.equal(1500);

        instance.value = 1;

        expect(instance.value).to.equal(1);
        expect(() => { instance.value = 'a' }).to.throw('Value must be a non-negative number');
        expect(() => { instance.value = 0 }).not.to.throw('Value must be a non-negative number');
        expect(() => { instance.value = -1 }).to.throw('Value must be a non-negative number');
    });

    it('VAT', () => {
        expect(instance.VAT).to.equal(20);
        instance.VAT = 1;

        expect(instance.VAT).to.equal(1);
        expect(() => { instance.VAT = 'a' }).to.throw('VAT must be a non-negative number');
        expect(() => { instance.VAT = -1 }).to.throw('VAT must be a non-negative number');
    });

    it('active', () => {
        expect(instance.active).to.be.true;
        instance.active = false;
        expect(instance.active).to.be.false;

        expect(() => { instance.active = 'a' }).to.throw('Active status must be a boolean');
    });

    it('toString', () => {
        function getString(name, value, VAT, active) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }

        expect(instance.toString()).to.equal(getString('HR Services', 1500, 20, true));
        instance.active = false;
        expect(instance.toString()).to.equal(getString('HR Services', 1500, 20, false));
        instance.VAT = 5;
        expect(instance.toString()).to.equal(getString('HR Services', 1500, 5, false));
        instance.name = 'Kiro';
        expect(instance.toString()).to.equal(getString('Kiro', 1500, 5, false));
        instance.value = 5;
        expect(instance.toString()).to.equal(getString('Kiro', 5, 5, false));
    });
})