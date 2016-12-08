/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('setZ()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setZ).to.be.a('function');

    });

    it('should set the correct value', () => {

        const magikVectorInstance = new MagikVector(3, 4, 5);
        magikVectorInstance.setZ(15);
        expect(magikVectorInstance.getZ()).to.equal(15);

    });

    it('should set the correct value on an empty Vector', () => {

        const magikVectorInstance = new MagikVector();
        magikVectorInstance.setZ(15);
        expect(magikVectorInstance.getZ()).to.equal(15);

    });

});
