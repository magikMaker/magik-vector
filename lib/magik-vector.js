/**
 * magikVector class for handling 2 dimensional, 3 dimensional or n dimensional
 * vectors
 *
 * @example
 * // import the vector and create a new vector object
 * const MagikVector = import 'MagikVector';
 * let vector = new MagikVector();
 *
 * // initialise a new vector with `x` and `y` coordinates
 * let vector2D = new MagikVector(12, 42);
 *
 * // it's also possible to add a `z` coordinate
 * let vector3D = new MagikVector(15, 12, 71);
 *
 * // or even more coordinates
 * let multiDimensional = new MagikVector(15, 12, 71, 7, 38, 0);
 */
class MagikVector {

    /**
     * Initialise a new Vector instance with coordinates as arguments
     *
     * @example
     * <code>
     *     const vector2D = new MagikVector(12, 15);
     * </code>
     * @param [args] optional coordinate list
     */
    constructor(...args) {

        this.coordinates = [];

        args.forEach((coordinate, index) => {

            this.coordinates[index] = coordinate;

        });

        this.length = this.coordinates.length;

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
     * @alias this.dotProduct()
     * @param vector
     * @returns {number}
     */
    dot(vector) {

        return this.dotProduct(vector);

    }

    /**
     * Normalises the Vector
     *
     * @returns {Vector} the normalised Vector
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
     * @alias
     * @see normalise()
     * @returns {Vector}
     */
    normalize() {

        return this.normalise();

    }

}

module.exports = MagikVector;
