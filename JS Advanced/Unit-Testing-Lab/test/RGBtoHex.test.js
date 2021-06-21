let {assert, expect} = require('chai');
let rgbToHexColor = require('../RGBtoHex.js');
describe('rgbToHex', () => {
    it('convert black to hex', () => {
        assert.equal(rgbToHexColor(0, 0, 0),'#000000');
    });

    it('convert white to hex', () => {
        assert.equal(rgbToHexColor(255, 255, 255),'#FFFFFF');
    });

    it('convert red to hex', () => {
        assert.equal(rgbToHexColor(255, 0, 0),'#FF0000');
    });

    it('convert green to hex', () => {
        assert.equal(rgbToHexColor(0, 255, 0),'#00FF00');
    });

    it('convert blue to hex', () => {
        assert.equal(rgbToHexColor(0, 0, 255),'#0000FF');
    });

    it('returns undefined if input is smaller', () => {
        assert.isUndefined(rgbToHexColor(-1, 0, 0));
    });

    it('returns undefined if input is smaller', () => {
        assert.isUndefined(rgbToHexColor(0, -1, 0));
    });

    it('returns undefined if input is smaller', () => {
        assert.isUndefined(rgbToHexColor(0, 0, -1));
    });

    it('returns undefined if input is greater', () => {
        assert.isUndefined(rgbToHexColor(256, 0, 0));
    });

    it('returns undefined if input is greater', () => {
        assert.isUndefined(rgbToHexColor(0, 256, 0));
    });

    it('returns undefined if input is greater', () => {
        assert.isUndefined(rgbToHexColor(0, 0, 256));
    });

    it('returns undefined if input type is invalid', () => {
        expect(rgbToHexColor('a', 0, 0));
    });

    it('returns undefined if input type is invalid', () => {
        assert.isUndefined(rgbToHexColor(0, 'a', 0));
    });

    it('returns undefined if input type is invalid', () => {
        assert.isUndefined(rgbToHexColor(0, 0, 'a'));
    });


    //test overloading
    it('converts (151, 104, 172) to hex', () => {
        assert.equal(rgbToHexColor(151, 104, 172),'#9768AC');
    });

    it('converts (42, 173, 170) to hex', () => {
        assert.equal(rgbToHexColor(42, 173, 170),'#2AADAA');
    });
});