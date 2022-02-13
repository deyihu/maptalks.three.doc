"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Second",p={unversionedId:"second/intro",id:"second/intro",title:"Second",description:"Let's start.",source:"@site/docs/second/intro.md",sourceDirName:"second",slug:"/second/intro",permalink:"/build/docs/second/intro",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/second/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"second"},c=[{value:"Install",id:"install",children:[{value:"Tips",id:"tips",children:[],level:3},{value:"CDN",id:"cdn",children:[],level:3},{value:"NPM",id:"npm",children:[],level:3}],level:2},{value:"Incompatible changes",id:"incompatible-changes",children:[],level:2},{value:"Hello World",id:"hello-world",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"second"},"Second"),(0,o.kt)("p",null,"Let's start."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,o.kt)("p",null,"Or ",(0,o.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("p",null,"Maptalks.three base on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.js"},"maptalks.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/three.js"},"three.js"),".\nSo when you use it, you must introduce them. Because three JS has poor compatibility. You may need to lock three JS version"),(0,o.kt)("h3",{id:"cdn"},"CDN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://unpkg.com/three@0.104.0/build/three.min.js"><\/script>\n<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"><\/script>\n<script type="text/javascript" src="https://unpkg.com/maptalks.three/dist/maptalks.three.js"><\/script>\n')),(0,o.kt)("h3",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," npm i maptalk.three\n \n #or\n\n yarn add maptalks.three\n")),(0,o.kt)("h2",{id:"incompatible-changes"},"Incompatible changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"three.js >=128  the default umd package is ES6"),(0,o.kt)("li",{parentName:"ul"},"Starting from version 0.16.0, the default umd package is ES6,To fit the new version of three.js ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mrdoob/three.js/issues/22025"},"about three umd package change")),(0,o.kt)("li",{parentName:"ul"},"If your running environment does not support ES6, we also provide Es5 version ",(0,o.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/maptalks.three/dist/maptalks.three.es5.js"},"maptalks.three.es5.js"),",This requires the version of three.js < = 127,")),(0,o.kt)("h2",{id:"hello-world"},"Hello World"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\n<html>\n\n<head>\n    <title>shared webgl context by GroupGLLayer</title>\n    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.css">\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.js"><\/script>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/three@0.104.0/build/three.min.js"><\/script>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/maptalks.three@latest/dist/maptalks.three.js"><\/script>\n    <style>\n        html,\n        body {\n            margin: 0px;\n            height: 100%;\n            width: 100%;\n        }\n\n        #map {\n            width: 100%;\n            height: 100%;\n            background-color: #000;\n        }\n    </style>\n</head>\n\n<body>\n    <div id="map"></div>\n    <script>\n\n    var map = new maptalks.Map("map", {\n            center: [108.95946422883344, 34.219415098713256],\n            zoom: 19.4,\n            pitch: 60,\n            // bearing: 180,\n\n            centerCross: true,\n            doubleClickZoom: false,\n            // baseLayer: new maptalks.TileLayer(\'tile\', {\n            //     urlTemplate: \'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png\',\n            //     subdomains: [\'a\', \'b\', \'c\', \'d\'],\n            //     attribution: \'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>\'\n            // })\n        });\n     // the ThreeLayer to draw buildings\n        var threeLayer = new maptalks.ThreeLayer(\'threelayer\', {\n            identifyCountOnEvent: 1,\n            // forceRenderOnMoving: true,\n            // forceRenderOnRotating: true\n        });\n        threeLayer.prepareToDraw = function (gl, scene, camera) {\n            var light = new THREE.DirectionalLight(0xffffff);\n            light.position.set(0, -10, 10).normalize();\n            scene.add(light);\n            scene.add(new THREE.AmbientLight(\'#fff\', 0.5));\n            animate();\n            addPolygon();\n\n        };\n        threeLayer.addTo(map);\n\n\n        function addPolygon() {\n            const material = new THREE.MeshLambertMaterial({ color: \'#fff\', transparent: true });\n            const extrudePolygons = [];\n            const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[108.9588646064086, 34.219978885705856], [108.95910091657608, 34.21999155943827], [108.95908997865132, 34.21962188029219], [108.95886762567669, 34.21963481298575], [108.9588646064086, 34.219978885705856]]] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [108.95898078182817, 34.21980678460552] } };\n\n            const building = threeLayer.toExtrudePolygon(f, { height: 60 }, material);\n\n            threeLayer.addMesh(building);\n        }\n\n        function animate() {\n            requestAnimationFrame(animate);\n            threeLayer._needsUpdate = !threeLayer._needsUpdate;\n            if (threeLayer._needsUpdate && !threeLayer.isRendering()) {\n                threeLayer.redraw();\n            }\n\n        }\n\n\n    <\/script>\n   </body>\n   </html>\n')))}u.isMDXComponent=!0}}]);