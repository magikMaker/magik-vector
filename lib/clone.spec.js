/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('clone()', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.clone).to.be.a('function');
    });

    it('should properly clone', () => {
        const instance = new MagikVector(15, 12, 1971);
        const clone = instance.clone();
        expect(instance).to.not.equal(clone);
        expect(instance.coordinates[1]).to.equal(clone.coordinates[1]);
        expect(instance.coordinates[2]).to.equal(clone.coordinates[2]);
        expect(instance.coordinates[3]).to.equal(clone.coordinates[3]);
    });
});
