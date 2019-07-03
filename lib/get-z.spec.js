/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('getZ()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getZ).to.be.a('function');
    });

    it('should return the correct value', () => {
        const expectedValue = 15;
        const magikVectorInstance = new MagikVector(1, 2, expectedValue);
        expect(magikVectorInstance.getZ()).to.equal(expectedValue);
    });

    it('should also set 0 as a value', () => {
        const expectedValue = 0;
        const magikVectorInstance = new MagikVector(1, 2, expectedValue);
        expect(magikVectorInstance.getZ()).to.equal(expectedValue);
    });

    it('should set the z coordinate to undefined when not provided', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getZ()).to.equal(undefined);
    });

    it('should set the z coordinate when multiple coordinates are given', () => {
        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(4, 3, expectedValue, 2, 1);
        expect(magikVectorInstance.getZ()).to.equal(expectedValue);
    });
});

describe('get z', () => {
    it('should be possible to get the z coordinate', () => {
        const testValue = 42;
        const magikVectorInstance = new MagikVector(0, 0, testValue);
        console.log('get z test', magikVectorInstance);
        expect(magikVectorInstance.z).to.equal(testValue);
    });
});
