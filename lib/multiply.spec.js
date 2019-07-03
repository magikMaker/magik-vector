/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('multiply()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.multiply).to.be.a('function');
    });

    it('should have the alias mult()', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.mult).to.be.a('function');
    });

    it('should return the correct value when multiplying a 2D Vector with a scaler', () => {
        const magikVectorInstance = new MagikVector(3, 4);
        magikVectorInstance.multiply(10);
        expect(magikVectorInstance.getX()).to.equal(30);
        expect(magikVectorInstance.getY()).to.equal(40);
    });

    it('should return the correct value when multiplying a 3D Vector with a scaler', () => {
        const magikVectorInstance = new MagikVector(3, 4, 5);
        magikVectorInstance.multiply(8);
        expect(magikVectorInstance.getX()).to.equal(24);
        expect(magikVectorInstance.getY()).to.equal(32);
        expect(magikVectorInstance.getZ()).to.equal(40);
    });

    it('should return the correct value when multiplying two 2D Vectors', () => {
        const magikVectorInstance1 = new MagikVector(3, 4);
        const magikVectorInstance2 = new MagikVector(5, 6);
        magikVectorInstance1.multiply(magikVectorInstance2);
        expect(magikVectorInstance1.getX()).to.equal(15);
        expect(magikVectorInstance1.getY()).to.equal(24);
    });

    it('should throw an error when two Vectors with different length are multiplied', () => {
        const magikVectorInstance2D = new MagikVector(15, 12);
        const magikVectorInstance3D = new MagikVector(19, 71, 15);
        expect(() => magikVectorInstance2D.multiply(magikVectorInstance3D)).to.throw();
    });
});
