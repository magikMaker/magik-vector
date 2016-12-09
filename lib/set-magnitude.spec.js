/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('setMagnitude()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setMagnitude).to.be.a('function');

    });

    it('should have the alias setMag()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.setMag).to.be.a('function');

    });

});
