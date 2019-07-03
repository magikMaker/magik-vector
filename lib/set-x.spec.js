/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('setX()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setX).to.be.a('function');
    });

    it('should set the correct value', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5);
        magikVectorInstance.setX(15);
        expect(magikVectorInstance.getX()).to.equal(15);
    });

    it('should set the correct value on an empty Vector', () => {
        const magikVectorInstance = new MagikVector();
        magikVectorInstance.setX(15);
        expect(magikVectorInstance.getX()).to.equal(15);
    });
});

describe('set x', () => {
    it('should be possible to set the x coordinate', () => {
        const testValue = 42;
        const magikVectorInstance = new MagikVector();
        magikVectorInstance.x = testValue;
        expect(magikVectorInstance.x).to.equal(testValue);
    });
});
