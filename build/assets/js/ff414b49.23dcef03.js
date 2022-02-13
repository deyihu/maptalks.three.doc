"use strict";(self.webpackChunkmaptalks_three_doc=self.webpackChunkmaptalks_three_doc||[]).push([[521],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),h=r,d=k["".concat(p,".").concat(h)]||k[h]||u[h]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7954:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:6},p="ThreeLayer",s={unversionedId:"api/threelayer/base",id:"api/threelayer/base",title:"ThreeLayer",description:"This is extends maptalks.CanvasLayer",source:"@site/docs/api/threelayer/base.md",sourceDirName:"api/threelayer",slug:"/api/threelayer/base",permalink:"/maptalks.three.doc/build/docs/api/threelayer/base",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/api/threelayer/base.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"ThreeLayer",permalink:"/maptalks.three.doc/build/docs/category/threelayer"},next:{title:"Share WebGL Context",permalink:"/maptalks.three.doc/build/docs/api/threelayer/sharecontext"}},m=[{value:"Source",id:"source",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Create",id:"create",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"threelayer"},"ThreeLayer"),(0,l.kt)("p",null,"This is extends ",(0,l.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.js/api/0.x/CanvasLayer.html"},"maptalks.CanvasLayer")),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/index.ts"},"source")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"geometryEvents:true ",(0,l.kt)("inlineCode",{parentName:"li"},"open baseobjects events")),(0,l.kt)("li",{parentName:"ul"},"identifyCountOnEvent:0 ",(0,l.kt)("inlineCode",{parentName:"li"},"0 means unlimited")),(0,l.kt)("li",{parentName:"ul"},"loopRenderCount:50 ",(0,l.kt)("inlineCode",{parentName:"li"},"per frame add scene baseobjects count")),(0,l.kt)("li",{parentName:"ul"},"...options From ",(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/CanvasLayer.html"},"CanvasLayer"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const options: BaseLayerOptionType = {\n    'renderer': 'gl',\n    'doubleBuffer': false,\n    'glOptions': null,\n    'geometryEvents': true,\n    'identifyCountOnEvent': 0,\n    'forceRenderOnZooming': true,\n    'loopRenderCount': 50\n};\n\n")),(0,l.kt)("h2",{id:"create"},"Create"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"constructor(id,options)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {ThreeLayer} from 'maptalks.three';\n\nconst threeLayer=new ThreeLayer(id,{\n    'geometryEvents': false,\n    'identifyCountOnEvent': 1,\n    'forceRenderOnZooming': true,\n    'loopRenderCount': 100,\n    // ...otherOptions\n})\n// draw callback when init\nthreeLayer.prepareToDraw = function (gl, scene, camera) {\n            var light = new THREE.DirectionalLight(0xffffff);\n            light.position.set(0, -10, 10).normalize();\n            scene.add(light);\n            scene.add(new THREE.AmbientLight(0xffffff, 0.5));\n\n};\nthreeLayer.addTo(map);\n\n\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"isRendering() ",(0,l.kt)("inlineCode",{parentName:"li"},"layer is Render"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"redraw() ",(0,l.kt)("inlineCode",{parentName:"li"},"redraw layer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"     function animation() {\n        threeLayer.redraw();\n        requestAnimationFrame(animation);\n     }\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"coordinateToVector3(coordinate, z = 0) ",(0,l.kt)("inlineCode",{parentName:"li"},"Latitude and longitude transform three-dimensional vector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"coordinate ","[maptalks.Coordinate]"),(0,l.kt)("li",{parentName:"ul"},"z"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"THREE.Vector3"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//    threeLayer.coordinateToVector3(map.getCenter(),1);\n\n\n   const center=map.getCenter();\n   const altitude=100;\n   const z=threeLayer.distanceToVector3(altitude,altitude).x;\n   const p=threeLayer.coordinateToVector3(center,z);\n\n   baseObject.getObject3d().position.copy(p);\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"distanceToVector3(w, h, ","[coord]",") ",(0,l.kt)("inlineCode",{parentName:"li"},"Convert length to 3D vector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"w"),(0,l.kt)("li",{parentName:"ul"},"h"),(0,l.kt)("li",{parentName:"ul"},"coord  ","[maptalks.Coordinate]"," ",(0,l.kt)("inlineCode",{parentName:"li"},"default value is map.getCenter()")),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"THREE.Vector3"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  threeLayer.distanceToVector3(100,100);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"addMesh(meshes) ",(0,l.kt)("inlineCode",{parentName:"li"},"add Graphical.Please add data in batch, so that you can have higher rendering performance"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"meshes Array","[BaseObject]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"removeMesh(meshes) ",(0,l.kt)("inlineCode",{parentName:"li"},"remove Graphical.Please add data in batch, so that you can have higher rendering performance"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"meshes Array","[BaseObject]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"delayAddMesh(meshes) ",(0,l.kt)("inlineCode",{parentName:"li"},"delay add Graphical.Please add data in batch, so that you can have higher rendering performance"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"meshes Array","[BaseObject]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getCamera()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return THREE.Camera")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getScene()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return THREE.Scene")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getThreeRenderer()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return THREE.WebGLRenderer")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getBaseObjects()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return Array","[BaseObject]")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clear()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getMeshes()",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return Array","[THREE.Object3d]")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"loop() ",(0,l.kt)("inlineCode",{parentName:"li"},"loop delay add meshes to scene when map is Idle,You Can setting ThreeLayer.options.loopRenderCount for Determines the number of mesh loaded into the scene per frame"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("inlineCode",{parentName:"li"},"this")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/delayaddmesh.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nconst threeLayer=new ThreeLayer(id,{\n    'geometryEvents': false,\n    'identifyCountOnEvent': 1,\n    'forceRenderOnZooming': true,\n    // the number of mesh loaded into the scene per frame\n    'loopRenderCount': 100,\n    // ...otherOptions\n})\n\n threelayer.delayAddMesh(baseobjects);\n animation();\n function animation() {\n    // layer animation support Skipping frames\n    threeLayer._needsUpdate = !threeLayer._needsUpdate;\n    if (threeLayer._needsUpdate && !threeLayer.isRendering()) {\n        threeLayer.redraw();\n    }\n    threeLayer.loop && threeLayer.loop(false);\n    requestAnimationFrame(animation);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getPick() ",(0,l.kt)("inlineCode",{parentName:"li"},"It is generally used when customizing baseobject, and gpupick is required"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/GPUPick.ts"},"GPUPick"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toExtrudePolygon(polygon, options, material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"polygon ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.Polygon|maptalks.MultiPolygon|GeoJSON Polygon|GeoJSON MultiPolygon")),(0,l.kt)("li",{parentName:"ul"},"options.height=1"),(0,l.kt)("li",{parentName:"ul"},"options.bottomHeight=0"),(0,l.kt)("li",{parentName:"ul"},"options.topColor=null "),(0,l.kt)("li",{parentName:"ul"},"options.bottomColor='#2d2f61'"),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts"},"ExtrudePolygon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/extrudepolygon-bottomheight.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"   const extrudePolygon=threeLayer.toExtrudePolygon(polygon,{height:100,asynchronous:true},material);\n   extrudePolygon.on('workerload',(e)=>{\n\n   })\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toBar(coordinate, options, material) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"coordinate ","[maptalks.Coordinate]"),(0,l.kt)("li",{parentName:"ul"},"options.radius=10"),(0,l.kt)("li",{parentName:"ul"},"options.height=100"),(0,l.kt)("li",{parentName:"ul"},"options.radialSegments=6"),(0,l.kt)("li",{parentName:"ul"},"options.topColor=null"),(0,l.kt)("li",{parentName:"ul"},"options.bottomColor='#2d2f61'"),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts"},"Bar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/bar.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toLine(lineString, options, material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineString ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString")),(0,l.kt)("li",{parentName:"ul"},"options.bottomHeight=0 "),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.LineBasicMaterial|THREE.LineDashMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts"},"Line")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/line.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toExtrudeLine(lineString, options, material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineString ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString")),(0,l.kt)("li",{parentName:"ul"},"options.width=3 ","[Buffer width]"),(0,l.kt)("li",{parentName:"ul"},"options.height=1 ","[Buffer height]"),(0,l.kt)("li",{parentName:"ul"},"options.bottomHeight=0 "),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts"},"ExtrudeLine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/extrudeline.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toExtrudeLineTrail(lineString, options, material) ",(0,l.kt)("inlineCode",{parentName:"li"},"Create trailing lines"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineString ","[maptalks.LineString]"),(0,l.kt)("li",{parentName:"ul"},"options.width=2 ","[Buffer width]"),(0,l.kt)("li",{parentName:"ul"},"options.height=1 ","[Buffer height]"),(0,l.kt)("li",{parentName:"ul"},"options.trail=5 ","[tail length,1 minimum, the length is trail*chunkLength]",","),(0,l.kt)("li",{parentName:"ul"},"options.chunkLength=50 ","[Length of cutting line\uff0cCut a line to this length]",","),(0,l.kt)("li",{parentName:"ul"},"options.speed=1 ","[1 Max]"),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLineTrail.ts"},"ExtrudeLineTrail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/extrudelinetrail.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toModel(model, options)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"model ","[model data]"),(0,l.kt)("li",{parentName:"ul"},"options.coordinate=null ","[model position]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts"},"Model")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/obj.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toExtrudePolygons(polygons, options: ExtrudePolygonOptionType, material: THREE.Material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is ExtrudePolygon Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"polygons ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[maptalks.Polygon|maptalks.MultiPolygon|GeoJSON Polygon|GeoJSON MultiPolygon]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attribute information")),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygons.ts"},"ExtrudePolygons")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/extrudepolygons.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  //maptalks.Polygon|maptalks.MultiPolygon\n   polygons.forEach(p=>{\n       p.setProperties({bottomHeight:5,height:100,.....});\n   });\n   //GeoJSON Polygon| GeoJSON.MultiPolygon\n    //    polygons.forEach(p=>{\n    //        p.properties.bottomHeight=5;\n    //        p.properties.height=100;\n    //        ...\n    //    })\n\n    const extrudePolygons = threeLayer.toExtrudePolygons(polygons, { interactive: false,asynchronous:true }, material);\n    threeLayer.addMesh(extrudePolygons);\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toPoint(coordinate: maptalks.Coordinate, options: PointOptionType, material: THREE.PointsMaterial) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"coordinate ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.Coordinate")),(0,l.kt)("li",{parentName:"ul"},"options.height:0 "),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.PointsMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Point.ts"},"Point")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/point-icon.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toPoints(pointsData, options, material: THREE.PointsMaterial) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is Point Merge Mesh")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pointsData ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[Object]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attribute information")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.PointsMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Points.ts"},"Points")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/points.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    const pointsData=[\n        {\n            coordinate,\n            height,\n            size,\n            color,\n            ...\n        },\n        ...\n    ];\n\n    const points=threeLayer.toPoints(pointsData,{},material);\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toBars(pointsData, options, material: THREE.Material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is Bar Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pointsData ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[Object]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attribute information")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Bars.ts"},"Bars")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/bars.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    const pointsData=[\n        {\n            coordinate,\n            height,\n            radialSegments,\n            radius,\n            ...\n        },\n        ...\n    ];\n\n    const bars=threeLayer.toBars(pointsData,{},material);\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toExtrudeLines(lineStrings, options,material: THREE.Material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is ExtrudeLine Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineStrings ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attributinformation")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLines.ts"},"ExtrudeLines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/extrudelines.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  //maptalks.LineString|maptalks.MultiLineString\n   lineStrings.forEach(p=>{\n       p.setProperties({bottomHeight:5,height:1,width:4,,.....});\n   });\n   //GeoJSON LineString| GeoJSON.MultiLineString\n    //    lineStrings.forEach(p=>{\n    //        p.properties.bottomHeight=5;\n    //        p.properties.height=100;\n    //        ...\n    //    })\n\n    const extrudeLines = threeLayer.toExtrudeLines(lineStrings, { interactive: false,asynchronous:true }, material);\n    threeLayer.addMesh(extrudeLines);\n\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toLines(lineStrings, options,material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is Line Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineStrings ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attributinformation")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.LineBasicMaterial | THREE.LineDashMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Lines.ts"},"Lines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/lines.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  //maptalks.LineString|maptalks.MultiLineString\n   lineStrings.forEach(p=>{\n       p.setProperties({bottomHeight:5,.....});\n   });\n   //GeoJSON LineString| GeoJSON.MultiLineString\n    //    lineStrings.forEach(p=>{\n    //        p.properties.bottomHeight=5;\n    //        ...\n    //    })\n\n    const lines = threeLayer.toLines(lineStrings, { interactive: false,asynchronous:true }, material);\n    threeLayer.addMesh(lines);\n\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toTerrain(extent: maptalks.Extent, options, material: THREE.Material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"extent ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.Extent")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"options.image=null ",(0,l.kt)("inlineCode",{parentName:"li"},"this is mapbox rgb terrain data iamge")),(0,l.kt)("li",{parentName:"ul"},"options.imageWidth=256 "),(0,l.kt)("li",{parentName:"ul"},"options.imageHeight=256 "),(0,l.kt)("li",{parentName:"ul"},"options.texture=null "),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Terrain.ts"},"Terrain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/terrain.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    const extent = new maptalks.Extent(120.41015625, 31.25037814985572, 120.421142578125, 31.259769987394264);\n    const material = new THREE.MeshBasicMaterial();\n    const terrain = threeLayer.toTerrain(extent, {\n        texture: './data/streets-satellite.png',\n        image: './data/terrain-rgb.png',\n        interactive:false\n    }, material);\n\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toHeatMap(pointsData, options, material: THREE.Material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pointsData ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[Object]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attribute information")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"options.min:0 ",(0,l.kt)("inlineCode",{parentName:"li"},"min value")),(0,l.kt)("li",{parentName:"ul"},"options.max:100 ",(0,l.kt)("inlineCode",{parentName:"li"},"max value")),(0,l.kt)("li",{parentName:"ul"},"options.size:13 ",(0,l.kt)("inlineCode",{parentName:"li"},"point size,is pixel")),(0,l.kt)("li",{parentName:"ul"},"options.gradient:{ 0.25: 'rgb(0,0,255)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' } ",(0,l.kt)("inlineCode",{parentName:"li"},"Ribbon")),(0,l.kt)("li",{parentName:"ul"},"options.gridScale:0.5 ",(0,l.kt)("inlineCode",{parentName:"li"},"canvas scale")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/HeatMap.ts"},"HeatMap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/heatmap.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"   const pointsData = response.slice(0, 1 * 100000).map(d => {\n        return {\n            coordinate: [Number(d.lng), Number(d.lat)],\n            //repeat count\n            count: 30 * Math.random(),\n        };\n    });\n    heatmap = threeLayer.toHeatMap(data,\n        {\n            gridScale: 2,\n            size: 2,\n            gradient: { 0.25: 'rgb(0,0,200)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' },\n        }, material);\n    threeLayer.addMesh(heatmap);\n\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toFatLine(lineString, options, material)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineString ",(0,l.kt)("inlineCode",{parentName:"li"},"maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString")),(0,l.kt)("li",{parentName:"ul"},"options.bottomHeight=0 "),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.LineMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/FatLine.ts"},"FatLine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/fatline.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toFatLines(lineString, options, material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is FatLine Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lineStrings ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[maptalks.LineString|maptalks.MultiLineString|GeoJSON LineString |GeoJSON MultiLineString]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its owr attributinformation")),(0,l.kt)("li",{parentName:"ul"},"options.asynchronous:false ",(0,l.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing")),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.LineMaterial]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/FatLines.ts"},"FatLines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/fatlines.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," //maptalks.LineString|maptalks.MultiLineString\n   lineStrings.forEach(p=>{\n       p.setProperties({bottomHeight:5,.....});\n   });\n   //GeoJSON LineString| GeoJSON.MultiLineString\n    //    lineStrings.forEach(p=>{\n    //        p.properties.bottomHeight=5;\n    //        ...\n    //    })\n\n    const lines = threeLayer.toFatLines(lineStrings, { interactive: false,asynchronous:true }, material);\n    threeLayer.addMesh(lines);\n\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toBox(coordinate, options, material) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"coordinate ","[maptalks.Coordinate]"),(0,l.kt)("li",{parentName:"ul"},"options.radius=10"),(0,l.kt)("li",{parentName:"ul"},"options.height=100"),(0,l.kt)("li",{parentName:"ul"},"options.topColor=null"),(0,l.kt)("li",{parentName:"ul"},"options.bottomColor='#2d2f61'"),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Box.ts"},"Box")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/box.html"},"Example"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toBoxs(pointsData, options, material: THREE.Material) ",(0,l.kt)("inlineCode",{parentName:"li"},"this is Box Merge Mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pointsData ",(0,l.kt)("inlineCode",{parentName:"li"},"Array[Object]")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Each data should contain its own attribute information")),(0,l.kt)("li",{parentName:"ul"},"options.altitude:0 "),(0,l.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,l.kt)("li",{parentName:"ul"},"return ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Boxs.ts"},"Boxs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/boxs.html"},"Example"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    const pointsData=[\n        {\n            coordinate,\n            height,\n            radius,\n            ...\n        },\n        ...\n    ];\n\n    const bars=threeLayer.toBoxs(pointsData,{},material);\n\n")))}k.isMDXComponent=!0}}]);