/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('getDistanceTo()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getDistanceTo).to.be.a('function');
    });

    it('should have the alias getDistance()', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getDistance).to.be.a('function');
    });

    it('should have the alias getDist()', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getDist).to.be.a('function');
    });

    it('should calculate the distance', () => {
        const magikVectorInstance1 = new MagikVector(20);
        const magikVectorInstance2 = new MagikVector(10);
        const testValue = magikVectorInstance1.getDistanceTo(magikVectorInstance2);
        expect(testValue).to.equal(10);
    });
});
