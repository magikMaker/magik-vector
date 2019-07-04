/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('getMagnitudeSquared()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getMagnitudeSquared).to.be.a('function');
    });

    it('should the return correct value 2D vector', () => {
        const magikVectorInstance = new MagikVector(3, 4);
        expect(magikVectorInstance.getMagnitudeSquared()).to.equal(25);
    });

    it('should the return correct value 3D vector', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5);
        expect(magikVectorInstance.getMagnitudeSquared()).to.equal(50);
    });

    it('should the return correct value 4D vector', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5, 6);
        expect(magikVectorInstance.getMagnitudeSquared()).to.equal(86);
    });
});
