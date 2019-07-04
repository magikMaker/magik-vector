/*  eslint no-unused-expressions: 0 */
const chai = require('chai');
// const {stub} = require('sinon');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('toRadians()', () => {
    it('should be available as static method', () => {
        expect(MagikVector.toRadians).to.be.a('function');
    });
});
