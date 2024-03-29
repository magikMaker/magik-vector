/**
 * MagikVector class for handling 2 dimensional, 3 dimensional or n dimensional
 * vectors
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
     * @class
     * @param {...number|array}[args] - optional coordinate list or Array
     */
    constructor(...args) {
        this.coordinates = [];

        args.forEach((coordinate, index) => {
            this.coordinates[index] = coordinate;
        });
    }

    /**
     * Returns a new MagikVector with random coordinates, defaults to
     * a normalised 3D vector
     *
     * @static
     * @param {number} [dimensions=3] - optional number of dimensions to use
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
     * Alias for `random()`
     *
     * @static
     * @borrows MagikVector#random as MagikVector#rand
     * @param {number} [dimensions=3] - optional number of dimensions to use
     * @returns {MagikVector} - instance of the MagikVector Class
     */
    static rand(dimensions) {
        return MagikVector.random(dimensions);
    }

    /**
     * Returns a new vector with two random coordinates
     *
     * @returns {MagikVector} - instance of MagikVector with two random values
     */
    static random2D() {
        return MagikVector.random(2);
    }

    /**
     * Returns a new vector with three random coordinates, basically this is an
     * alias for calling MagikVector.random() without any arguments.
     *
     * @returns {MagikVector} - instance of MagikVector with three random values
     */
    static random3D() {
        return MagikVector.random(3);
    }

    /**
     * Returns a random integer optionally bound by the minimum(included) and
     * maximum (included) arguments. If only one argument is supplied, it is
     * the maximum number (same as `MagikVector.randomInteger(0, maximum)`)
     *
     * @param {Object} [args]
     * @param {number} [args.minimum]- optional minimum value
     * @param {number} [ars.maximum] - optional maximum value
     * @returns {number} - the random number
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
     * Returns a random integer optionally bound by the minimum(included) and
     * maximum (included) arguments. If only one argument is supplied, it is
     * the maximum number (same as `MagikVector.randomInteger(0, maximum)`)
     *
     * @borrows MagikVector#randomInteger as MagikVector#randomInt
     * @param {Object} [args]
     * @param {number} [args.minimum]- optional minimum value
     * @param {number} [ars.maximum] - optional maximum value
     * @returns {number} - the random number
     */
    static randomInt(...args) {
        return MagikVector.randomInteger(args);
    }

    /**
     * Converts degrees to radians
     *
     * @example <caption>Convert degrees to Radians</caption>
     * radians = MagikVector.toRadians(degrees);
     * @param {number} degrees - the number of degrees to convert
     * @returns {number} - the converted degrees as radians
     */
    static toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Converts radians to degrees
     *
     * @example <caption>Convert Radian to degrees</caption>
     * degrees = MagikVector.toDegrees(radians);
     * @param {number} radians - the number of radians to convert
     * @returns {number} - the converted radians as degrees
     */
    static toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    /**
     * Returns the length of the coordinates array, in other words the number
     * of dimensions of this MagikVector
     *
     * @returns {number} - the number of dimensions of this MagikVector
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
     * @returns {number} - the `x` coordinate of this MagikVector instance
     */
    get x() {
        return this.getX();
    }

    /**
     * Returns the `y` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector(3, 4, 5);
     * const yCoordinate = vector.y; // returns 4
     * @returns {number} - the `y` coordinate of this MagikVector instance
     */
    get y() {
        return this.getY();
    }

    /**
     * Returns the `z` coordinate of this Vector.
     *
     * @example
     * const vector = new MagikVector(3, 4, 5);
     * const zCoordinate = vector.z; // returns 5
     * @returns {number} - the `z` coordinate of this MagikVector instance
     */
    get z() {
        return this.getZ();
    }

    /**
     * Sets the `x` coordinate of this MagikVector instance.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.x = 3;
     * @param {number} value - the value to set as x coordinate
     * @returns {void}
     */
    set x(value) {
        this.coordinates[0] = value;
    }

    /**
     * Sets  the `y` coordinate of this MagikVector instance.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.y = 4;
     * @param {number} value - the value to set as y coordinate
     * @returns {void}
     */
    set y(value) {
        this.coordinates[1] = value;
    }

    /**
     * Sets the `z` coordinate of this MagikVector instance.
     *
     * @example
     * const vector = new MagikVector();
     * const vector.z = 5;
     * @param {number} value - the value to set as z coordinate
     * @returns {void}
     */
    set z(value) {
        this.coordinates[2] = value;
    }

    /**
     * Returns the `x` coordinate of this MagikVector instance.
     *
     * @borrows MagikVector#x as MagikVector#getX
     * @returns {number} - the x coordinate
     */
    getX() {
        return this.coordinates[0];
    }

    /**
     * Returns the `y` coordinate of this MagikVector instance.
     *
     * @borrows MagikVector#y as MagikVector#getY()
     * @returns {number} the x coordinate
     */
    getY() {
        return this.coordinates[1];
    }

    /**
     * Returns the `z` coordinate of this MagikVector instance.
     *
     * @borrows MagikVector#z as MagikVector#getZ()
     * @returns {number} the x coordinate
     */
    getZ() {
        return this.coordinates[2];
    }

    /**
     * Returns the coordinate at the specified index, consider using:
     * `const x = vector.x` or `const x = vector.getX()`,
     * `const y = vector.y` or `const y = vector.getY()`,
     * `const z = vector.z` or `const z = vector.getZ()`,
     * to retrieve the coordinates of a 2D or 3D vector.
     *
     * @see MagikVector.x
     * @see MagikVector.getX()
     * @see MagikVector.y
     * @see MagikVector.getY()
     * @see MagikVector.z
     * @see MagikVector.getZ()
     * @param {number} index
     * @returns {number|undefined} - value at the specified index or undefined
     */
    getCoordinate(index) {
        return this.coordinates[index];
    }

    /**
     * Alias of MagikVector.getCoordinate()
     *
     * @borrows MagikVector#getCoordinate() as MagikVector#getCoord()
     * @param {number} index
     * @returns {number|undefined} - value at the specified index or undefined
     */
    getCoord(index) {
        return this.getCoordinate(index);
    }

    /**
     * Sets the `x` coordinate of this MagikVector and returns the instance
     * so it can be chained.
     *
     * @example <caption>set x coordinate and chain</caption>
     * const vector = new MagikVector();
     * vector.setX(33).setY(44).setZ(55);
     * @param {number} value - the value to set
     * @returns {MagikVector} - the instance itself
     */
    setX(value) {
        this.coordinates[0] = value;

        return this;
    }

    /**
     * Returns the `y` coordinate of this MagikVector and returns the instance
     * so it can be chained.
     *
     * @example <caption>set y coordinate and chain</caption>
     * const vector = new MagikVector();
     * vector.setX(33).setY(44).setZ(55);
     * @param {number} value the value to set
     * @returns {MagikVector} - the instance itself
     */
    setY(value) {
        this.coordinates[1] = value;

        return this;
    }

    /**
     * Returns the `z` coordinate of this MagikVector and returns the instance
     * so it can be chained.
     *
     * @example <caption>set z coordinate and chain</caption>
     * const vector = new MagikVector();
     * vector.setX(33).setY(44).setZ(55);
     * @param {number} value the value to set
     * @returns {MagikVector} - the instance itself
     */
    setZ(value) {
        this.coordinates[2] = value;

        return this;
    }

    /**
     * Sets the coordinate at the specified index, consider using
     * `vector.x = 3` or `vector.setX()`,
     * `vector.y = 4` or `vector.setY()`,
     * `vector.z = 5` or `vector.setZ()`,
     * to set the coordinates of a 2D or 3D vector.
     * Returns the instance so it's possible to chain this method.
     *
     * @see MagikVector.x
     * @see MagikVector.setX()
     * @see MagikVector.y
     * @see MagikVector.setY()
     * @see MagikVector.z
     * @see MagikVector.setZ()
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
     * @borrows MagikVector#setCoordinate() as MagikVector#setCoord()
     * @param {number} index - the  index to set the value for
     * @param {number} value - the value to set
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
     * @param {MagikVector} vector - vector to add to current instance
     * @returns {MagikVector} - the current MagikVector instance
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
     * @param {MagikVector} vector - vector to subtract from current instance
     * @returns {MagikVector} - returns the current Vector
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
     * @borrows MagikVector#subtract() as MagikVector#sub()
     * @param {MagikVector} vector - vector to subtract from current instance
     * @returns {MagikVector} - returns the current Vector
     */
    sub(vector) {
        return this.substract(vector);
    }

    /**
     * Multiplies the current Vector by value, you can supply either a scalar value
     * or a Vector
     *
     * @param {MagikVector|number} value - scalar or Vector to use to multiply
     * @returns {MagikVector|number} - returns the current MagikVector instance
     */
    multiply(value) {
        if(typeof value === 'number') {
            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] *= value;
            });
        } else if(value instanceof MagikVector) {
            if(this.length !== value.length) {
                throw new Error(
                    `multiply(): Vectors must have the same number of coordinates, got ${this.length} and ${value.length}`
                );
            }

            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] *= value.coordinates[index];
            });
        } else {
            throw new Error(
                `multiply(): Type of value must be MagikVector or number, got ${typeof value}`
            );
        }

        return this;
    }

    /**
     * Alias for the `multiply()` method
     *
     * @borrows MagikVector#multiply() as MagikVector#mult()
     * @param {MagikVector|number} value - scalar or Vector to use to multiply
     * @returns {MagikVector|number} - returns the current MagikVector instance
     */
    mult(value) {
        return this.multiply(value);
    }

    /**
     * Divides the current vector by the supplied scalar or Vector value
     *
     * @param {MagikVector|number} value - scalar or MagikVector to use to divide
     * @returns {MagikVector} - the divided MagikVector
     */
    divide(value) {
        if(typeof value === 'number') {
            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] /= value;
            });
        } else if(value instanceof MagikVector) {
            if(this.length !== value.length) {
                throw new Error(`divide(): Vectors must have the same number of coordinates, got ${this.length} and ${value.length}`);
            }

            this.coordinates.forEach((coordinate, index) => {
                this.coordinates[index] /= value.coordinates[index];
            });
        } else {
            throw new Error(
                `divide(): Type of value must be MagikVector or number, got ${typeof value}`
            );
        }

        return this;
    }

    /**
     * Alias for the `divide()` method
     *
     * @borrows MagikVector#divide() as MagikVector#div()
     * @param {MagikVector|number} value - scalar or MagikVector to use to divide
     * @returns {MagikVector} - the divided MagikVector
     */
    div(value) {
        return this.divide(value);
    }

    /**
     * Returns a clone of the current vector, i.e. creates a new Vector Object
     * with the same coordinates as the current MagikVector instance.
     *
     * @returns {MagikVector} - returns a clone of the current instance
     */
    clone() {
        return new MagikVector(...this.coordinates);
    }

    /**
     * Returns the magnitude squared
     *
     * @returns {number} - the magnitude squared value of the current instance
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
     * @returns {number} - the magnitude of the current instance
     */
    getMagnitude() {
        return Math.sqrt(this.getMagnitudeSquared());
    }

    /**
     * Returns the magnitude of the vector
     *
     * @borrows MagikVector#getMagnitude() as MagikVector#getMag()
     * @returns {number} - the magnitude of the current instance
     */
    getMag() {
        return this.getMagnitude();
    }

    /**
     * Sets the magnitude of the Vector and returns the changed vector
     *
     * @param {number} magnitude - magnitude to set this instance to
     * @returns {MagikVector} - the adjusted MagikVector instance
     */
    setMagnitude(magnitude) {
        this.normalise();
        this.multiply(magnitude);

        return this;
    }

    /**
     * Alias for the `setMagnitude()` method
     *
     * @borrows MagikVector#setMagnitude() as MagikVector#setMag()
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
     * @borrows MagikVector#getDirection() as MagikVector#getDir()
     * @returns {number} - the angle of rotation in radians
     */
    getDir() {
        return this.getDirection();
    }

    /**
     * Returns the calculated distance from the current Vector to the supplied one
     *
     * @param {MagikVector} vector - the vector to calculate the distance to
     * @returns {number} - the distance between the two vectors
     */
    getDistanceTo(vector) {
        if(!(vector instanceof MagikVector)) {
            throw new Error(
                `getDistanceTo(): type must by MagikVector, got ${typeof vector}`
            );
        }

        return vector.clone().subtract(this).getMagnitude();
    }

    /**
     * Alias for the getDistanceTo() method
     *
     * @borrows MagikVector#getDistanceTo() as MagikVector#getDistance()
     * @param {MagikVector} vector - the vector to calculate the distance to
     * @returns {number} - the distance between the two vectors
     */
    getDistance(vector) {
        return this.getDistanceTo(vector);
    }

    /**
     * Alias for the getDistanceTo() method
     *
     * @alias this.getDistanceTo
     * @borrows MagikVector#getDistanceTo() as MagikVector#getDist()
     * @param {MagikVector} vector - the vector to calculate the distance to
     * @returns {number} - the distance between the two vectors
     */
    getDist(vector) {
        return this.getDistanceTo(vector);
    }

    /**
     * Returns the dot Product of the current Vector with the supplied Vector,
     * throws an Error if both Vectors do not have the same number of
     * coordinates
     *
     * @param {MagikVector} vector - vector to calculate the dot product with
     * @returns {number} - the calculated dot product
     */
    dotProduct(vector) {
        if(!(vector instanceof MagikVector)) {
            throw new Error(
                `dotProduct(): type must by MagikVector, got ${typeof vector}`
            );
        }

        if(this.length !== vector.length) {
            throw new RangeError(
                `dotProduct(): Vectors must have the same number of coordinates, got ${this.length} and ${vector.length}`
            );
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
     * @borrows MagikVector#dotProduct() as MagikVector#dot()
     * @param {MagikVector} vector - vector to calculate the dot product with
     * @returns {number} - the calculated dot product
     */
    dot(vector) {
        return this.dotProduct(vector);
    }

    /**
     * Normalises the Vector
     *
     * @returns {MagikVector} - the normalised Vector
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
     * @borrows MagikVector#normalise() as MagikVector#normalize()
     * @returns {MagikVector} - the normalised Vector
     */
    normalize() {
        return this.normalise();
    }

    /**
     * Limits the magnitude of the Vector to the supplied scalar value
     *
     * @param {number} scalar - value to limit by
     * @returns {MagikVector} - the current instance
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
     * @returns {string} - a string representation of the Vector
     */
    toString() {
        return `(${this.coordinates.join(', ')})`;
    }
}

if(typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = MagikVector;
}
