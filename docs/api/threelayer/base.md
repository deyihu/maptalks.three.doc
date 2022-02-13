---
sidebar_position: 6
---

# ThreeLayer

This is extends [maptalks.CanvasLayer](https://maptalks.org/maptalks.js/api/0.x/CanvasLayer.html)

## Source
 [source](https://github.com/maptalks/maptalks.three/blob/master/src/index.ts)

## Options

- geometryEvents:true `open baseobjects events`
- identifyCountOnEvent:0 `0 means unlimited`
- loopRenderCount:50 `per frame add scene baseobjects count` 

```js
const options: BaseLayerOptionType = {
    'renderer': 'gl',
    'doubleBuffer': false,
    'glOptions': null,
    'geometryEvents': true,
    'identifyCountOnEvent': 0,
    'forceRenderOnZooming': true,
    'loopRenderCount': 50
};

```
## Create

```js
import {ThreeLayer} from 'maptalks.three';

const threeLayer=new ThreeLayer(id,{
    'geometryEvents': false,
    'identifyCountOnEvent': 1,
    'forceRenderOnZooming': true,
    'loopRenderCount': 100,
    // ...otherOptions
})
// draw callback when init
threeLayer.prepareToDraw = function (gl, scene, camera) {
            var light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, -10, 10).normalize();
            scene.add(light);
            scene.add(new THREE.AmbientLight(0xffffff, 0.5));

};
threeLayer.addTo(map);


```

## Methods

* isRendering() `layer is Render`
  * return `Boolean`



* redraw() `redraw layer`
  * return `this`

```js
     function animation() {
        threeLayer.redraw();
        requestAnimationFrame(animation);
     }

```


* coordinateToVector3(coordinate, z = 0) `Latitude and longitude transform three-dimensional vector`
  * coordinate [maptalks.Coordinate]
  * z
  * return `THREE.Vector3`

```js
//    threeLayer.coordinateToVector3(map.getCenter(),1);


   const center=map.getCenter();
   const altitude=100;
   const z=threeLayer.distanceToVector3(altitude,altitude).x;
   const p=threeLayer.coordinateToVector3(center,z);

   baseObject.getObject3d().position.copy(p);

```




* distanceToVector3(w, h, [coord]) `Convert length to 3D vector`
  * w
  * h
  * coord  [maptalks.Coordinate] `default value is map.getCenter()`
  * return `THREE.Vector3`

```js
  threeLayer.distanceToVector3(100,100);
```


* addMesh(meshes) `add Graphical.Please add data in batch, so that you can have higher rendering performance`
  * meshes Array[BaseObject]
  * return `this`


* removeMesh(meshes) `remove Graphical.Please add data in batch, so that you can have higher rendering performance`
  * meshes Array[BaseObject]
  * return `this`


* delayAddMesh(meshes) `delay add Graphical.Please add data in batch, so that you can have higher rendering performance`
  * meshes Array[BaseObject]
  * return `this`


* getCamera()
  * return THREE.Camera




* getScene()
  * return THREE.Scene




* getThreeRenderer()
  * return THREE.WebGLRenderer


* getBaseObjects()
  * return Array[BaseObject]



* clear()
  * return `this`



* getMeshes()
  * return Array[THREE.Object3d]


* loop() `loop delay add meshes to scene when map is Idle,You Can setting ThreeLayer.options.loopRenderCount for Determines the number of mesh loaded into the scene per frame`
  * return `this`
  * [Example](https://maptalks.org/maptalks.three/demo/delayaddmesh.html)

```js

const threeLayer=new ThreeLayer(id,{
    'geometryEvents': false,
    'identifyCountOnEvent': 1,
    'forceRenderOnZooming': true,
    // the number of mesh loaded into the scene per frame
    'loopRenderCount': 100,
    // ...otherOptions
})

 threelayer.delayAddMesh(baseobjects);
 animation();
 function animation() {
    // layer animation support Skipping frames
    threeLayer._needsUpdate = !threeLayer._needsUpdate;
    if (threeLayer._needsUpdate && !threeLayer.isRendering()) {
        threeLayer.redraw();
    }
    threeLayer.loop && threeLayer.loop(false);
    requestAnimationFrame(animation);
}
```

* getPick() `It is generally used when customizing baseobject, and gpupick is required`
  * return [GPUPick](https://github.com/maptalks/maptalks.three/blob/master/src/GPUPick.ts)



* toExtrudePolygon(polygon, options, material)
  * polygon `maptalks.Polygon|maptalks.MultiPolygon|GeoJSON Polygon|GeoJSON MultiPolygon`
  * options.height=1
  * options.bottomHeight=0
  * options.topColor=null 
  * options.bottomColor='#2d2f61'
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.Material]
  * return [ExtrudePolygon](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/extrudepolygon-bottomheight.html)

```js
   const extrudePolygon=threeLayer.toExtrudePolygon(polygon,{height:100,asynchronous:true},material);
   extrudePolygon.on('workerload',(e)=>{

   })
  ```



* toBar(coordinate, options, material) 
  * coordinate [maptalks.Coordinate]
  * options.radius=10
  * options.height=100
  * options.radialSegments=6
  * options.topColor=null
  * options.bottomColor='#2d2f61'
  * material [THREE.Material]
  * return [Bar](https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/bar.html)



* toLine(lineString, options, material)
  * lineString `maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString`
  * options.bottomHeight=0 
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.LineBasicMaterial|THREE.LineDashMaterial]
  * return [Line](https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/line.html)



* toExtrudeLine(lineString, options, material)
  * lineString `maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString`
  * options.width=3 [Buffer width]
  * options.height=1 [Buffer height]
  * options.bottomHeight=0 
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.Material]
  * return [ExtrudeLine](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/extrudeline.html)



* toExtrudeLineTrail(lineString, options, material) `Create trailing lines`
  * lineString [maptalks.LineString]
  * options.width=2 [Buffer width]
  * options.height=1 [Buffer height]
  * options.trail=5 [tail length,1 minimum, the length is trail*chunkLength],
  * options.chunkLength=50 [Length of cutting line，Cut a line to this length],
  * options.speed=1 [1 Max]
  * material [THREE.Material]
  * return [ExtrudeLineTrail](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLineTrail.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/extrudelinetrail.html)





* toModel(model, options)
  * model [model data]
  * options.coordinate=null [model position]
  * return [Model](https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/obj.html)




* toExtrudePolygons(polygons, options: ExtrudePolygonOptionType, material: THREE.Material) `this is ExtrudePolygon Merge Mesh`
  * polygons `Array[maptalks.Polygon|maptalks.MultiPolygon|GeoJSON Polygon|GeoJSON MultiPolygon]` `Each data should contain its own attribute information`
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.Material]
  * return [ExtrudePolygons](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygons.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/extrudepolygons.html)

```js
  //maptalks.Polygon|maptalks.MultiPolygon
   polygons.forEach(p=>{
       p.setProperties({bottomHeight:5,height:100,.....});
   });
   //GeoJSON Polygon| GeoJSON.MultiPolygon
    //    polygons.forEach(p=>{
    //        p.properties.bottomHeight=5;
    //        p.properties.height=100;
    //        ...
    //    })

    const extrudePolygons = threeLayer.toExtrudePolygons(polygons, { interactive: false,asynchronous:true }, material);
    threeLayer.addMesh(extrudePolygons);

```





* toPoint(coordinate: maptalks.Coordinate, options: PointOptionType, material: THREE.PointsMaterial) 
  * coordinate `maptalks.Coordinate`
  * options.height:0 
  * material [THREE.PointsMaterial]
  * return [Point](https://github.com/maptalks/maptalks.three/blob/master/src/Point.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/point-icon.html)




* toPoints(pointsData, options, material: THREE.PointsMaterial) `this is Point Merge Mesh` 
  * pointsData `Array[Object]` `Each data should contain its own attribute information`
  * options.altitude:0 
  * material [THREE.PointsMaterial]
  * return [Points](https://github.com/maptalks/maptalks.three/blob/master/src/Points.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/points.html)

```js
    const pointsData=[
        {
            coordinate,
            height,
            size,
            color,
            ...
        },
        ...
    ];

    const points=threeLayer.toPoints(pointsData,{},material);

  ```




* toBars(pointsData, options, material: THREE.Material) `this is Bar Merge Mesh`
  * pointsData `Array[Object]` `Each data should contain its own attribute information`
  * options.altitude:0 
  * material [THREE.Material]
  * return [Bars](https://github.com/maptalks/maptalks.three/blob/master/src/Bars.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/bars.html)

```js
    const pointsData=[
        {
            coordinate,
            height,
            radialSegments,
            radius,
            ...
        },
        ...
    ];

    const bars=threeLayer.toBars(pointsData,{},material);

  ```



* toExtrudeLines(lineStrings, options,material: THREE.Material) `this is ExtrudeLine Merge Mesh`
  * lineStrings `Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]` `Each data should contain its own attributinformation`
  * options.altitude:0 
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.Material]
  * return [ExtrudeLines](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLines.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/extrudelines.html)
```js
  //maptalks.LineString|maptalks.MultiLineString
   lineStrings.forEach(p=>{
       p.setProperties({bottomHeight:5,height:1,width:4,,.....});
   });
   //GeoJSON LineString| GeoJSON.MultiLineString
    //    lineStrings.forEach(p=>{
    //        p.properties.bottomHeight=5;
    //        p.properties.height=100;
    //        ...
    //    })

    const extrudeLines = threeLayer.toExtrudeLines(lineStrings, { interactive: false,asynchronous:true }, material);
    threeLayer.addMesh(extrudeLines);


  ```



* toLines(lineStrings, options,material) `this is Line Merge Mesh`
  * lineStrings `Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]` `Each data should contain its own attributinformation`
  * options.altitude:0 
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.LineBasicMaterial | THREE.LineDashMaterial]
  * return [Lines](https://github.com/maptalks/maptalks.three/blob/master/src/Lines.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/lines.html)
```js
  //maptalks.LineString|maptalks.MultiLineString
   lineStrings.forEach(p=>{
       p.setProperties({bottomHeight:5,.....});
   });
   //GeoJSON LineString| GeoJSON.MultiLineString
    //    lineStrings.forEach(p=>{
    //        p.properties.bottomHeight=5;
    //        ...
    //    })

    const lines = threeLayer.toLines(lineStrings, { interactive: false,asynchronous:true }, material);
    threeLayer.addMesh(lines);


  ```



* toTerrain(extent: maptalks.Extent, options, material: THREE.Material)
  * extent `maptalks.Extent`
  * options.altitude:0 
  * options.image=null `this is mapbox rgb terrain data iamge`
  * options.imageWidth=256 
  * options.imageHeight=256 
  * options.texture=null 
  * material [THREE.Material]
  * return [Terrain](https://github.com/maptalks/maptalks.three/blob/master/src/Terrain.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/terrain.html)
```js
    const extent = new maptalks.Extent(120.41015625, 31.25037814985572, 120.421142578125, 31.259769987394264);
    const material = new THREE.MeshBasicMaterial();
    const terrain = threeLayer.toTerrain(extent, {
        texture: './data/streets-satellite.png',
        image: './data/terrain-rgb.png',
        interactive:false
    }, material);


  ```



* toHeatMap(pointsData, options, material: THREE.Material)
  * pointsData `Array[Object]` `Each data should contain its own attribute information`
  * options.altitude:0 
  * options.min:0 `min value`
  * options.max:100 `max value`
  * options.size:13 `point size,is pixel`
  * options.gradient:{ 0.25: 'rgb(0,0,255)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' } `Ribbon`
  * options.gridScale:0.5 `canvas scale`
  * material [THREE.Material]
  * return [HeatMap](https://github.com/maptalks/maptalks.three/blob/master/src/HeatMap.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/heatmap.html)
```js
   const pointsData = response.slice(0, 1 * 100000).map(d => {
        return {
            coordinate: [Number(d.lng), Number(d.lat)],
            //repeat count
            count: 30 * Math.random(),
        };
    });
    heatmap = threeLayer.toHeatMap(data,
        {
            gridScale: 2,
            size: 2,
            gradient: { 0.25: 'rgb(0,0,200)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' },
        }, material);
    threeLayer.addMesh(heatmap);


  ```


  
* toFatLine(lineString, options, material)
  * lineString `maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString`
  * options.bottomHeight=0 
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.LineMaterial]
  * return [FatLine](https://github.com/maptalks/maptalks.three/blob/master/src/FatLine.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/fatline.html)



* toFatLines(lineString, options, material) `this is FatLine Merge Mesh`
  * lineStrings `Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]` `Each data should contain its owr attributinformation`
  * options.asynchronous:false `Using worker for asynchronous processing`
  * material [THREE.LineMaterial]
  * return [FatLines](https://github.com/maptalks/maptalks.three/blob/master/src/FatLines.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/fatlines.html)

```js
 //maptalks.LineString|maptalks.MultiLineString
   lineStrings.forEach(p=>{
       p.setProperties({bottomHeight:5,.....});
   });
   //GeoJSON LineString| GeoJSON.MultiLineString
    //    lineStrings.forEach(p=>{
    //        p.properties.bottomHeight=5;
    //        ...
    //    })

    const lines = threeLayer.toFatLines(lineStrings, { interactive: false,asynchronous:true }, material);
    threeLayer.addMesh(lines);


```



* toBox(coordinate, options, material) 
  * coordinate [maptalks.Coordinate]
  * options.radius=10
  * options.height=100
  * options.topColor=null
  * options.bottomColor='#2d2f61'
  * material [THREE.Material]
  * return [Box](https://github.com/maptalks/maptalks.three/blob/master/src/Box.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/box.html)





* toBoxs(pointsData, options, material: THREE.Material) `this is Box Merge Mesh`
  * pointsData `Array[Object]` `Each data should contain its own attribute information`
  * options.altitude:0 
  * material [THREE.Material]
  * return [Boxs](https://github.com/maptalks/maptalks.three/blob/master/src/Boxs.ts)
  * [Example](https://maptalks.org/maptalks.three/demo/boxs.html)

```js
    const pointsData=[
        {
            coordinate,
            height,
            radius,
            ...
        },
        ...
    ];

    const bars=threeLayer.toBoxs(pointsData,{},material);

  ```