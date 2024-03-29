[![CircleCI](https://circleci.com/gh/magikMaker/magik-vector.svg?style=svg)](https://circleci.com/gh/magikMaker/magik-vector)
[![NPM version](https://badge.fury.io/js/magik-vector.svg)](http://badge.fury.io/js/magik-vector)
[![npm module downloads](http://img.shields.io/npm/dt/magik-vector.svg)](https://www.npmjs.org/package/magik-vector)

<a name="module_MagikVector"></a>

## MagikVector
Zero dependency class for handling 2 dimensional, 3 dimensional or n dimensional
vectors.

**Example**  
```js
// import the vector and create a new vector object
const MagikVector = import 'MagikVector';
const vector = new MagikVector();

// initialise a new vector with `x` and `y` coordinates
const vector2D = new MagikVector(12, 42);

// it's also possible to add a `z` coordinate
const vector3D = new MagikVector(15, 12, 71);

// or even more coordinates
const multiDimensional = new MagikVector(15, 12, 71, 7, 38, 0);

// create a MagikVector from an Array
const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
const multiDimensional = new MagikVector(...myCoordinates);
```

* [MagikVector](#module_MagikVector)
    * [~MagikVector](#module_MagikVector..MagikVector)
        * [new MagikVector([...args])](#new_module_MagikVector..MagikVector_new)
        * _instance_
            * [.length](#module_MagikVector..MagikVector+length) ⇒ <code>number</code>
            * [.x](#module_MagikVector..MagikVector+x) ⇒ <code>number</code>
            * [.y](#module_MagikVector..MagikVector+y) ⇒ <code>number</code>
            * [.z](#module_MagikVector..MagikVector+z) ⇒ <code>number</code>
            * [.x](#module_MagikVector..MagikVector+x) ⇒ <code>void</code>
            * [.y](#module_MagikVector..MagikVector+y) ⇒ <code>void</code>
            * [.z](#module_MagikVector..MagikVector+z) ⇒ <code>void</code>
            * [.getX()](#module_MagikVector..MagikVector+getX) ⇒ <code>number</code>
            * [.getY()](#module_MagikVector..MagikVector+getY) ⇒ <code>number</code>
            * [.getZ()](#module_MagikVector..MagikVector+getZ) ⇒ <code>number</code>
            * [.getCoordinate(index)](#module_MagikVector..MagikVector+getCoordinate) ⇒ <code>number</code> \| <code>undefined</code>
            * [.getCoord(index)](#module_MagikVector..MagikVector+getCoord) ⇒ <code>number</code> \| <code>undefined</code>
            * [.setX(value)](#module_MagikVector..MagikVector+setX) ⇒ <code>MagikVector</code>
            * [.setY(value)](#module_MagikVector..MagikVector+setY) ⇒ <code>MagikVector</code>
            * [.setZ(value)](#module_MagikVector..MagikVector+setZ) ⇒ <code>MagikVector</code>
            * [.setCoordinate(index, value)](#module_MagikVector..MagikVector+setCoordinate) ⇒ <code>MagikVector</code>
            * [.setCoord(index, value)](#module_MagikVector..MagikVector+setCoord) ⇒ <code>MagikVector</code>
            * [.add(vector)](#module_MagikVector..MagikVector+add) ⇒ <code>MagikVector</code>
            * [.subtract(vector)](#module_MagikVector..MagikVector+subtract) ⇒ <code>MagikVector</code>
            * [.sub(vector)](#module_MagikVector..MagikVector+sub) ⇒ <code>MagikVector</code>
            * [.multiply(value)](#module_MagikVector..MagikVector+multiply) ⇒ <code>MagikVector</code> \| <code>number</code>
            * [.mult(value)](#module_MagikVector..MagikVector+mult) ⇒ <code>MagikVector</code> \| <code>number</code>
            * [.divide(value)](#module_MagikVector..MagikVector+divide) ⇒ <code>MagikVector</code>
            * [.div(value)](#module_MagikVector..MagikVector+div) ⇒ <code>MagikVector</code>
            * [.clone()](#module_MagikVector..MagikVector+clone) ⇒ <code>MagikVector</code>
            * [.getMagnitudeSquared()](#module_MagikVector..MagikVector+getMagnitudeSquared) ⇒ <code>number</code>
            * [.getMagnitude()](#module_MagikVector..MagikVector+getMagnitude) ⇒ <code>number</code>
            * [.getMag()](#module_MagikVector..MagikVector+getMag) ⇒ <code>number</code>
            * [.setMagnitude(magnitude)](#module_MagikVector..MagikVector+setMagnitude) ⇒ <code>MagikVector</code>
            * [.setMag(magnitude)](#module_MagikVector..MagikVector+setMag) ⇒ <code>MagikVector</code>
            * [.getDirection()](#module_MagikVector..MagikVector+getDirection) ⇒ <code>number</code>
            * [.getDir()](#module_MagikVector..MagikVector+getDir) ⇒ <code>number</code>
            * [.getDistanceTo(vector)](#module_MagikVector..MagikVector+getDistanceTo) ⇒ <code>number</code>
            * [.getDistance(vector)](#module_MagikVector..MagikVector+getDistance) ⇒ <code>number</code>
            * [.dotProduct(vector)](#module_MagikVector..MagikVector+dotProduct) ⇒ <code>number</code>
            * [.dot(vector)](#module_MagikVector..MagikVector+dot) ⇒ <code>number</code>
            * [.normalise()](#module_MagikVector..MagikVector+normalise) ⇒ <code>MagikVector</code>
            * [.normalize()](#module_MagikVector..MagikVector+normalize) ⇒ <code>MagikVector</code>
            * [.limit(scalar)](#module_MagikVector..MagikVector+limit) ⇒ <code>MagikVector</code>
            * [.toString()](#module_MagikVector..MagikVector+toString) ⇒ <code>string</code>
        * _static_
            * [.random([dimensions])](#module_MagikVector..MagikVector.random) ⇒ <code>MagikVector</code>
            * [.rand([dimensions])](#module_MagikVector..MagikVector.rand) ⇒ <code>MagikVector</code>
            * [.random2D()](#module_MagikVector..MagikVector.random2D) ⇒ <code>MagikVector</code>
            * [.random3D()](#module_MagikVector..MagikVector.random3D) ⇒ <code>MagikVector</code>
            * [.randomInteger([...args])](#module_MagikVector..MagikVector.randomInteger) ⇒ <code>number</code>
            * [.randomInt([...args])](#module_MagikVector..MagikVector.randomInt) ⇒ <code>number</code>
            * [.toRadians(degrees)](#module_MagikVector..MagikVector.toRadians) ⇒ <code>number</code>
            * [.toDegrees(radians)](#module_MagikVector..MagikVector.toDegrees) ⇒ <code>number</code>

<a name="module_MagikVector..MagikVector"></a>

### MagikVector~MagikVector
**Kind**: inner class of [<code>MagikVector</code>](#module_MagikVector)  

* [~MagikVector](#module_MagikVector..MagikVector)
    * [new MagikVector([...args])](#new_module_MagikVector..MagikVector_new)
    * _instance_
        * [.length](#module_MagikVector..MagikVector+length) ⇒ <code>number</code>
        * [.x](#module_MagikVector..MagikVector+x) ⇒ <code>number</code>
        * [.y](#module_MagikVector..MagikVector+y) ⇒ <code>number</code>
        * [.z](#module_MagikVector..MagikVector+z) ⇒ <code>number</code>
        * [.x](#module_MagikVector..MagikVector+x) ⇒ <code>void</code>
        * [.y](#module_MagikVector..MagikVector+y) ⇒ <code>void</code>
        * [.z](#module_MagikVector..MagikVector+z) ⇒ <code>void</code>
        * [.getX()](#module_MagikVector..MagikVector+getX) ⇒ <code>number</code>
        * [.getY()](#module_MagikVector..MagikVector+getY) ⇒ <code>number</code>
        * [.getZ()](#module_MagikVector..MagikVector+getZ) ⇒ <code>number</code>
        * [.getCoordinate(index)](#module_MagikVector..MagikVector+getCoordinate) ⇒ <code>number</code> \| <code>undefined</code>
        * [.getCoord(index)](#module_MagikVector..MagikVector+getCoord) ⇒ <code>number</code> \| <code>undefined</code>
        * [.setX(value)](#module_MagikVector..MagikVector+setX) ⇒ <code>MagikVector</code>
        * [.setY(value)](#module_MagikVector..MagikVector+setY) ⇒ <code>MagikVector</code>
        * [.setZ(value)](#module_MagikVector..MagikVector+setZ) ⇒ <code>MagikVector</code>
        * [.setCoordinate(index, value)](#module_MagikVector..MagikVector+setCoordinate) ⇒ <code>MagikVector</code>
        * [.setCoord(index, value)](#module_MagikVector..MagikVector+setCoord) ⇒ <code>MagikVector</code>
        * [.add(vector)](#module_MagikVector..MagikVector+add) ⇒ <code>MagikVector</code>
        * [.subtract(vector)](#module_MagikVector..MagikVector+subtract) ⇒ <code>MagikVector</code>
        * [.sub(vector)](#module_MagikVector..MagikVector+sub) ⇒ <code>MagikVector</code>
        * [.multiply(value)](#module_MagikVector..MagikVector+multiply) ⇒ <code>MagikVector</code> \| <code>number</code>
        * [.mult(value)](#module_MagikVector..MagikVector+mult) ⇒ <code>MagikVector</code> \| <code>number</code>
        * [.divide(value)](#module_MagikVector..MagikVector+divide) ⇒ <code>MagikVector</code>
        * [.div(value)](#module_MagikVector..MagikVector+div) ⇒ <code>MagikVector</code>
        * [.clone()](#module_MagikVector..MagikVector+clone) ⇒ <code>MagikVector</code>
        * [.getMagnitudeSquared()](#module_MagikVector..MagikVector+getMagnitudeSquared) ⇒ <code>number</code>
        * [.getMagnitude()](#module_MagikVector..MagikVector+getMagnitude) ⇒ <code>number</code>
        * [.getMag()](#module_MagikVector..MagikVector+getMag) ⇒ <code>number</code>
        * [.setMagnitude(magnitude)](#module_MagikVector..MagikVector+setMagnitude) ⇒ <code>MagikVector</code>
        * [.setMag(magnitude)](#module_MagikVector..MagikVector+setMag) ⇒ <code>MagikVector</code>
        * [.getDirection()](#module_MagikVector..MagikVector+getDirection) ⇒ <code>number</code>
        * [.getDir()](#module_MagikVector..MagikVector+getDir) ⇒ <code>number</code>
        * [.getDistanceTo(vector)](#module_MagikVector..MagikVector+getDistanceTo) ⇒ <code>number</code>
        * [.getDistance(vector)](#module_MagikVector..MagikVector+getDistance) ⇒ <code>number</code>
        * [.dotProduct(vector)](#module_MagikVector..MagikVector+dotProduct) ⇒ <code>number</code>
        * [.dot(vector)](#module_MagikVector..MagikVector+dot) ⇒ <code>number</code>
        * [.normalise()](#module_MagikVector..MagikVector+normalise) ⇒ <code>MagikVector</code>
        * [.normalize()](#module_MagikVector..MagikVector+normalize) ⇒ <code>MagikVector</code>
        * [.limit(scalar)](#module_MagikVector..MagikVector+limit) ⇒ <code>MagikVector</code>
        * [.toString()](#module_MagikVector..MagikVector+toString) ⇒ <code>string</code>
    * _static_
        * [.random([dimensions])](#module_MagikVector..MagikVector.random) ⇒ <code>MagikVector</code>
        * [.rand([dimensions])](#module_MagikVector..MagikVector.rand) ⇒ <code>MagikVector</code>
        * [.random2D()](#module_MagikVector..MagikVector.random2D) ⇒ <code>MagikVector</code>
        * [.random3D()](#module_MagikVector..MagikVector.random3D) ⇒ <code>MagikVector</code>
        * [.randomInteger([...args])](#module_MagikVector..MagikVector.randomInteger) ⇒ <code>number</code>
        * [.randomInt([...args])](#module_MagikVector..MagikVector.randomInt) ⇒ <code>number</code>
        * [.toRadians(degrees)](#module_MagikVector..MagikVector.toRadians) ⇒ <code>number</code>
        * [.toDegrees(radians)](#module_MagikVector..MagikVector.toDegrees) ⇒ <code>number</code>

<a name="new_module_MagikVector..MagikVector_new"></a>

#### new MagikVector([...args])
Initialise a new Vector instance with coordinates as arguments, either
supply the individual coordinates or supply an array with number values.


| Param | Type | Description |
| --- | --- | --- |
| [...args] | <code>number</code> \| <code>array</code> | optional coordinate list or Array |

**Example**  
```js
// empty vector
const vector = new MagikVector();

// two dimensional
const vector2D = new MagikVector(12, 15);

// three dimensional
const vector3D = new MagikVector(12, 15, 71);

// multi dimensional
const multiDimensional = new MagikVector(3, 4, 5, 99, 12, 14, 42);

// from Array
const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
const multiDimensional = new MagikVector(...myCoordinates);
```
<a name="module_MagikVector..MagikVector+length"></a>

#### magikVector.length ⇒ <code>number</code>
Returns the length of the coordinates array, in other words the number
of dimensions of this MagikVector

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the number of dimensions of this MagikVector  
<a name="module_MagikVector..MagikVector+x"></a>

#### magikVector.x ⇒ <code>number</code>
Returns the `x` coordinate of this Vector.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the `x` coordinate of this MagikVector instance  
**Example**  
```js
const vector = new MagikVector(3, 4, 5);
const xCoordinate = vector.x; // returns 3
```
<a name="module_MagikVector..MagikVector+y"></a>

#### magikVector.y ⇒ <code>number</code>
Returns the `y` coordinate of this Vector.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the `y` coordinate of this MagikVector instance  
**Example**  
```js
const vector = new MagikVector(3, 4, 5);
const yCoordinate = vector.y; // returns 4
```
<a name="module_MagikVector..MagikVector+z"></a>

#### magikVector.z ⇒ <code>number</code>
Returns the `z` coordinate of this Vector.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the `z` coordinate of this MagikVector instance  
**Example**  
```js
const vector = new MagikVector(3, 4, 5);
const zCoordinate = vector.z; // returns 5
```
<a name="module_MagikVector..MagikVector+x"></a>

#### magikVector.x ⇒ <code>void</code>
Sets the `x` coordinate of this MagikVector instance.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set as x coordinate |

**Example**  
```js
const vector = new MagikVector();
const vector.x = 3;
```
<a name="module_MagikVector..MagikVector+y"></a>

#### magikVector.y ⇒ <code>void</code>
Sets  the `y` coordinate of this MagikVector instance.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set as y coordinate |

**Example**  
```js
const vector = new MagikVector();
const vector.y = 4;
```
<a name="module_MagikVector..MagikVector+z"></a>

#### magikVector.z ⇒ <code>void</code>
Sets the `z` coordinate of this MagikVector instance.

**Kind**: instance property of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set as z coordinate |

**Example**  
```js
const vector = new MagikVector();
const vector.z = 5;
```
<a name="module_MagikVector..MagikVector+getX"></a>

#### magikVector.getX() ⇒ <code>number</code>
Returns the `x` coordinate of this MagikVector instance.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the x coordinate  
<a name="module_MagikVector..MagikVector+getY"></a>

#### magikVector.getY() ⇒ <code>number</code>
Returns the `y` coordinate of this MagikVector instance.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - the x coordinate  
<a name="module_MagikVector..MagikVector+getZ"></a>

#### magikVector.getZ() ⇒ <code>number</code>
Returns the `z` coordinate of this MagikVector instance.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - the x coordinate  
<a name="module_MagikVector..MagikVector+getCoordinate"></a>

#### magikVector.getCoordinate(index) ⇒ <code>number</code> \| <code>undefined</code>
Returns the coordinate at the specified index, consider using:
`const x = vector.x` or `const x = vector.getX()`,
`const y = vector.y` or `const y = vector.getY()`,
`const z = vector.z` or `const z = vector.getZ()`,
to retrieve the coordinates of a 2D or 3D vector.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> \| <code>undefined</code> - - value at the specified index or undefined  
**See**

- MagikVector.x
- MagikVector.getX()
- MagikVector.y
- MagikVector.getY()
- MagikVector.z
- MagikVector.getZ()


| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="module_MagikVector..MagikVector+getCoord"></a>

#### magikVector.getCoord(index) ⇒ <code>number</code> \| <code>undefined</code>
Alias of MagikVector.getCoordinate()

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> \| <code>undefined</code> - - value at the specified index or undefined  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="module_MagikVector..MagikVector+setX"></a>

#### magikVector.setX(value) ⇒ <code>MagikVector</code>
Sets the `x` coordinate of this MagikVector and returns the instance
so it can be chained.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the instance itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set |

**Example** *(set x coordinate and chain)*  
```js
const vector = new MagikVector();
vector.setX(33).setY(44).setZ(55);
```
<a name="module_MagikVector..MagikVector+setY"></a>

#### magikVector.setY(value) ⇒ <code>MagikVector</code>
Returns the `y` coordinate of this MagikVector and returns the instance
so it can be chained.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the instance itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set |

**Example** *(set y coordinate and chain)*  
```js
const vector = new MagikVector();
vector.setX(33).setY(44).setZ(55);
```
<a name="module_MagikVector..MagikVector+setZ"></a>

#### magikVector.setZ(value) ⇒ <code>MagikVector</code>
Returns the `z` coordinate of this MagikVector and returns the instance
so it can be chained.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the instance itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to set |

**Example** *(set z coordinate and chain)*  
```js
const vector = new MagikVector();
vector.setX(33).setY(44).setZ(55);
```
<a name="module_MagikVector..MagikVector+setCoordinate"></a>

#### magikVector.setCoordinate(index, value) ⇒ <code>MagikVector</code>
Sets the coordinate at the specified index, consider using
`vector.x = 3` or `vector.setX()`,
`vector.y = 4` or `vector.setY()`,
`vector.z = 5` or `vector.setZ()`,
to set the coordinates of a 2D or 3D vector.
Returns the instance so it's possible to chain this method.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - the object itself  
**See**

- MagikVector.x
- MagikVector.setX()
- MagikVector.y
- MagikVector.setY()
- MagikVector.z
- MagikVector.setZ()


| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | the  index to set the value for |
| value | <code>number</code> | the value to set |

<a name="module_MagikVector..MagikVector+setCoord"></a>

#### magikVector.setCoord(index, value) ⇒ <code>MagikVector</code>
Alias of MagikVector.setCoordinate()

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - the object itself  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | the  index to set the value for |
| value | <code>number</code> | the value to set |

<a name="module_MagikVector..MagikVector+add"></a>

#### magikVector.add(vector) ⇒ <code>MagikVector</code>
Adds given vector to the current vector, i.e. adds the individual
coordinates.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the current MagikVector instance  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | vector to add to current instance |

<a name="module_MagikVector..MagikVector+subtract"></a>

#### magikVector.subtract(vector) ⇒ <code>MagikVector</code>
subtracts given vector from the current vector, i.e. subtracts the
individual coordinates.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - returns the current Vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | vector to subtract from current instance |

<a name="module_MagikVector..MagikVector+sub"></a>

#### magikVector.sub(vector) ⇒ <code>MagikVector</code>
Alias of MagikVector.substract()

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - returns the current Vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | vector to subtract from current instance |

<a name="module_MagikVector..MagikVector+multiply"></a>

#### magikVector.multiply(value) ⇒ <code>MagikVector</code> \| <code>number</code>
Multiplies the current Vector by value, you can supply either a scalar value
or a Vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> \| <code>number</code> - - returns the current MagikVector instance  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>MagikVector</code> \| <code>number</code> | scalar or Vector to use to multiply |

<a name="module_MagikVector..MagikVector+mult"></a>

#### magikVector.mult(value) ⇒ <code>MagikVector</code> \| <code>number</code>
Alias for the `multiply()` method

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> \| <code>number</code> - - returns the current MagikVector instance  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>MagikVector</code> \| <code>number</code> | scalar or Vector to use to multiply |

<a name="module_MagikVector..MagikVector+divide"></a>

#### magikVector.divide(value) ⇒ <code>MagikVector</code>
Divides the current vector by the supplied scalar or Vector value

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the divided MagikVector  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>MagikVector</code> \| <code>number</code> | scalar or MagikVector to use to divide |

<a name="module_MagikVector..MagikVector+div"></a>

#### magikVector.div(value) ⇒ <code>MagikVector</code>
Alias for the `divide()` method

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the divided MagikVector  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>MagikVector</code> \| <code>number</code> | scalar or MagikVector to use to divide |

<a name="module_MagikVector..MagikVector+clone"></a>

#### magikVector.clone() ⇒ <code>MagikVector</code>
Returns a clone of the current vector, i.e. creates a new Vector Object
with the same coordinates as the current MagikVector instance.

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - returns a clone of the current instance  
<a name="module_MagikVector..MagikVector+getMagnitudeSquared"></a>

#### magikVector.getMagnitudeSquared() ⇒ <code>number</code>
Returns the magnitude squared

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the magnitude squared value of the current instance  
<a name="module_MagikVector..MagikVector+getMagnitude"></a>

#### magikVector.getMagnitude() ⇒ <code>number</code>
Returns the magnitude of the vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the magnitude of the current instance  
<a name="module_MagikVector..MagikVector+getMag"></a>

#### magikVector.getMag() ⇒ <code>number</code>
Returns the magnitude of the vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the magnitude of the current instance  
<a name="module_MagikVector..MagikVector+setMagnitude"></a>

#### magikVector.setMagnitude(magnitude) ⇒ <code>MagikVector</code>
Sets the magnitude of the Vector and returns the changed vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the adjusted MagikVector instance  

| Param | Type | Description |
| --- | --- | --- |
| magnitude | <code>number</code> | magnitude to set this instance to |

<a name="module_MagikVector..MagikVector+setMag"></a>

#### magikVector.setMag(magnitude) ⇒ <code>MagikVector</code>
Alias for the `setMagnitude()` method

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - the adjusted MagikVector object  

| Param | Type |
| --- | --- |
| magnitude | <code>number</code> | 

<a name="module_MagikVector..MagikVector+getDirection"></a>

#### magikVector.getDirection() ⇒ <code>number</code>
Calculates the direction, i.e. the angle of rotation for this vector
(only for 2D vectors)

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - the angle of rotation in radians  
<a name="module_MagikVector..MagikVector+getDir"></a>

#### magikVector.getDir() ⇒ <code>number</code>
Alias for the getDirection() method

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the angle of rotation in radians  
<a name="module_MagikVector..MagikVector+getDistanceTo"></a>

#### magikVector.getDistanceTo(vector) ⇒ <code>number</code>
Returns the calculated distance from the current Vector to the supplied one

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the distance between the two vectors  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | the vector to calculate the distance to |

<a name="module_MagikVector..MagikVector+getDistance"></a>

#### magikVector.getDistance(vector) ⇒ <code>number</code>
Alias for the getDistanceTo() method

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the distance between the two vectors  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | the vector to calculate the distance to |

<a name="module_MagikVector..MagikVector+dotProduct"></a>

#### magikVector.dotProduct(vector) ⇒ <code>number</code>
Returns the dot Product of the current Vector with the supplied Vector,
throws an Error if both Vectors do not have the same number of
coordinates

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the calculated dot product  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | vector to calculate the dot product with |

<a name="module_MagikVector..MagikVector+dot"></a>

#### magikVector.dot(vector) ⇒ <code>number</code>
Alias for dotProduct()

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the calculated dot product  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>MagikVector</code> | vector to calculate the dot product with |

<a name="module_MagikVector..MagikVector+normalise"></a>

#### magikVector.normalise() ⇒ <code>MagikVector</code>
Normalises the Vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the normalised Vector  
<a name="module_MagikVector..MagikVector+normalize"></a>

#### magikVector.normalize() ⇒ <code>MagikVector</code>
Alias of normalise()

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the normalised Vector  
<a name="module_MagikVector..MagikVector+limit"></a>

#### magikVector.limit(scalar) ⇒ <code>MagikVector</code>
Limits the magnitude of the Vector to the supplied scalar value

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - the current instance  

| Param | Type | Description |
| --- | --- | --- |
| scalar | <code>number</code> | value to limit by |

<a name="module_MagikVector..MagikVector+toString"></a>

#### magikVector.toString() ⇒ <code>string</code>
Returns the string representation of the Vector

**Kind**: instance method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>string</code> - - a string representation of the Vector  
<a name="module_MagikVector..MagikVector.random"></a>

#### MagikVector.random([dimensions]) ⇒ <code>MagikVector</code>
Returns a new MagikVector with random coordinates, defaults to
a normalised 3D vector

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [dimensions] | <code>number</code> | <code>3</code> | optional number of dimensions to use |

<a name="module_MagikVector..MagikVector.rand"></a>

#### MagikVector.rand([dimensions]) ⇒ <code>MagikVector</code>
Alias for `random()`

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - instance of the MagikVector Class  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [dimensions] | <code>number</code> | <code>3</code> | optional number of dimensions to use |

<a name="module_MagikVector..MagikVector.random2D"></a>

#### MagikVector.random2D() ⇒ <code>MagikVector</code>
Returns a new vector with two random coordinates

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - instance of MagikVector with two random values  
<a name="module_MagikVector..MagikVector.random3D"></a>

#### MagikVector.random3D() ⇒ <code>MagikVector</code>
Returns a new vector with three random coordinates, basically this is an
alias for calling MagikVector.random() without any arguments.

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>MagikVector</code> - - instance of MagikVector with three random values  
<a name="module_MagikVector..MagikVector.randomInteger"></a>

#### MagikVector.randomInteger([...args]) ⇒ <code>number</code>
Returns a random integer optionally bound by the minimum(included) and
maximum (included) arguments. If only one argument is supplied, it is
the maximum number (same as `MagikVector.randomInteger(0, maximum)`)

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the random number  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | <code>Object</code> |  |
| [args.minimum] | <code>number</code> | optional minimum value |
| [ars.maximum] | <code>number</code> | optional maximum value |

<a name="module_MagikVector..MagikVector.randomInt"></a>

#### MagikVector.randomInt([...args]) ⇒ <code>number</code>
Returns a random integer optionally bound by the minimum(included) and
maximum (included) arguments. If only one argument is supplied, it is
the maximum number (same as `MagikVector.randomInteger(0, maximum)`)

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the random number  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | <code>Object</code> |  |
| [args.minimum] | <code>number</code> | optional minimum value |
| [ars.maximum] | <code>number</code> | optional maximum value |

<a name="module_MagikVector..MagikVector.toRadians"></a>

#### MagikVector.toRadians(degrees) ⇒ <code>number</code>
Converts degrees to radians

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the converted degrees as radians  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> | the number of degrees to convert |

**Example** *(Convert degrees to Radians)*  
```js
radians = MagikVector.toRadians(degrees);
```
<a name="module_MagikVector..MagikVector.toDegrees"></a>

#### MagikVector.toDegrees(radians) ⇒ <code>number</code>
Converts radians to degrees

**Kind**: static method of [<code>MagikVector</code>](#module_MagikVector..MagikVector)  
**Returns**: <code>number</code> - - the converted radians as degrees  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | the number of radians to convert |

**Example** *(Convert Radian to degrees)*  
```js
degrees = MagikVector.toDegrees(radians);
```

# License

Copyright (C) 2016 - 2021 Bjørn Wikkeling (magikMaker)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
THE AUTHORS OR COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Except as contained in this notice, the name(s) of the above copyright holders
shall not be used in advertising or otherwise to promote the sale, use or other
dealings in this Software without prior written authorization.
