/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

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

});
