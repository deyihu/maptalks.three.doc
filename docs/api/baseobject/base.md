---
sidebar_position: 6
---

# BaseObject

If you are not familiar with maptalks, refer to its documentation.This will help you read the document [maptalks docs](https://maptalks.org/maptalks.js/api/0.x/Map.html)

This is the base class for all 3D objects,Its function and maptalks.geometry are as similar as possible.

[Bar](https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts), 
[ExtrudePolygon](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts),
[ExtrudeLine](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts), 
[Line](https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts), 
[Model](https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts) base on it

If you're familiar with three.js. You can customize your own graphic elements based on it

such as examples we provide [circle](https://maptalks.org/maptalks.three/demo/custom-circle.html) ,[fatline](https://maptalks.org/maptalks.three/demo/custom-fatline.html),[linetrip](https://maptalks.org/maptalks.three/demo/custom-linetrip.html),[linetrail](https://maptalks.org/maptalks.three/demo/custom-linetrail.html)

## Source
 [source](https://github.com/maptalks/maptalks.three/blob/master/src/BaseObject.ts)

## Options

**All subclasses will have baseobject options**

- interactive:true `Allow interaction`
- altitude:0
- minZoom:0 
- maxZoom:30 
- asynchronous:false `Using worker for asynchronous processing`

```js
const OPTIONS = {
    interactive: true,
    altitude: 0,
    minZoom: 0,
    maxZoom: 30,
    asynchronous: false
};
```
## Events

- add
- remove
- mousemove
- click
- mousedown
- mouseup
- dblclick
- contextmenu
- touchstart
- touchmove
- touchend
- mouseover
- mouseout
- idchange
- propertieschange
- show
- hide
- symbolchange
- workerload `Only baseobjects that support asynchrony can be triggered,ExtrudeLine,ExtrudePolygon,ExtrudePolygons,ExtrudeLines,FatLine,FatLines,Line,Lines `

```js
  baseObject.on('click',function(e){

  });
  baseObject.on('click add remove mousemove',function(e){

  });
```

## Methods

* on(eventsOn, handler, context)
  * eventsOn [event types to register, seperated by space if more than one.]
  * handler [handler function to be called]
  * context [the context of the handler]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)

```js
   bar.on('click',function(e){

   });

```



* addEventListener(eventTypes, handler, context)
  * eventTypes  [event types to register, seperated by space if more than one.
  * handler  [handler function to be called]
  * context  [the context of the handler]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)



* once(eventTypes, handler, context)
  * eventTypes  [event types to register, seperated by space if more than one.]
  * handler  [handler function to be called]
  * context  [the context of the handler]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)



* off(eventsOff, handler, contextopt)
  * eventsOff  [event types to unregister, seperated by space if more than one.]
  * handler  [handler function to be called]
  * context  [the context of the handler]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)

```js
   bar.off('click',function(e){

   });

```


* removeEventListener(eventTypes, handler, context)
  * eventTypes  [event types to unregister, seperated by space if more than one.]
  * handler  [handler function to be called]
  * context  [the context of the handler]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)



* fire(eventType, param)
  * eventType  [an event type to fire]
  * param [parameters for the listener function.]
  * return `this`
  * [detail maptalks.Eventable](https://maptalks.org/maptalks.js/api/0.x/Eventable.html)



* getObject3d()
  * return `THREE.Object3D`


* getId()
  * return `id`



* setId(id) 
  * id
  * return `this`



* getType() `Get the type of graphic element`
  * return `String`

```js
  const bar=threeLayer.toBar(...);
  bar.getType()
```


* getOptions() `Get configuration information of graphic elements`
  * return `Object`



* getProperties() `Get attribute information of graphic elements`
  * return `Object`



* setProperties(property) `set attribute information of graphic elements`
  * property [this a Object]
  * return `this`



* getLayer()
  * return `ThreeLayer`



* getMap()
  * return `Map`



* getCenter()
  * return `Coordinate`



* getAltitude() `Get the elevation of the graphic element`
  * return `Number`



* setAltitude(altitude) `set the elevation of the graphic element`
  * altitude  [elevation value]
  * return `this`
  * `If you customize your own graphic elements, you may override this method.`


* getHeight() `Get the height of the graphic element`
  * return `Number`



* setHeight(height) `set the height of the graphic element`
  * height  [height value]
  * return `this`
  * `Not all graphics support height settings. Bar, box, extrudeline and extrudepolygon are supported`



* show()
  * return `this`



* hide()
  * return `this`



* isVisible()
  * return `Boolean`



* getSymbol()  
  * return `THREE.Material`
  * `If you customize your own graphic elements, you may override this method`



* setSymbol(material)
  * material [THREE.Material]
  * return `this`
  * `If you customize your own graphic elements, you may override this method`



* setInfoWindow(options)
  * options [infowindow config ,[detail](https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html)]
  * return `this`


```js

bar.setInfoWindow({
    content: 'hello world,height:' + d.height * 400,
    title: 'message',
    animationDuration: 0,
    autoOpenOn: false
});
```



* getInfoWindow()
  * return `ui.InfoWindow`



* openInfoWindow(coordinate)
  * coordinate [infowindow position]
  * return `this`



* closeInfoWindow()
  * return `this`



* removeInfoWindow()
  * return `this`



* setToolTip(content, options)
  * content [tooltip content]
  * options [tooltip cofig  [detail](https://maptalks.org/maptalks.js/api/0.x/ui.ToolTip.html)]
  * return `this`
  
```js
bar.setToolTip(d.height * 400, {
    showTimeout: 0,
    eventsPropagation: true,
    dx: 10
});


```

* getToolTip()
  * return `ui.ToolTip`



* openToolTip(coordinate)
  * coordinate [tooltip position]
  * return `this`



* closeToolTip()
  * return `this`



* removeToolTip()
  * return `this`



* animateShow(options = {}, cb)
  * options [animation config]
  * options.duration
  * options.easing
  * cb [callback function]  
  * `If you customize your own graphic elements, you may need to override this method to delayed display of graphics`
  * such as [circle](https://maptalks.org/maptalks.three/demo/custom-circle.html)

```js
 animationShow(options = {}, cb) {
                if (this._showPlayer) {
                    this._showPlayer.cancel();
                }
                if (maptalks.Util.isFunction(options)) {
                    options = {};
                    cb = options;
                }
                const duration = options['duration'] || 1000,
                    easing = options['easing'] || 'out';
                const player = this._showPlayer = maptalks.animation.Animation.animate({
                    'scale': 1
                }, {
                    'duration': duration,
                    'easing': easing
                }, frame => {
                    const scale = frame.styles.scale;
                    if (scale > 0) {
                        this.getObject3d().scale.set(scale, scale, scale);
                    }
                    if (cb) {
                        cb(frame, scale);
                    }
                });
                player.play();
                return player;
}

```


* getMinZoom()
  * return `Number`



* getMaxZaoom()
  * return `Number`



* isAsynchronous()
  * return `Boolean`

## For Custom Methods

* setPickObject3d(object3d: THREE.Object3D)
  * return `this`
  * `if you want to customize your own graphic elements and have your own hit detection implementation,this is for GPU PICK`
  * such as [custom-gpupick](https://maptalks.org/maptalks.three/demo/custom-gpupick.html)


* identify(coordinate) 
  * coordinate [Coordinate]
  * return `Boolean`
  * `You need to add this method if you want to customize your own graphic elements and have your own hit detection implementation(By default, the detection of graphics is provided by Raycaster)`
  * such as [fatline](https://maptalks.org/maptalks.three/demo/custom-fatline.html)




* _initOptions(options)  `Initialize internal configuration information`
  * options
  * return `this`
  * `If you customize the graphics, you will use this method`. such as examples we provide [circle](https://maptalks.org/maptalks.three/demo/custom-circle.html)

```js
    class Circle extends maptalks.BaseObject {
                constructor(coordinate, options, material, layer) {
                    options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });
                    super();
                    //Initialize internal configuration
                    // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L135
                    this._initOptions(options);
                    const { altitude, radius } = options;
                    //generate geometry
                    const r = layer.distanceToVector3(radius, radius).x
                    const geometry = new THREE.CircleBufferGeometry(r, 50);

                    //Initialize internal object3d
                    // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L140
                    this._createMesh(geometry, material);

                    //set object3d position
                    const z = layer.altitudeToVector3(altitude, altitude).x;
                    const position = layer.coordinateToVector3(coordinate, z);
                    this.getObject3d().position.copy(position);
                    this.getObject3d().rotation.x = -Math.PI;
                }
    }

```


* _createMesh(geometry, material)   `Creating THREE.Mesh objects`
  * geometry [THREE.BufferGeometry]
  * material [THREE.Material]
  * return `this`
  * `If you customize the graphics, you will use this method`


* _createGroup()  `Creating THREE.Group objects`
  * return `this`
  * `If you customize the graphics, you will use this method`



* _createLine(geometry, material)  `Creating THREE.Line objects`
  * geometry [THREE.BufferGeometry]
  * material [THREE.Material]
  * return `this`
  * `If you customize the graphics, you will use this method`



* _createLineSegments(geometry, material)  `Creating THREE.LineSegments objects`
  * geometry [THREE.BufferGeometry]
  * material [THREE.Material]
  * return `this`
  * `If you customize the graphics, you will use this method`



* _createPoints(geometry, material)  `Creating THREE.Points objects`
  * geometry [THREE.BufferGeometry]
  * material [THREE.PointsMaterial]
  * return `this`
  * `If you customize the graphics, you will use this method`



* _animation()
  * `If you customize graphics and want them to perform circular animation, you need to implement the function of this method`,such as [linetrail](https://maptalks.org/maptalks.three/demo/custom-linetrail.html)


## Subclass

**All subclasses will have baseobject methods and options**

* [Bar](https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts)
* [Bars](https://github.com/maptalks/maptalks.three/blob/master/src/Bars.ts)
* [Box](https://github.com/maptalks/maptalks.three/blob/master/src/Box.ts)
* [Boxs](https://github.com/maptalks/maptalks.three/blob/master/src/Boxs.ts)
* [ExtrudeLine](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts)
* [ExtrudeLines](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLines.ts)
* [ExtrudeLineTrail](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLineTrail.ts)
* [ExtrudePolygon](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts)
* [ExtrudePolygons](https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygons.ts)
* [FatLine](https://github.com/maptalks/maptalks.three/blob/master/src/FatLine.ts)
* [FatLines](https://github.com/maptalks/maptalks.three/blob/master/src/FatLines.ts)
* [HeatMap](https://github.com/maptalks/maptalks.three/blob/master/src/HeatMap.ts)
* [Line](https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts)
* [Lines](https://github.com/maptalks/maptalks.three/blob/master/src/Lines.ts)
* [Model](https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts)
* [Point](https://github.com/maptalks/maptalks.three/blob/master/src/Point.ts)
* [Points](https://github.com/maptalks/maptalks.three/blob/master/src/Points.ts)
* [Terrain](https://github.com/maptalks/maptalks.three/blob/master/src/Terrain.ts)