/**
 * magikVector class for handling 2 dimensional, 3 dimensional or n dimensional
 * vectors
 *
 * @example
 * <code>
 * // import the vector and create a new vector object
 * const MagikVector = import 'MagikVector';
 * const vector = new MagikVector();
 *
 * // initialise a new vector with `x` and `y` coordinates
 * const vector2D = new MagikVector(12, 42);
 *
 * // it's also possible to add a `z` coordinate
 * const vector3D = new MagikVector(15, 12, 71);
 *
 * // or even more coordinates
 * const multiDimensional = new MagikVector(15, 12, 71, 7, 38, 0);
 *
 * // create a MagikVector from an Array
 * const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
 * const multiDimensional = new MagikVector(...myCoordinates);
 * </code>
 */
class MagikVector {

    /**
     * Initialise a new Vector instance with coordinates as arguments, either
     * supply the individual coordinates or supply an array with number values.
     *
     * @example
     * <code>
     *      // two dimensional
     * const vector2D = new MagikVector(12, 15);
     *
     * // three dimensional
     * const vector3D = new MagikVector(12, 15, 71);
     *
     * // multi dimensional
     * const multiDmensional = new MagikVector(3, 4, 5, 99, 12, 14, 42);
     *
     * // from Array
     * const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
     * const multiDimensional = new MagikVector(...myCoordinates);
     * </code>
     * @constructor
     * @param {...number|array}[args] optional coordinate list or Array
     */
    constructor(...args) {

        this.coordinates = [];

        args.forEach((coordinate, index) => {

            this.coordinates[index] = coordinate;

        });

        this.length = this.coordinates.length;

    }

    /**
     * Returns a new Vector with random coordinates, defaults to a 3D vector
     *
     * @param [dimensions=3] number of dimensions to use
     * @static
     * @returns {MagikVector}
     */
    static random(dimensions = 3) {

        const coordinates = [];

        for(let i = 0; i < dimensions; ++i) {

            coordinates[i] = Math.random();

        }

        return (new MagikVector(...coordinates)).normalise();

    }

    /**
     * Returns the `x` coordinate of this Vector.
     *
     * @returns {number} the x coordinate
     */
    getX() {

        return this.coordinates[0];

    }

    /**
     * Returns the `y` coordinate of this Vector
     *
     * @returns {number} the x coordinate
     */
    getY() {

        return this.coordinates[1];

    }

    /**
     * Returns the `z` coordinate of this Vector
     *
     * @returns {number} the x coordinate
     */
    getZ() {

        return this.coordinates[2];

    }

    /**
     * Returns the coordinate at the specified index, consider using getX(),
     * getY() and getZ() to retrieve the coordinates of a 2D or 3D vector
     *
     * @see getX
     * @see getY
     * @see getX
     * @param index
     * @returns {number} the coordinate at the specified index
     */
    getCoordinate(index) {

        return this.coordinates[index];

    }

    /**
     * Alias of getCoordinate
     *
     * @alias this.getCoordinate
     */
    getCoord(index) {

        return this.getCoordinate(index);

    }

    /**
     * Adds given vector to the current vector, i.e. adds the individual
     * coordinates.
     *
     * @param {Vector} vector
     * @returns {MagikVector} returns the current Vector
     */
    add(vector) {

        if(this.length !== vector.length) {

            throw new Error('Vectors must have the same number of coordinates');

        }

        this.coordinates.forEach((coordinate, index) => {

            this.coordinates[index] += vector.coordinates[index];

        });

        return this;

    }

    /**
     * subtracts given vector from the current vector, i.e. subtracts the
     * individual coordinates.
     *
     * @param {Vector} vector
     * @returns {MagikVector} returns the current Vector
     */
    subtract(vector) {

        if(this.length !== vector.length) {

            throw new Error('Vectors must have the same number of coordinates');

        }

        this.coordinates.forEach((coordinate, index) => {

            this.coordinates[index] -= vector.coordinates[index];

        });

        return this;

    }

    /**
     * Alias of substract()
     *
     * @alias this.subtract
     */
    sub(vector) {

        return this.substract(vector);

    }

    /**
     * Multiplies the current Vector by value, you can supply either a scalar value
     * or a Vector
     *
     * @param {Vector|number} value scalar or Vector to use to multiply
     * @returns {Vector|number} returns the current Vector
     */
    multiply(value) {

        if(this.length !== value.length) {

            throw new Error('Vectors must have the same number of coordinates');

        }

        if(typeof value === 'number') {

            this.coordinates.forEach((coordinate, index) => {

                this.coordinates[index] *= value;

            });

        } else {

            this.coordinates.forEach((coordinate, index) => {

                this.coordinates[index] *= value.coordinates[index];

            });

        }

        return this;

    }

    /**
     * Alias of multiply()
     *
     * @alias this.multiply
     */
    mult(value) {

        return this.multiply(value);

    }

    /**
     * Divides the current vector by the supplied scallar or Vector value
     *
     * @param {Vector|number} value scalar or Vector to use to divide
     * @returns {MagikVector} the divided Vector
     */
    divide(value) {

        if(this.length !== value.length) {

            throw new Error('Vectors must have the same number of coordinates');

        }

        if(typeof value === 'number') {

            this.coordinates.forEach((coordinate, index) => {

                this.coordinates[index] /= value;

            });

        } else {

            this.coordinates.forEach((coordinate, index) => {

                this.coordinates[index] /= value.coordinates[index];

            });

        }

        return this;

    }

    /**
     * Alias of divide()
     *
     * @alias this.divide()
     */
    div(value) {

        return this.divide(value);

    }

    /**
     * Returns a clone of the current vector, i.e. creates a new Vector Object with
     * the same coordinates as the current vector
     *
     * @returns {MagikVector}
     */
    clone() {

        return new MagikVector(...this.coordinates);

    }

    /**
     * Returns the magnitude squared
     *
     * @returns {number}
     */
    getMagnitudeSquared() {

        let sum = 0;

        this.coordinates.forEach(coordinate => {

            sum += coordinate * coordinate;

        });

        return sum;

    }

    /**
     * Returns the magnitude of the vector
     *
     * @returns {number}
     */
    getMagnitude() {

        return Math.sqrt(this.getMagnitudeSquared());

    }

    /**
     * Sets the magnitude of the Vector and returns the changed vector
     *
     * @param magnitude
     * @returns {Vector}
     */
    setMagnitude(magnitude) {

        this.normalise();
        this.multiply(magnitude);
        return this;

    }

    /**
     * Returns the dot Product of the current Vector with the supplied Vector,
     * throws an Error if both Vectors do not have the same number of
     * coordinates
     *
     * @param {Vector} vector
     * @returns {number}
     */
    dotProduct(vector) {

        if(this.length !== vector.length) {

            throw new Error('Vectors must have the same number of coordinates');

        }

        let sum = 0;

        this.coordinates.forEach((coordinate, index) => {

            sum += this.coordinates[index] * vector.coordinates[index];

        });

        return sum;

    }

    /**
     * Alias for dotProduct()
     *
     * @alias this.dotProduct
     */
    dot(vector) {

        return this.dotProduct(vector);

    }

    /**
     * Normalises the Vector
     *
     * @returns {MagikVector} the normalised Vector
     */
    normalise() {

        const magnitude = this.getMagnitude();

        this.coordinates.forEach((coordinate, index) => {

            this.coordinates[index] = coordinate / magnitude;

        });

        return this;

    }

    /**
     * Alias of normalise()
     *
     * @alias this.normalise
     */
    normalize() {

        return this.normalise();

    }

    /**
     * Limits the magnitude of the Vector to the supplied scalar value
     *
     * @param {number} scalar
     * @returns {MagikVector}
     */
    limit(scalar) {

        if(this.getMagnitude() > scalar) {

            this.normalise();
            this.multiply(scalar);

        }

        return this;

    }

    /**
     * Returns the string representation of the Vector
     *
     * @returns {string} the string representation of the Vector
     */
    toString() {

        return `(${this.coordinates.join(', ')})`;

    }

}

module.exports = MagikVector;
