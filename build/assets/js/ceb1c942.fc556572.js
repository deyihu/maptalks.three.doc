"use strict";(self.webpackChunkmaptalks_three_doc=self.webpackChunkmaptalks_three_doc||[]).push([[581],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Custom",l={unversionedId:"api/baseobject/custom",id:"api/baseobject/custom",title:"Custom",description:"If maptalks Three's built-in baseobject can't meet your business needs. You can customize your own graphic components. This is maptalks Three features",source:"@site/docs/api/baseobject/custom.md",sourceDirName:"api/baseobject",slug:"/api/baseobject/custom",permalink:"/maptalks.three.doc/build/docs/api/baseobject/custom",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/api/baseobject/custom.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"BaseObject",permalink:"/maptalks.three.doc/build/docs/api/baseobject/base"},next:{title:"ThreeLayer",permalink:"/maptalks.three.doc/build/docs/category/threelayer"}},m=[{value:"Custom  BaseObject",id:"custom--baseobject",children:[],level:2},{value:"Custom Animation",id:"custom-animation",children:[],level:2},{value:"Reuse geometry",id:"reuse-geometry",children:[],level:2},{value:"More Custom Examples",id:"more-custom-examples",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom"},"Custom"),(0,o.kt)("p",null,"If maptalks Three's built-in baseobject can't meet your business needs. You can customize your own graphic components. This is maptalks Three features"),(0,o.kt)("h2",{id:"custom--baseobject"},"Custom  BaseObject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"     import * maptalks from 'maptalks';\n     import * as THREE from 'three';\n     import {BaseObject } from 'maptalks.three'\n\n    const OPTIONS={\n        ...\n    };\n\n    class Circle extends BaseObject {\n            constructor(coordinate, options, material, layer) {\n                options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });\n                super();\n                //Initialize internal configuration\n                this._initOptions(options);\n                const { altitude, radius } = options;\n                //generate geometry\n                const r = layer.distanceToVector3(radius, radius).x\n                const geometry = new THREE.CircleBufferGeometry(r, 50);\n\n                //Initialize internal object3d\n                this._createMesh(geometry, material);\n                //set object3d position\n                const z = layer.distanceToVector3(altitude, altitude).x;\n                const position = layer.coordinateToVector3(coordinate, z);\n                this.getObject3d().position.copy(position);\n                // this.getObject3d().rotation.x = -Math.PI;\n            }\n\n")),(0,o.kt)("h2",{id:"custom-animation"},"Custom Animation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"     import * maptalks from 'maptalks';\n     import * as THREE from 'three';\n     import {BaseObject } from 'maptalks.three'\n\n    const OPTIONS={\n        ...\n    };\n\n    class Circle extends BaseObject {\n            constructor(coordinate, options, material, layer) {\n                options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });\n                super();\n                //Initialize internal configuration\n                this._initOptions(options);\n                const { altitude, radius } = options;\n                //generate geometry\n                const r = layer.distanceToVector3(radius, radius).x\n                const geometry = new THREE.CircleBufferGeometry(r, 50);\n\n                //Initialize internal object3d\n                this._createMesh(geometry, material);\n                //set object3d position\n                const z = layer.distanceToVector3(altitude, altitude).x;\n                const position = layer.coordinateToVector3(coordinate, z);\n                this.getObject3d().position.copy(position);\n                this._scale = 1;\n            }\n\n              // test animation\n            //   This function will be looped indefinitely\n            _animation() {\n                this._scale = (this._scale > 1 ? 0 : this._scale);\n                this._scale += 0.02;\n                this.getObject3d().scale.set(this._scale, this._scale, this._scale);\n            }\n\n")),(0,o.kt)("h2",{id:"reuse-geometry"},"Reuse geometry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//json is geojson \n const data = json.features.slice(0, 10000).map(function (dataItem) {\n                    return {\n                        coordinate: dataItem.geometry.coordinates,\n                        height: Math.random() * 200,\n                        value: Math.random() * 10000,\n                        radius: 5 + 5 * Math.random(),\n                        topColor: '#fff',\n                        interactive: false\n                    }\n  });\n const material = new THREE.MeshLambertMaterial({ color: '#fff', transparent: true, opacity: 1 });\n const barCache = threeLayer.toBox(data[0].coordinate, data[0], material);\n const bars=data.map(d=>{\n    return getBar(d);\n });\n threeLayer.addMesh(bars);\n\n function getBar(options) {\n            const { radius, height } = barCache.getOptions();\n            const geometry = barCache.getObject3d().geometry;\n            const scaleR = options.radius / radius, scaleH = options.height / height;\n            const bar = new maptalks.BaseObject();\n            bar._initOptions(Object.assign({}, barCache.getOptions(), options));\n            // Reuse geometry,Multiple meshes share a geometry, which can have better performance and occupy less memory\n            bar._createMesh(geometry, material);\n            bar.getObject3d().scale.set(scaleR, scaleR, scaleH);\n            const { altitude, coordinate } = options;\n            const layer = barCache.getLayer();\n            const z = layer.distanceToVector3(altitude, altitude).x;\n            const position = layer.coordinateToVector3(coordinate, z);\n            bar.getObject3d().position.copy(position);\n            return bar;\n\n        }\n\n")),(0,o.kt)("h2",{id:"more-custom-examples"},"More Custom Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-arcline.html"},"arcline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-arcline-animation.html"},"custom-arcline-animation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-circle.html"},"custom-circle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-fatline.html"},"custom-fatline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-spriteline.html"},"custom-spriteline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-world-point-map.html"},"custom-world-point-map")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-electricShield.html"},"custom-electricShield"))))}u.isMDXComponent=!0}}]);