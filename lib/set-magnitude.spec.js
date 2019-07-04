/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

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
