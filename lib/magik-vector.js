/**
 * Class for handling 2 dimensional, 3 dimensional or n dimensional vectors
 *
 * @module MagikVector
 * @example
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
 */
class MagikVector {
    /**
     * Initialise a new Vector instance with coordinates as arguments, either
     * supply the individual coordinates or supply an array with number values.
     *
     * @example
     * // empty vector
     * const vector = new MagikVector();
     *
     * // two dimensional
     * const vector2D = new MagikVector(12, 15);
     *
     * // three dimensional
     * const vector3D = new MagikVector(12, 15, 71);
     *
     * // multi dimensional
     * const multiDimensional = new MagikVector(3, 4, 5, 99, 12, 14, 42);
     *
     * // from Array
     * const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
     * const multiDimensional = new MagikVector(...myCoordinates);
     * @param {...number|array}[args] optional coordinate list or Array
     */
    constructor(...args) {
        this.coordinates = [];

        args.forEach((coordinate, index) => {
            this.coordinates[index] = coordinate;
        });
    }

    /**
     * Returns a new vector with random coordinates, defaults to a 3D vector
     *
     * @static
     * @param {number} [dimensions=3] optional number of dimensions to use
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
     * Returns a new vector with two random coordinates
     *
     * @returns {MagikVector} the vector with two random values
     */
    static random2D() {
        return MagikVector.random(2);
    }

    /**
     * Returns a new vector with three random coordinates, basically this is an
     * alias for calling MagikVector.random() without any arguments.
     *
     * @alias MagikVector.random
     * @returns {MagikVector} the vector with two random values
     */
    static random3D() {
        return MagikVector.random(3);
    }

    /**
     * Alias for random()
     *
     * @alias MagikVector.random
     * @param {number} [dimensions=3] optional number of dimensions to use
     * @returns {MagikVector}
     */
    static rand(dimensions) {
        return MagikVector.random(dimensions);
    }

    /**
     * Returns a random integer optionally bound by the minimum(included) and
     * maximum (included) arguments. If only one argument is supplied, it is
     * the maximum number (same as `MagikVector.randomInteger(0, maximum)`)
     *
     * @param {number} [minimum] minimal value
     * @param {number} [maximum] maximal value
     * @returns {number}
     */
    static randomInteger(...args) {
        // two arguments given, minimum and maximum
        if(args.length === 2) {
            const minimum = Math.ceil(args[0]);
            const maximum = Math.floor(args[1]);

            return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        }

        const maximum = args[0] ? Math.floor(args[0]) : Number.MAX_SAFE_INTEGER;

        return Math.floor(Math.random() * (maximum + 1));
    }

    /**
     * Alias of MagikVector.randomInteger()
     *
     * @alias MagikVector.randomInteger
     * @param {number} [minimal] optionally provide a minimum
     * @param {number} [maximal] optionally provide a maximum
     * @returns {number} a random integer
     */
    static randomInt(minimal, maximal) {
        return MagikVector.randomInteger(minimal, maximal);
    }

    /**
     * Converts degrees to radians
     *
     * @example <caption>Convert degrees to Radians</caption>
     * radians = MagikVector.toRadians(degrees);
     * @param {number} degrees
     * @returns {number}
     */
    static toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Converts radians to degrees
     *
     * @example <caption>Convert Radian to degrees</caption>
     * degrees = MagikVector.toDegrees(radians);
     * @param {number} radians
     * @returns {number}
     */
    static toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    /**
     * Returns the length of the coordinates array, in other words the number
     * of dimensions of this Vector
     *
     * @returns {number} the number of dimensions of this Vector
     */
    get length() {
        return this.coordinates.length;
    }

    /**
     * Returns the `x` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector(3, 4, 5);
     * const xCoordinate = vector.x; // returns 3
     * @returns {number} the `x` coordinate of this vector
     */
    get x() {
        return this.coordinates[0];
    }

    /**
     * Returns the `y` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector(3, 4, 5);
     * const yCoordinate = vector.y; // returns 4
     * @returns {number} the `y` coordinate of this vector
     */
    get y() {
        return this.coordinates[1];
    }

    /**
     * Returns the `z` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector(3, 4, 5);
     * const zCoordinate = vector.z; // returns 5
     * @returns {number} the `z` coordinate of this vector
     */
    get z() {
        return this.coordinates[2];
    }

    /**
     * Sets the `x` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.x = 3;
     * @param {number} value the value to set as x coordinate
     * @returns {void}
     */
    set x(value) {
        this.coordinates[0] = value;
    }

    /**
     * Sets  the `y` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.y = 4;
     * @param {number} value the value to set as y coordinate
     * @returns {void}
     */
    set y(value) {
        this.coordinates[1] = value;
    }

    /**
     * Sets the `y` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.z = 5;
     * @param {number} value the value to set as z coordinate
     * @returns {void}
     */
    set z(value) {
        this.coordinates[2] = value;
    }

    /**
     * Returns the `x` coordinate of this Vector.
     *
     * @alias this.x
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
     * @param {number} index
     * @returns {number|undefined} the coordinate at the specified index or undefined
     */
    getCoordinate(index) {
        return this.coordinates[index];
    }

    /**
     * Alias of MagikVector.getCoordinate()
     *
     * @alias this.getCoordinate
     * @param {number} index
     * @returns {number|undefined} the coordinate at the specified index or undefined
     */
    getCoord(index) {
        return this.getCoordinate(index);
    }

    /**
     * Sets the `x` coordinate of this Vector.
     *
     * @param {number} value the value to set
     * @returns {MagikVector} the object itself
     */
    setX(value) {
        this.coordinates[0] = value;

        return this;
    }

    /**
     * Returns the `y` coordinate of this Vector
     *
     * @param {number} value the value to set
     * @returns {MagikVector} the object itself
     */
    setY(value) {
        this.coordinates[1] = value;

        return this;
    }

    /**
     * Returns the `z` coordinate of this Vector
     *
     * @param {number} value the value to set
     * @returns {MagikVector} the object itself
     */
    setZ(value) {
        this.coordinates[2] = value;

        return this;
    }

    /**
     * Sets the coordinate at the specified index, consider using setX(),
     * setY() and setZ() to set the coordinates of a 2D or 3D vector
     *
     * @see setX
     * @see setY
     * @see setX
     * @param {number} index the  index to set the value for
     * @param {number} value the value to set
     * @returns {MagikVector} the object itself
     */
    setCoordinate(index, value) {
        this.coordinates[index] = value;

        return this;
    }

    /**
     * Alias of MagikVector.setCoordinate()
     *
     * @alias this.getCoordinate
     * @param {number} index the  index to set the value for
     * @param {number} value the value to set
     * @returns {MagikVector} the object itself
     */
    setCoord(index, value) {
        this.setCoordinate(index, value);

        return this;
    }

    /**
     * Adds given vector to the current vector, i.e. adds the individual
     * coordinates.
     *
     * @param {MagikVector} vector
     * @returns {MagikVector} returns the current Vector
     */
    add(vector) {
        if(this.length !== vector.length) {
            throw new RangeError(`add(): Vectors must have the same number of coordinates, got ${this.length} and ${vector.length}`);
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
     * @param {MagikVector} vector
     * @returns {MagikVector} returns the current Vector
     */
    subtract(vector) {
        if(this.length !== vector.length) {
            throw new RangeError(`subtract(): Vectors must have the same number of coordinates, got ${this.length} and ${vector.length}`);
        }

        this.coordinates.forEach((coordinate, index) => {
            this.coordinates[index] -= vector.coordinates[index];
        });

        return this;
    }

    /**
     * Alias of MagikVector.substract()
     *
     * @alias this.subtract
     * @param {MagikVector} vector
     * @returns {MagikVector} returns the current Vector
     */
    sub(vector) {
        return this.substract(vector);
    }

    /**
     * Multiplies the current Vector by value, you can supply either a scalar value
     * or a Vector
     *
     * @param {MagikVector|number} value scalar or Vector to use to multiply
     * @returns {MagikVector|number} returns the current Vector
     */
    multiply(value) {
        if(typeof value === 'number') {
            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] *= value;
            });
        } else {
            if(this.length !== value.length) {
                throw new Error(`multiply(): Vectors must have the same number of coordinates, got ${this.length} and ${value.length}`);
            }

            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] *= value.coordinates[index];
            });
        }

        return this;
    }

    /**
     * Alias for the `multiply()` method
     *
     * @alias this.multiply
     * @param {MagikVector|number} value scalar or Vector to use to multiply
     * @returns {MagikVector|number} returns the current Vector
     */
    mult(value) {
        return this.multiply(value);
    }

    /**
     * Divides the current vector by the supplied scallar or Vector value
     *
     * @param {MagikVector|number} value scalar or MagikVector to use to divide
     * @returns {MagikVector} the divided MagikVector
     */
    divide(value) {
        if(typeof value === 'number') {
            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] /= value;
            });
        } else {
            if(this.length !== value.length) {
                throw new Error(`divide(): Vectors must have the same number of coordinates, got ${this.length} and ${value.length}`);
            }

            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] /= value.coordinates[index];
            });
        }

        return this;
    }

    /**
     * Alias for the `divide()` method
     *
     * @alias this.divide
     * @param {MagikVector|number} value scalar or MagikVector to use to divide
     * @returns {MagikVector} the divided MagikVector
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
     * @param {number} magnitude
     * @returns {MagikVector} the adjusted MagikVector object
     */
    setMagnitude(magnitude) {
        this.normalise();
        this.multiply(magnitude);

        return this;
    }

    /**
     * Alias for the `setMagnitude()` method
     *
     * @alias this.setMagnitude
     * @param {number} magnitude
     * @returns {MagikVector} the adjusted MagikVector object
     */
    setMag(magnitude) {
        return this.setMagnitude(magnitude);
    }

    /**
     * Calculates the direction, i.e. the angle of rotation for this vector
     * (only for 2D vectors)
     *
     * @returns {number} the angle of rotation in radians
     */
    getDirection() {
        if(this.length !== 2) {
            throw new RangeError(`getDirection(): Direction can only be calculated for 2D vectors, length = ${this.length}`);
        }

        const direction = Math.atan2(this.getY(), this.getX());

        // TODO implement angleMode
        // return this.angleMode === RADIANS ? direction : this.radiansToDegrees(direction);

        return direction;
    }

    /**
     * Alias for the getDirection() method
     *
     * @alias this.getDirection
     * @returns {number} the angle of rotation in radians
     */
    getDir() {
        return this.getDirection();
    }

    /**
     * Returns the calculated distance from the current Vector to the supplied one
     *
     * @param {MagikVector} vector the vector to calculate the distance to
     * @returns {number} the distance between the two vectors
     */
    getDistanceTo(vector) {
        return vector.clone().subtract(this).getMagnitude();
    }

    /**
     * Alias for the getDistanceTo() method
     *
     * @alias this.getDistanceTo
     * @param {MagikVector} vector the vector to calculate the distance to
     * @returns {number} the distance between the two vectors
     */
    getDistance(vector) {
        return this.getDistanceTo(vector);
    }

    /**
     * Alias for the getDistanceTo() method
     *
     * @alias this.getDistanceTo
     * @param {MagikVector} vector the vector to calculate the distance to
     * @returns {number} the distance between the two vectors
     */
    getDist(vector) {
        return this.getDistanceTo(vector);
    }

    /**
     * Returns the dot Product of the current Vector with the supplied Vector,
     * throws an Error if both Vectors do not have the same number of
     * coordinates
     *
     * @param {MagikVector} vector
     * @returns {number}
     */
    dotProduct(vector) {
        if(this.length !== vector.length) {
            throw new RangeError(`dotProduct(): Vectors must have the same number of coordinates, got ${this.length} and ${vector.length}`);
        }

        let sum = 0;
        // TODO refactor to use .reduce()
        this.coordinates.forEach((coordinate, index) => {
            sum += this.coordinates[index] * vector.coordinates[index];
        });

        return sum;
    }

    /**
     * Alias for dotProduct()
     *
     * @alias this.dotProduct
     * @param {MagikVector} vector the vector to do the dot product with
     * @returns {number}
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
     * @returns {MagikVector} the normalised Vector
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

if(typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = MagikVector;
}
