MagikVector
===========
Vector class for 2D, 3D and multi dimensional vector calculations.
 
 
API
====
The API of MagikVector is documented below, some methods are chainable and some 
methods have one or more aliases.

add()
-----
Adds given vector to the current vector, i.e. adds the individual coordinates.

Chainable: yes

clone()
-------
Returns a clone of the current vector, i.e. creates a new Vector Object with the same coordinates as the current vector
  
Chainable: yes     

constructor(...coordinates)
---------------------------
Initialise a new Vector instance with coordinates as arguments, either
supply the individual coordinates or supply an array with number values.

```js
// two dimensional
const vector2D = new MagikVector(12, 15);

// three dimensional
const vector3D = new MagikVector(12, 15, 71);

// multi dimensional
const multiDmensional = new MagikVector(3, 4, 5, 99, 12, 14, 42);

// from Array
const myCoordinates = [4, 6, 28, 5, 33, 12, 8, 22, 785, 38, 56];
const multiDimensional = new MagikVector(...myCoordinates);
```

divide()
--------
Divides the current vector by the supplied scallar or Vector value

Alias: `div()`   
Chainable: yes
	
dotProduct()
------------
Returns the dot Product of the current Vector with the supplied Vector, 
throws an Error if both Vectors do not have the same number of coordinates

Alias: `dot()`   
Chainable: yes
    
getCoordinate(index)
--------------------
Returns the coordinate at the specified index, consider using getX(), getY() 
and getZ() to retrieve the coordinates of a 2D or 3D vector

Alias: `getCoord(index)`   
Chainable: no

    /**
     * 
     *
     * @return {Number} the angle of rotation
     */
getDirection()
--------------
Calculates the direction, i.e. the angle of rotation for this vector 
(only for 2D vectors)

Alias: `getDir()`        
Chainable: no     

getDistanceTo()
---------------
Returns the calculated distance from the current Vector to the supplied one.

Chainable: no        
Aliases: `getDistance()`, `getDist()`   

getMagnitude()
--------------
Returns the magnitude of the vector

Chainable: no

getMagnitudeSquared()
---------------------
Returns the magnitude squared

Chainable: no

getX()
------
Returns the `x` coordinate of this Vector

Chainable: no

getY()
------
Returns the `y` coordinate of this Vector

Chainable: no

getZ()
------
Returns the `z` coordinate of this Vector

Chainable: no

limit()
-------
Limits the magnitude of the Vector to the supplied scalar value

Chainable: yes

multiply()
----------
Multiplies the current Vector by value, you can supply either a scalar value 
or a Vector

Chainable: yes

normalise()
-----------
Normalises the Vector

Alias: `normalize()`   
Chainable: yes

random()
--------
Returns a new Vector with random coordinates, defaults to a 3D vector

Chainable: no

setCoordinate(index, value)
---------------------------
Sets the coordinate at the specified index, consider using setX(), setY() 
and setZ() to set the coordinates of a 2D or 3D vector

Alias: `setCoord(index, value)`   
Chainable: yes

setMagnitude()
--------------
Sets the magnitude of the Vector and returns the changed vector

Chainable: yes

setX()
------
Sets the `x` coordinate of this Vector

Chainable: yes

setY()
------
Sets the `y` coordinate of this Vector

Chainable: yes

getZ()
------
Sets the `z` coordinate of this Vector

Chainable: yes

subtract()
----------
subtracts given vector from the current vector, i.e. subtracts the individual 
coordinates.

Alias: `sub()`      
Chainable: yes
  
toString()  
----------
Returns the string representation of the Vector

Chainable: no

License
=======

Copyright (C) 2016 Bjørn Wikkeling (magikMaker)


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

 
