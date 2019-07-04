/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('setCoordinate()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setCoordinate).to.be.a('function');
    });

    it('should have the alias setCoord()', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setCoord).to.be.a('function');
    });

    it('should set the correct value', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5);
        magikVectorInstance.setCoordinate(0, 15);
        expect(magikVectorInstance.coordinates[0]).to.equal(15);
    });

    it('should set the correct value on an empty Vector', () => {
        const magikVectorInstance = new MagikVector();
        magikVectorInstance.setCoordinate(12, 15);
        expect(magikVectorInstance.coordinates[12]).to.equal(15);
    });
});
