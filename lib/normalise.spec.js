/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('normalise()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.normalise).to.be.a('function');

    });

    it('should have the alias normalize()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.normalize).to.be.a('function');

    });

    it('should return the correct value', () => {

        const magikVectorInstance = new MagikVector(3, 4);
        magikVectorInstance.normalise();
        expect(magikVectorInstance.getMagnitude()).to.equal(1);

    });

    xit('should return the correct value', () => {

        const magikVectorInstance = new MagikVector(3, 4);
        expect(magikVectorInstance.normalise()).to.equal(1);

    });

});
