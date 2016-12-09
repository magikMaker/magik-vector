/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('subtract()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.subtract).to.be.a('function');

    });

    it('should have the alias sub()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.sub).to.be.a('function');

    });

    it('should have the alias subtract()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.subtract).to.be.a('function');

    });

    it('should throw an Error when the vectors have a different number of coordinates', () => {

        const magikVectorInstance1 = new MagikVector(3, 4);
        const magikVectorInstance2 = new MagikVector(8, 12, 99);
        const testFunction = () => magikVectorInstance1.subtract(magikVectorInstance2);
        expect(testFunction).to.throw(RangeError);

    });

});
