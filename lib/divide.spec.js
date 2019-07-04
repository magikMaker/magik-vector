/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('divide()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.divide).to.be.a('function');
    });

    it('should have the alias div()', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.div).to.be.a('function');
    });

    it('should return the correct value when dividing a 2D Vector with a scaler', () => {
        const magikVectorInstance = new MagikVector(24, 18);
        magikVectorInstance.divide(6);
        expect(magikVectorInstance.getX()).to.equal(4);
        expect(magikVectorInstance.getY()).to.equal(3);
    });

    it('should return the correct value when dividing a 3D Vector with a scaler', () => {
        const magikVectorInstance = new MagikVector(24, 36, 48);
        magikVectorInstance.divide(6);
        expect(magikVectorInstance.getX()).to.equal(4);
        expect(magikVectorInstance.getY()).to.equal(6);
        expect(magikVectorInstance.getZ()).to.equal(8);
    });

    it('should return the correct value when dividing two 2D Vectors', () => {
        const magikVectorInstance1 = new MagikVector(12, 18);
        const magikVectorInstance2 = new MagikVector(4, 6);
        magikVectorInstance1.divide(magikVectorInstance2);
        expect(magikVectorInstance1.getX()).to.equal(3);
        expect(magikVectorInstance1.getY()).to.equal(3);
    });

    it('should throw an error when two Vectors with different length are divided', () => {
        const magikVectorInstance2D = new MagikVector(15, 12);
        const magikVectorInstance3D = new MagikVector(19, 71, 15);
        expect(() => magikVectorInstance2D.divide(magikVectorInstance3D)).to.throw();
    });
});
