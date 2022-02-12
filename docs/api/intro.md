---
sidebar_position: 1
---

# Start

**When using maptalks.three, you should be familiar with maptalks and three js. Let's start.**

## Install

You Can Use CDN Or NPM

### Tips
Maptalks.three base on [maptalks.js](https://github.com/maptalks/maptalks.js) and [three.js](https://github.com/mrdoob/three.js).
 So when you use it, you must introduce them. **Because three JS has poor compatibility. You may need to lock three JS version**

### CDN

```html
<script type="text/javascript" src="https://unpkg.com/three@0.104.0/build/three.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks.three/dist/maptalks.three.min.js"></script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/three@0.104.0/build/three.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks.three/dist/maptalks.three.min.js"></script>
```

### NPM

``` sh
 npm i maptalk.three
 
 #or

 yarn add maptalks.three
```
## Incompatible changes

 * three.js >=128  the default umd package is ES6
 * Starting from version 0.16.0, the default umd package is ES6,To fit the new version of three.js [about three umd package change](https://github.com/mrdoob/three.js/issues/22025)
 * If your running environment does not support ES6, we also provide ES5 version [maptalks.three.es5.js](https://cdn.jsdelivr.net/npm/maptalks.three/dist/maptalks.three.es5.js),This requires the version of three.js < = 127,

## Hello World

```html

<html>

<head>
    <title>shared webgl context by GroupGLLayer</title>
    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/three@0.104.0/build/three.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks.three@latest/dist/maptalks.three.js"></script>
    <style>
        html,
        body {
            margin: 0px;
            height: 100%;
            width: 100%;
        }

        #map {
            width: 100%;
            height: 100%;
            background-color: #000;
        }
    </style>
</head>

<body>
    <div id="map"></div>
    <script>

    var map = new maptalks.Map("map", {
            center: [108.95946422883344, 34.219415098713256],
            zoom: 19.4,
            pitch: 60,
            // bearing: 180,

            centerCross: true,
            doubleClickZoom: false,
            // baseLayer: new maptalks.TileLayer('tile', {
            //     urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            //     subdomains: ['a', 'b', 'c', 'd'],
            //     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            // })
        });
     // the ThreeLayer to draw buildings
        var threeLayer = new maptalks.ThreeLayer('threelayer', {
            identifyCountOnEvent: 1,
            // forceRenderOnMoving: true,
            // forceRenderOnRotating: true
        });
        threeLayer.prepareToDraw = function (gl, scene, camera) {
            var light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, -10, 10).normalize();
            scene.add(light);
            scene.add(new THREE.AmbientLight('#fff', 0.5));
            animate();
            addPolygon();

        };
        threeLayer.addTo(map);


        function addPolygon() {
            const material = new THREE.MeshLambertMaterial({ color: '#fff', transparent: true });
            const extrudePolygons = [];
            const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[108.9588646064086, 34.219978885705856], [108.95910091657608, 34.21999155943827], [108.95908997865132, 34.21962188029219], [108.95886762567669, 34.21963481298575], [108.9588646064086, 34.219978885705856]]] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [108.95898078182817, 34.21980678460552] } };

            const building = threeLayer.toExtrudePolygon(f, { height: 60 }, material);

            threeLayer.addMesh(building);
        }

        function animate() {
            requestAnimationFrame(animate);
            threeLayer._needsUpdate = !threeLayer._needsUpdate;
            if (threeLayer._needsUpdate && !threeLayer.isRendering()) {
                threeLayer.redraw();
            }

        }


    </script>
   </body>
   </html>
```


```js
 import {Map} from 'maptalks';
 import * as THREE from 'three';
 import {ThreeLayer } from 'maptalks.three'

 var map = new Map("map", {
            center: [108.95946422883344, 34.219415098713256],
            zoom: 19.4,
            pitch: 60,
            // bearing: 180,

            centerCross: true,
            doubleClickZoom: false,
            // baseLayer: new maptalks.TileLayer('tile', {
            //     urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            //     subdomains: ['a', 'b', 'c', 'd'],
            //     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            // })
        });
     // the ThreeLayer to draw buildings
        var threeLayer = new ThreeLayer('threelayer', {
            identifyCountOnEvent: 1,
            // forceRenderOnMoving: true,
            // forceRenderOnRotating: true
        });
        threeLayer.prepareToDraw = function (gl, scene, camera) {
            var light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, -10, 10).normalize();
            scene.add(light);
            scene.add(new THREE.AmbientLight('#fff', 0.5));
            // animate();
            // addPolygon();

        };
        threeLayer.addTo(map);


```

## Exports

**This is maptalks Three exported variables**

```js
export {
    ThreeLayer, ThreeRenderer, BaseObject,
    MergedMixin,
    GeoJSONUtil, MergeGeometryUtil, GeoUtil, ExtrudeUtil, LineUtil,
    IdentifyUtil, geometryExtrude,
    LineMaterial
};

```