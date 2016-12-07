/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('dotProduct()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.dotProduct).to.be.a('function');

    });

    it('should have the alias dot()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.dot).to.be.a('function');

    });

    it('should return the correct value for two 1D vectors', () => {

        const magikVectorInstance1 = new MagikVector(5);
        const magikVectorInstance2 = new MagikVector(13);
        expect(magikVectorInstance1.dotProduct(magikVectorInstance2)).to.equal(65);

    });

    it('should return the correct value for two 2D vectors', () => {

        const magikVectorInstance1 = new MagikVector(5, 8);
        const magikVectorInstance2 = new MagikVector(13, 33);
        expect(magikVectorInstance1.dotProduct(magikVectorInstance2)).to.equal(329);

    });

    it('should return the correct value for two 3D vectors', () => {

        const magikVectorInstance1 = new MagikVector(3, 4, 7);
        const magikVectorInstance2 = new MagikVector(8, 12, 5);
        expect(magikVectorInstance1.dotProduct(magikVectorInstance2)).to.equal(107);

    });

    xit('should throw an Error when the vectors have a different number of coordinates', () => {

        const magikVectorInstance1 = new MagikVector(3, 4);
        const magikVectorInstance2 = new MagikVector(8, 12, 99);
        expect(magikVectorInstance1.dotProduct(magikVectorInstance2)).to.throw(RangeError);

    });

});
