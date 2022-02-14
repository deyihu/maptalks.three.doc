---
sidebar_position: 1
---

# MergedMixin

**This is for Merge Mesh. When there is a large amount of data, you may need to merge mesh. At this time, you need to [MergedMixin](https://github.com/maptalks/maptalks.three/blob/master/src/MergedMixin.ts)** 

```ts
import {BaseObject,MergedMixin} from 'maptalks.three`;
//custom TestBaseObject Merge BaseObject
class TestBaseObject extends MergedMixin(BaseObject){
    constructor(.....){
        ........
    }

    .......
}

```

## properties
* _colorMap `color map`
* _faceMap `geometries face map`
* _baseObjects `baseobjects`
* _datas `data list`
* _geometriesAttributes `geometries attributes map,uv,position,normal....`
* _geometryCache
* faceIndex `face index`
* index `data index`


## Methods
* _initBaseObjectsEvent(baseobjects) `proxy all baseobject events`
  * baseobjects `Array[BaseObject]`
  * return  `this`


* _setPickObject3d() `set pick object3d for gpu pick`
  * return  `this`


* _init() `Listen for baseobject add/remove events for add/remove pickobject3d`
  * return  `this`
```ts
        _init(): void {
            const pick = this.getLayer().getPick();
            this.on('add', () => {
                pick.add(this.pickObject3d);
            });
            this.on('remove', () => {
                pick.remove(this.pickObject3d);
            });
        }  
```

## Example
[custom-mergedmixin](https://maptalks.org/maptalks.three/demo/custom-mergedmixin.html)
