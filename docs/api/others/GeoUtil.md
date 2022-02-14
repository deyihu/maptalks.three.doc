---
sidebar_position: 1
---

# GeoUtil

**Provides a simple Geo  method** 


## Methods
* distance(coord1,coord2) 
  * coord1 `Coordinates`
  * coord2 `Coordinates`
  * return  `Number`
```js
const dis=GeoUtil.distance([120,31],[122,32]);

```



* lineLength(coords) 
  * coords `maptalks.LineString|Array<Coordinates>`
  * return  `Number`
```js
const dis=GeoUtil.lineLength([[120,31],[122,32],..........]);

```


* lineSlice(coords,lineChunkLength) 
  * coords `maptalks.LineString|Array<Coordinates>`
  * lineChunkLength `per line length`
  * return  `Array<Array<Coordinates>>`
```js
const lines=GeoUtil.lineLength([[120,31],[122,32]],100);

```