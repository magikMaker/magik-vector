/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('getCoordinate()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getCoordinate).to.be.a('function');
    });

    it('should have the alias `getCoord()`', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getCoord).to.be.a('function');
    });

    it('should return the correct value', () => {
        const magikVectorInstance = new MagikVector(3, 4);
        expect(magikVectorInstance.getCoordinate(0)).to.equal(3);
        expect(magikVectorInstance.getCoordinate(1)).to.equal(4);
    });

    it('should return undefined for a non-existing coordinate', () => {
        const magikVectorInstance = new MagikVector(15);
        expect(magikVectorInstance.getCoordinate(8)).to.equal(undefined);
    });
});
