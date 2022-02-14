"use strict";(self.webpackChunkmaptalks_three_doc=self.webpackChunkmaptalks_three_doc||[]).push([[5832],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2397:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},m="MergeGeometryUtil",p={unversionedId:"api/others/MergeGeometryUtil",id:"api/others/MergeGeometryUtil",title:"MergeGeometryUtil",description:"Provides a simple geometries merge method",source:"@site/docs/api/others/MergeGeometryUtil.md",sourceDirName:"api/others",slug:"/api/others/MergeGeometryUtil",permalink:"/maptalks.three.doc/build/docs/api/others/MergeGeometryUtil",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/api/others/MergeGeometryUtil.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"MergedMixin",permalink:"/maptalks.three.doc/build/docs/api/others/MergedMixin"},next:{title:"GeoJSONUtil",permalink:"/maptalks.three.doc/build/docs/api/others/GeoJSONUtil"}},s=[{value:"Methods",id:"methods",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mergegeometryutil"},"MergeGeometryUtil"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Provides a simple geometries merge method")," "),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mergeBufferGeometries(geometries) ",(0,i.kt)("inlineCode",{parentName:"li"},"merge Buffer Geometries Attibutes. uv,position,normal,indices"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"geometries ",(0,i.kt)("inlineCode",{parentName:"li"},"Array[Object]")),(0,i.kt)("li",{parentName:"ul"},"return  ",(0,i.kt)("inlineCode",{parentName:"li"},"THREE.BufferGeometry"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nconst geometries = [];\nfor (let i = 0, len = 1000; i < len; i++) {\n    ....\n    geometries.push({\n        position: position.array,\n        normal: normal.array,\n        uv: uv.array,\n        indices: index.array\n    });\n}\nconst bufferGeometry=MergeGeometryUtil.mergeBufferGeometries(geometries);\n\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/custom-mergedmixin.html"},"custom-mergedmixin")))}u.isMDXComponent=!0}}]);