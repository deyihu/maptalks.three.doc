---
sidebar_position: 1
---

# MergeGeometryUtil

**Provides a simple geometries merge method** 


## Methods
* mergeBufferGeometries(geometries) `merge Buffer Geometries Attibutes. uv,position,normal,indices`
  * geometries `Array[Object]`
  * return  `THREE.BufferGeometry`
```js

const geometries = [];
for (let i = 0, len = 1000; i < len; i++) {
    ....
    geometries.push({
        position: position.array,
        normal: normal.array,
        uv: uv.array,
        indices: index.array
    });
}
const bufferGeometry=MergeGeometryUtil.mergeBufferGeometries(geometries);

```

## Example
[custom-mergedmixin](https://maptalks.org/maptalks.three/demo/custom-mergedmixin.html)
