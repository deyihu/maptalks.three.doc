---
sidebar_position: 1
---

# Custom

If maptalks Three's built-in baseobject can't meet your business needs. You can customize your own graphic components. This is maptalks Three features

## Custom  BaseObject

```js
     import * maptalks from 'maptalks';
     import * as THREE from 'three';
     import {BaseObject } from 'maptalks.three'

    const OPTIONS={
        ...
    };

    class Circle extends BaseObject {
            constructor(coordinate, options, material, layer) {
                options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });
                super();
                //Initialize internal configuration
                this._initOptions(options);
                const { altitude, radius } = options;
                //generate geometry
                const r = layer.distanceToVector3(radius, radius).x
                const geometry = new THREE.CircleBufferGeometry(r, 50);

                //Initialize internal object3d
                this._createMesh(geometry, material);
                //set object3d position
                const z = layer.distanceToVector3(altitude, altitude).x;
                const position = layer.coordinateToVector3(coordinate, z);
                this.getObject3d().position.copy(position);
                // this.getObject3d().rotation.x = -Math.PI;
            }

```


## Custom Animation


```js
     import * maptalks from 'maptalks';
     import * as THREE from 'three';
     import {BaseObject } from 'maptalks.three'

    const OPTIONS={
        ...
    };

    class Circle extends BaseObject {
            constructor(coordinate, options, material, layer) {
                options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });
                super();
                //Initialize internal configuration
                this._initOptions(options);
                const { altitude, radius } = options;
                //generate geometry
                const r = layer.distanceToVector3(radius, radius).x
                const geometry = new THREE.CircleBufferGeometry(r, 50);

                //Initialize internal object3d
                this._createMesh(geometry, material);
                //set object3d position
                const z = layer.distanceToVector3(altitude, altitude).x;
                const position = layer.coordinateToVector3(coordinate, z);
                this.getObject3d().position.copy(position);
                this._scale = 1;
            }

              // test animation
            //   This function will be looped indefinitely
            _animation() {
                this._scale = (this._scale > 1 ? 0 : this._scale);
                this._scale += 0.02;
                this.getObject3d().scale.set(this._scale, this._scale, this._scale);
            }

```

## Reuse geometry

```js
//json is geojson 
 const data = json.features.slice(0, 10000).map(function (dataItem) {
                    return {
                        coordinate: dataItem.geometry.coordinates,
                        height: Math.random() * 200,
                        value: Math.random() * 10000,
                        radius: 5 + 5 * Math.random(),
                        topColor: '#fff',
                        interactive: false
                    }
  });
 const material = new THREE.MeshLambertMaterial({ color: '#fff', transparent: true, opacity: 1 });
 const barCache = threeLayer.toBox(data[0].coordinate, data[0], material);
 const bars=data.map(d=>{
    return getBar(d);
 });
 threeLayer.addMesh(bars);

 function getBar(options) {
            const { radius, height } = barCache.getOptions();
            const geometry = barCache.getObject3d().geometry;
            const scaleR = options.radius / radius, scaleH = options.height / height;
            const bar = new maptalks.BaseObject();
            bar._initOptions(Object.assign({}, barCache.getOptions(), options));
            // Reuse geometry,Multiple meshes share a geometry, which can have better performance and occupy less memory
            bar._createMesh(geometry, material);
            bar.getObject3d().scale.set(scaleR, scaleR, scaleH);
            const { altitude, coordinate } = options;
            const layer = barCache.getLayer();
            const z = layer.distanceToVector3(altitude, altitude).x;
            const position = layer.coordinateToVector3(coordinate, z);
            bar.getObject3d().position.copy(position);
            return bar;

        }

```

## More Custom Examples
 * [arcline](https://maptalks.org/maptalks.three/demo/custom-arcline.html)
 * [custom-arcline-animation](https://maptalks.org/maptalks.three/demo/custom-arcline-animation.html)
 * [custom-circle](https://maptalks.org/maptalks.three/demo/custom-circle.html)
 * [custom-fatline](https://maptalks.org/maptalks.three/demo/custom-fatline.html)
 * [custom-spriteline](https://maptalks.org/maptalks.three/demo/custom-spriteline.html)
 * [custom-world-point-map](https://maptalks.org/maptalks.three/demo/custom-world-point-map.html)
 * [custom-electricShield](https://maptalks.org/maptalks.three/demo/custom-electricShield.html)
