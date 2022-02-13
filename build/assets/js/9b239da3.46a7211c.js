"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[480],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),h=a,y=f["".concat(l,".").concat(h)]||f[h]||u[h]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3279:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:6},l="Share WebGL Context",p={unversionedId:"api/threelayer/sharecontext",id:"api/threelayer/sharecontext",title:"Share WebGL Context",description:"If you want to share threelayer's webgl context, you need the @maptalks/gl plugin,Share Webgl Context Example",source:"@site/docs/api/threelayer/sharecontext.md",sourceDirName:"api/threelayer",slug:"/api/threelayer/sharecontext",permalink:"/build/docs/api/threelayer/sharecontext",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/api/threelayer/sharecontext.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"ThreeLayer",permalink:"/build/docs/api/threelayer/base"}},s=[],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"share-webgl-context"},"Share WebGL Context"),(0,o.kt)("p",null,"If you want to share threelayer's webgl context, you need the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@maptalks/gl"},"@maptalks/gl")," plugin,",(0,o.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/shared-webgl-context.html"},"Share Webgl Context Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n     // the ThreeLayer to draw buildings\n        var threeLayer = new maptalks.ThreeLayer('t', {\n            identifyCountOnEvent: 1,\n            // forceRenderOnMoving: true,\n            // forceRenderOnRotating: true\n        });\n        threeLayer.prepareToDraw = function (gl, scene, camera) {\n            var light = new THREE.DirectionalLight(0xffffff);\n            light.position.set(0, -10, 10).normalize();\n            scene.add(light);\n            scene.add(new THREE.AmbientLight('#fff', 0.5));\n            // animate();\n            // addPolygon();\n\n        };\n      const sceneConfig = {\n            postProcess: {\n                enable: true,\n                antialias: { enable: true }\n            }\n        };\n        const groupLayer = new maptalks.GroupGLLayer('group', [geo3DTilesLayer, threeLayer,...otherLayer], {sceneConfig });\n        groupLayer.addTo(map);\n")))}f.isMDXComponent=!0}}]);