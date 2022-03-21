---
sidebar_position: 1
---

# getFetchDataActor

**This allows batch processing of JSON requests,Easy to load large-scale geojson data files** 


## Example

```js
//detail https://github.com/maptalks/maptalks.three/blob/master/demo/fetchdatatest.html
 import {getFetchDataActor} from 'maptalks.three';

 const fetDataActor = getFetchDataActor();

 for (let i = 100; i >= 0; i--) {
        const url = maptalks.Util.getAbsoluteURL(`./data/ny/${i}.json`);
        fetDataActor.send(url, [], (error, arrayBuffer) => {
                    // console.log(data);
        const text = arrayBufferToString(arrayBuffer);

        //do some things
}

var textDecoder = new TextDecoder("utf-8");
//arraybuffer to text
function arrayBufferToString(buffer) {
     const array = new Uint8Array(buffer);
     return textDecoder.decode(array);
}

```