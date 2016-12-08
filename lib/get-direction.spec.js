/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('getDirection()', () => {

    it('should be available', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getDirection).to.be.a('function');

    });

    it('should have the alias getDir()', () => {

        const magikVectorInstance = new MagikVector();
        expect(magikVectorInstance.getDir).to.be.a('function');

    });

    it('should return the correct value', () => {

        // equals 0.982793723247329
        const magikVectorInstance1 = new MagikVector(6, 9);
        expect(magikVectorInstance1.getDirection()).to.equal(Math.atan2(9, 6));

        // equals 0.982793723247329
        const magikVectorInstance2 = new MagikVector(40, 60);
        expect(magikVectorInstance2.getDirection()).to.equal(Math.atan2(60, 40));

        // equals 0.844153986113171
        const magikVectorInstance3 = new MagikVector(8, 9);
        expect(magikVectorInstance3.getDirection()).to.equal(Math.atan2(9, 8));

        // equals 0
        const magikVectorInstance4 = new MagikVector(1, 0);
        expect(magikVectorInstance4.getDirection()).to.equal(0);

    });

    it('should throw an error for non-2D Vectors', () => {

        const magikVectorInstance1D = new MagikVector(88);
        expect(() => magikVectorInstance1D.getDirection()).to.throw();

        const magikVectorInstance2D = new MagikVector(88, 99);
        expect(() => magikVectorInstance2D.getDirection()).to.not.throw();

        const magikVectorInstance3D = new MagikVector(3, 4, 5);
        expect(() => magikVectorInstance3D.getDirection()).to.throw();

        const magikVectorInstance6D = new MagikVector(88, 99, 100, 908, 3, 11);
        expect(() => magikVectorInstance6D.getDirection()).to.throw();

    });

});
