/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('add()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.add).to.be.a('function');

    });

    it('should have the alias normalize()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.normalize).to.be.a('function');

    });

    it('should throw an Error when the vectors have a different number of coordinates', () => {

        const magikVectorInstance1 = new MagikVector(3, 4);
        const magikVectorInstance2 = new MagikVector(8, 12, 99);
        const testFunction = () => magikVectorInstance1.add(magikVectorInstance2);
        expect(testFunction).to.throw(RangeError);

    });

});
