MagikVector
===========
Vector class for handling two dimensional, three dimensional or n dimensional vectors
 
 
API
====
The API of MagikVector is documented below, some methods are chainable and some 
methods have one or more aliases, both

add
---
Adds given vector to the current vector, i.e. adds the individual coordinates.

clone
-----
Returns a clone of the current vector, i.e. creates a new Vector Object with the same coordinates as the current vector
     

constructor(...coordinates)
---------------------------
Initialise a new Vector instance with coordinates as arguments
```js
const vector2D = new MagikVector(12, 15);
```

divide
------
Divides the current vector by the supplied scallar or Vector value

Alias: `div()`
	
dotProduct
----------
Returns the dot Product of the current Vector with the supplied Vector, 
throws an Error if both Vectors do not have the same number of coordinates

Alias: `dot()`
    
getCoordinate(index)
--------------------
Returns the coordinate at the specified index, consider using getX(), getY() 
and getZ() to retrieve the coordinates of a 2D or 3D vector
     
getMagnitude()
--------------
Returns the magnitude of the vector

getMagnitudeSquared
-------------------

getX
----
Returns the `x` coordinate of this Vector

getY
----
Returns the `y` coordinate of this Vector

getZ
----
Returns the `z` coordinate of this Vector

limit
-----
Limits the magnitude of the Vector to the supplied scalar value

multiply
--------
Multiplies the current Vector by value, you can supply either a scalar value 
or a Vector


normalise
---------
Normalises the Vector

random
------
Returns a new Vector with random coordinates, defaults to a 3D vector

setMagnitude
------------
Sets the magnitude of the Vector and returns the changed vector

subtract
--------
subtracts given vector from the current vector, i.e. subtracts the individual 
coordinates.

Alias: `sub()`
  
toString  
--------
Returns the string representation of the Vector

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

 
