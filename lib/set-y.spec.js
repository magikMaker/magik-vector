/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('setY()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setY).to.be.a('function');
    });

    it('should set the correct value', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5);
        magikVectorInstance.setY(15);
        expect(magikVectorInstance.getY()).to.equal(15);
    });

    it('should set the correct value on an empty Vector', () => {
        const magikVectorInstance = new MagikVector();
        magikVectorInstance.setY(15);
        expect(magikVectorInstance.getY()).to.equal(15);
    });
});

describe('set y', () => {
    it('should be possible to set the y coordinate', () => {
        const testValue = 42;
        const magikVectorInstance = new MagikVector();
        magikVectorInstance.y = testValue;
        expect(magikVectorInstance.y).to.equal(testValue);
    });
});

