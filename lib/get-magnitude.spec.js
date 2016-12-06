/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('getMagnitude()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getMagnitude).to.be.a('function');

    });

    it('should return the correct value 1D vector', () => {

        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(expectedValue);
        expect(magikVectorInstance.getMagnitude()).to.equal(expectedValue);

    });

    it('should return the correct value 2D vector', () => {

        const magikVectorInstance = new MagikVector(3, 4);
        expect(magikVectorInstance.getMagnitude()).to.equal(5);

    });

    it('should return the correct value 3D vector', () => {

        const expectedValue = Math.sqrt(110);
        const magikVectorInstance = new MagikVector(5, 6, 7);
        expect(magikVectorInstance.getMagnitude()).to.equal(expectedValue);

    });

    it('should the return correct value 4D vector', () => {

        const expectedValue = Math.sqrt(86);
        const magikVectorInstance = new MagikVector(3, 4, 5, 6);
        expect(magikVectorInstance.getMagnitude()).to.equal(expectedValue);

    });

});
