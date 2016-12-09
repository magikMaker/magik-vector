/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const stub = require('sinon').stub;
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('MagikVector.randomInteger()', () => {

    it('should be available', () => {

        expect(MagikVector.randomInteger).to.be.a('function');

    });

    it('should have the alias MagikVector.randomInt()', () => {

        expect(MagikVector.randomInt).to.be.a('function');

    });

    it('should return the correct value when supplying the same minimum and maximum values', () => {

        expect(MagikVector.randomInteger(20, 20)).to.equal(20);

    });

    xit('should return the correct value when not supplying minimum or maximum values', () => {

        // maximal returned value is Number.MAX_SAFE_INTEGER
        const MathRandomStub = stub(Math, 'random');
        MathRandomStub.returns(1);
        expect(MagikVector.randomInteger()).to.equal(Number.MAX_SAFE_INTEGER);
        MathRandomStub.restore();

    });

    xit('should return the correct value when supplying one argument', () => {

        // Math.random() returns a float between 0 and 1 (exclusive)
        // returned value is between 0 * maxValue and 1 * maxValue (exclusive)
        const maxValue = 12345;
        const MathRandomStub = stub(Math, 'random');
        MathRandomStub.returns(1);
        expect(MagikVector.randomInteger(maxValue)).to.equal(maxValue + 1);
        MathRandomStub.restore();

    });

    xit('should return the correct value when supplying minimum and maximum values', () => {

        // 4 is chosen by fair dice role so guaranteed to be random ;)
        // see: http://xkcd.com/221/
        const MathRandomStub = stub(Math, 'random');
        MathRandomStub.returns(4);
        expect(MagikVector.randomInteger(20, 30)).to.equal(64);
        MathRandomStub.restore();

    });

});
