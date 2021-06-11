let StringBuilder = require('./stringBuilder.js')
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('String Builder tests', () => {
    describe('check for methods', function () {
        it('should have the correct function properties', function () {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });
    })
    describe('constructor', function () {
        it('convert passed string to array', function () {
            let instance = new StringBuilder('hello')
            expect(instance._stringArray).to.be.an('array')
        })
    })

    describe('append', function () {
        it('return string `hello, there`', function () {
            let instance = new StringBuilder('hello')
            instance.append(', there')
            expect(instance.toString()).to.equal('hello, there')
        })
        it('if input is empty output to be empty', function () {
            let instance = new StringBuilder('')
            expect(instance.toString()).to.be.empty;
        })
        it('return TypeError if append number', function () {
            let instance = new StringBuilder('hello')
            expect(() => instance.append(1)).to.throw(TypeError)
        });
    })

    describe('prepend', function () {
        it('return string `User, hello`', function () {
            let instance = new StringBuilder('hello')
            instance.prepend('User, ')
            expect(instance.toString()).to.equal('User, hello')
        })
        it('return TypeError if prepend number', function () {
            let instance = new StringBuilder('hello')
            expect(() => instance.prepend(3)).to.throw(TypeError)
        });

    })

    describe('insertAt', function () {
        it('return string `heyoullo`', function () {
            let instance = new StringBuilder('hello')
            instance.insertAt('you', 2)
            expect(instance.toString()).to.equal('heyoullo')
        })
        it('return TypeError if insert number', function () {
            let instance = new StringBuilder('hello')
            expect(() => instance.insertAt(2, 2)).to.throw(TypeError)
        });
    })

    describe('remove', function () {
        it('return string `heo`', function () {
            let instance = new StringBuilder('hello')
            instance.remove(2, 2)
            expect(instance.toString()).to.equal('heo')
            expect(instance.toString()).to.have.lengthOf(3)
        })
        it('return string `heo`', function () {
            let instance = new StringBuilder('hello')
            instance.remove(0, 5)
            expect(instance.toString()).to.be.empty;
        })

    })

    describe('toString', function () {
        it('return string `hello`', function () {
            let instance = new StringBuilder('hello')
            expect(instance.toString()).to.equal('hello')
        })
    })

    describe('test all functionality', function () {
        it('test all ', function () {
            let instance = new StringBuilder('hello')
            instance.append(', there');
            instance.prepend('User, ');
            instance.insertAt('woop', 5);
            instance.remove(6, 3);
            expect(instance.toString()).to.equal('User,w hello, there');
            expect(instance.toString()).to.have.lengthOf(19)
        });
    })

})