/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('MagikVector', () => {
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance).to.be.an('object');
    });

    it('should have have a length property of', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.length).to.equal(0);
    });

    describe('should have a length value equal to the number of parameters', () => {
        it('should have a length property of 1', () => {
            const magikVectorInstance = new MagikVector(0);
            expect(magikVectorInstance.length).to.equal(1);
        });

        it('should have a length property of 2', () => {
            const magikVectorInstance = new MagikVector(0, 0);
            expect(magikVectorInstance.length).to.equal(2);
        });

        it('should have a length property of 3', () => {
            const magikVectorInstance = new MagikVector(0, 0, 0);
            expect(magikVectorInstance.length).to.equal(3);
        });

        it('should be possible to instantiate the class using an array', () => {
            const coordinates = [0, 19, 25, 0, 46, 22, 498576];
            const magikVectorInstance = new MagikVector(...coordinates);
            expect(magikVectorInstance.length).to.equal(coordinates.length);
        });
    });
});
