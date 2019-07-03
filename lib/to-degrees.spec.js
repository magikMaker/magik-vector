/*  eslint no-unused-expressions: 0 */
const chai = require('chai');
// const {stub} = require('sinon');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('toDegrees()', () => {
    it('should be available as static method', () => {
        expect(MagikVector.toDegrees).to.be.a('function');
    });
});
