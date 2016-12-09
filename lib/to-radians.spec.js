/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
// const stub = require('sinon').stub;
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('toRadians()', () => {

    it('should be available as static method', () => {

        expect(MagikVector.toRadians).to.be.a('function');

    });

});
