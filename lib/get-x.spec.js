/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('getX()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getX).to.be.a('function');
    });

    it('should return the correct value', () => {
        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(expectedValue);
        expect(magikVectorInstance.getX()).to.equal(expectedValue);
    });

    it('should also set 0 as a value', () => {
        const expectedValue = 0;
        const magikVectorInstance = new MagikVector(expectedValue);
        expect(magikVectorInstance.getX()).to.equal(expectedValue);
    });

    it('should set the x coordinate to undefined when not provided', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getX()).to.equal(undefined);
    });

    it('should set the x coordinate when multiple coordinates are given', () => {
        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(expectedValue, 4, 3, 2, 1);
        expect(magikVectorInstance.getX()).to.equal(expectedValue);
    });
});

describe('get x', () => {
    it('should be possible to get the x coordinate', () => {
        const testValue = 42;
        const magikVectorInstance = new MagikVector(testValue);
        expect(magikVectorInstance.x).to.equal(testValue);
    });
});
