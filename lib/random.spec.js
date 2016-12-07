/*  eslint no-unused-expressions: 0 */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MagikVector = require('./magik-vector');

const expect = chai.expect;
chai.use(sinonChai);

describe('random()', () => {

    it('should be available as static method', () => {

        expect(MagikVector.random).to.be.a('function');

    });

    it('should have the alias `rand()`', () => {

        expect(MagikVector.rand).to.be.a('function');

    });

    it('should return a MagikVector instance', () => {

        expect(MagikVector.random()).to.be.an.instanceof(MagikVector);

    });

    it('should return a MagikVector instance when alias is called', () => {

        expect(MagikVector.rand()).to.be.an.instanceof(MagikVector);

    });

    it('should be a 3D vector by default', () => {

        const magikVectorInstance = MagikVector.random();
        expect(magikVectorInstance.length).to.equal(3);

    });

    it('should be a 1D vector when supplying 1 as a parameter', () => {

        const magikVectorInstance = MagikVector.random(1);
        expect(magikVectorInstance.length).to.equal(1);

    });

    it('should be a 2D vector when supplying 2 as a parameter', () => {

        const magikVectorInstance = MagikVector.random(2);
        expect(magikVectorInstance.length).to.equal(2);

    });

    it('should be a multi dimensional vector when supplying a number as a parameter', () => {

        const numberOfDimensions = Math.ceil(Math.random() * 1000);
        const magikVectorInstance = MagikVector.random(numberOfDimensions);
        expect(magikVectorInstance.length).to.equal(numberOfDimensions);

    });

});
