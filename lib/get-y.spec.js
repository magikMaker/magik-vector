/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('getY()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getY).to.be.a('function');

    });

    it('should the return correct value', () => {

        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(0, expectedValue);
        expect(magikVectorInstance.getY()).to.equal(expectedValue);

    });

    it('should also set 0 as a value', () => {

        const expectedValue = 0;
        const magikVectorInstance = new MagikVector(1, expectedValue);
        expect(magikVectorInstance.getY()).to.equal(expectedValue);

    });

    it('should set the y coordinate to undefined when not provided', () => {

        const magikVectorInstance = new MagikVector(10);
        expect(magikVectorInstance.getY()).to.equal(undefined);

    });

    it('should set the y coordinate when multiple coordinates are given', () => {

        const expectedValue = (new Date()).getTime();
        const magikVectorInstance = new MagikVector(4, expectedValue, 3, 2, 1);
        expect(magikVectorInstance.getY()).to.equal(expectedValue);

    });


});
