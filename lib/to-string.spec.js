/*  eslint no-unused-expressions: 0 */
const chai = require('chai');

const MagikVector = require('./magik-vector');

const {expect} = chai;

describe('toString()', () => {
    /**
     * @test MagikVector#toString
     */
    it('should be available', () => {
        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.toString).to.be.a('function');
    });

    /**
     * @test MagikVector#toString
     */
    it('should return a string', () => {
        const magikVectorInstance = new MagikVector(15, 88);
        expect(magikVectorInstance.toString()).to.be.a('string');
    });

    /**
     * @test MagikVector#toString
     */
    it('should return a formatted string', () => {
        const magikVectorInstance = new MagikVector(15, 88);
        expect(magikVectorInstance.toString()).to.equal('(15, 88)');
    });

    /**
     * @test MagikVector#toString
     */
    it('should return a formatted string for a 3D vector', () => {
        const magikVectorInstance = new MagikVector(1, 2, 3);
        expect(magikVectorInstance.toString()).to.equal('(1, 2, 3)');
    });

    /**
     * @test MagikVector#toString
     */
    it('should return a formatted string for a 3D vector containing values with zeros', () => {
        const magikVectorInstance = new MagikVector(0, 0, 0);
        expect(magikVectorInstance.toString()).to.equal('(0, 0, 0)');
    });
});
