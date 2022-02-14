"use strict";(self.webpackChunkmaptalks_three_doc=self.webpackChunkmaptalks_three_doc||[]).push([[1617],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,h=k["".concat(p,".").concat(c)]||k[c]||u[c]||r;return a?l.createElement(h,i(i({ref:t},s),{},{components:a})):l.createElement(h,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3819:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],o={sidebar_position:6},p="BaseObject",m={unversionedId:"api/baseobject/base",id:"api/baseobject/base",title:"BaseObject",description:"If you are not familiar with maptalks, refer to its documentation.This will help you read the document maptalks docs",source:"@site/docs/api/baseobject/base.md",sourceDirName:"api/baseobject",slug:"/api/baseobject/base",permalink:"/maptalks.three.doc/build/docs/api/baseobject/base",editUrl:"https://github.com/deyihu/maptalks.three.doc/blob/main/docs/api/baseobject/base.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"BaseObject",permalink:"/maptalks.three.doc/build/docs/category/baseobject"},next:{title:"Custom",permalink:"/maptalks.three.doc/build/docs/api/baseobject/custom"}},s=[{value:"Source",id:"source",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"For Custom Methods",id:"for-custom-methods",children:[],level:2},{value:"Subclass",id:"subclass",children:[],level:2}],u={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"baseobject"},"BaseObject"),(0,r.kt)("p",null,"If you are not familiar with maptalks, refer to its documentation.This will help you read the document ",(0,r.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.js/api/0.x/Map.html"},"maptalks docs")),(0,r.kt)("p",null,"This is the base class for all 3D objects,Its function and maptalks.geometry are as similar as possible."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts"},"Bar"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts"},"ExtrudePolygon"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts"},"ExtrudeLine"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts"},"Line"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts"},"Model")," base on it"),(0,r.kt)("p",null,"If you're familiar with three.js. You can customize your own graphic elements based on it"),(0,r.kt)("p",null,"such as examples we provide ",(0,r.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/custom-circle.html"},"circle")," ,",(0,r.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/custom-fatline.html"},"fatline"),",",(0,r.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/custom-linetrip.html"},"linetrip"),",",(0,r.kt)("a",{parentName:"p",href:"https://maptalks.org/maptalks.three/demo/custom-linetrail.html"},"linetrail")),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maptalks/maptalks.three/blob/master/src/BaseObject.ts"},"source")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All subclasses will have baseobject options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"interactive:true ",(0,r.kt)("inlineCode",{parentName:"li"},"Allow interaction")),(0,r.kt)("li",{parentName:"ul"},"altitude:0"),(0,r.kt)("li",{parentName:"ul"},"minZoom:0 "),(0,r.kt)("li",{parentName:"ul"},"maxZoom:30 "),(0,r.kt)("li",{parentName:"ul"},"asynchronous:false ",(0,r.kt)("inlineCode",{parentName:"li"},"Using worker for asynchronous processing"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const OPTIONS = {\n    interactive: true,\n    altitude: 0,\n    minZoom: 0,\n    maxZoom: 30,\n    asynchronous: false\n};\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add"),(0,r.kt)("li",{parentName:"ul"},"remove"),(0,r.kt)("li",{parentName:"ul"},"mousemove"),(0,r.kt)("li",{parentName:"ul"},"click"),(0,r.kt)("li",{parentName:"ul"},"mousedown"),(0,r.kt)("li",{parentName:"ul"},"mouseup"),(0,r.kt)("li",{parentName:"ul"},"dblclick"),(0,r.kt)("li",{parentName:"ul"},"contextmenu"),(0,r.kt)("li",{parentName:"ul"},"touchstart"),(0,r.kt)("li",{parentName:"ul"},"touchmove"),(0,r.kt)("li",{parentName:"ul"},"touchend"),(0,r.kt)("li",{parentName:"ul"},"mouseover"),(0,r.kt)("li",{parentName:"ul"},"mouseout"),(0,r.kt)("li",{parentName:"ul"},"idchange"),(0,r.kt)("li",{parentName:"ul"},"propertieschange"),(0,r.kt)("li",{parentName:"ul"},"show"),(0,r.kt)("li",{parentName:"ul"},"hide"),(0,r.kt)("li",{parentName:"ul"},"symbolchange"),(0,r.kt)("li",{parentName:"ul"},"workerload ",(0,r.kt)("inlineCode",{parentName:"li"},"Only baseobjects that support asynchrony can be triggered,ExtrudeLine,ExtrudePolygon,ExtrudePolygons,ExtrudeLines,FatLine,FatLines,Line,Lines "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  baseObject.on('click',function(e){\n\n  });\n  baseObject.on('click add remove mousemove',function(e){\n\n  });\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on(eventsOn, handler, context)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventsOn ","[event types to register, seperated by space if more than one.]"),(0,r.kt)("li",{parentName:"ul"},"handler ","[handler function to be called]"),(0,r.kt)("li",{parentName:"ul"},"context ","[the context of the handler]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"   bar.on('click',function(e){\n\n   });\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"addEventListener(eventTypes, handler, context)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventTypes  [event types to register, seperated by space if more than one."),(0,r.kt)("li",{parentName:"ul"},"handler  ","[handler function to be called]"),(0,r.kt)("li",{parentName:"ul"},"context  ","[the context of the handler]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"once(eventTypes, handler, context)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventTypes  ","[event types to register, seperated by space if more than one.]"),(0,r.kt)("li",{parentName:"ul"},"handler  ","[handler function to be called]"),(0,r.kt)("li",{parentName:"ul"},"context  ","[the context of the handler]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"off(eventsOff, handler, contextopt)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventsOff  ","[event types to unregister, seperated by space if more than one.]"),(0,r.kt)("li",{parentName:"ul"},"handler  ","[handler function to be called]"),(0,r.kt)("li",{parentName:"ul"},"context  ","[the context of the handler]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"   bar.off('click',function(e){\n\n   });\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removeEventListener(eventTypes, handler, context)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventTypes  ","[event types to unregister, seperated by space if more than one.]"),(0,r.kt)("li",{parentName:"ul"},"handler  ","[handler function to be called]"),(0,r.kt)("li",{parentName:"ul"},"context  ","[the context of the handler]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fire(eventType, param)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eventType  ","[an event type to fire]"),(0,r.kt)("li",{parentName:"ul"},"param ","[parameters for the listener function.]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/Eventable.html"},"detail maptalks.Eventable"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getObject3d()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"THREE.Object3D"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getId()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"id"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setId(id) ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"id"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getType() ",(0,r.kt)("inlineCode",{parentName:"li"},"Get the type of graphic element"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"String"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const bar=threeLayer.toBar(...);\n  bar.getType()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getOptions() ",(0,r.kt)("inlineCode",{parentName:"li"},"Get configuration information of graphic elements"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getProperties() ",(0,r.kt)("inlineCode",{parentName:"li"},"Get attribute information of graphic elements"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setProperties(property) ",(0,r.kt)("inlineCode",{parentName:"li"},"set attribute information of graphic elements"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"property ","[this a Object]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getLayer()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"ThreeLayer"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getMap()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getCenter()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Coordinate"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getAltitude() ",(0,r.kt)("inlineCode",{parentName:"li"},"Get the elevation of the graphic element"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Number"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setAltitude(altitude) ",(0,r.kt)("inlineCode",{parentName:"li"},"set the elevation of the graphic element"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"altitude  ","[elevation value]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize your own graphic elements, you may override this method."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"show()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hide()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"isVisible()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getSymbol()  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"THREE.Material")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize your own graphic elements, you may override this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setSymbol(material)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize your own graphic elements, you may override this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setInfoWindow(options)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"options [infowindow config ,",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html"},"detail"),"]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nbar.setInfoWindow({\n    content: 'hello world,height:' + d.height * 400,\n    title: 'message',\n    animationDuration: 0,\n    autoOpenOn: false\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getInfoWindow()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"ui.InfoWindow"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"openInfoWindow(coordinate)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"coordinate ","[infowindow position]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"closeInfoWindow()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removeInfoWindow()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setToolTip(content, options)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"content ","[tooltip content]"),(0,r.kt)("li",{parentName:"ul"},"options [tooltip cofig  ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.js/api/0.x/ui.ToolTip.html"},"detail"),"]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bar.setToolTip(d.height * 400, {\n    showTimeout: 0,\n    eventsPropagation: true,\n    dx: 10\n});\n\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getToolTip()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"ui.ToolTip"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"openToolTip(coordinate)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"coordinate ","[tooltip position]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"closeToolTip()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removeToolTip()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"animateShow(options = {}, cb)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"options ","[animation config]"),(0,r.kt)("li",{parentName:"ul"},"options.duration"),(0,r.kt)("li",{parentName:"ul"},"options.easing"),(0,r.kt)("li",{parentName:"ul"},"cb ","[callback function]","  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize your own graphic elements, you may need to override this method to delayed display of graphics")),(0,r.kt)("li",{parentName:"ul"},"such as ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-circle.html"},"circle"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," animationShow(options = {}, cb) {\n                if (this._showPlayer) {\n                    this._showPlayer.cancel();\n                }\n                if (maptalks.Util.isFunction(options)) {\n                    options = {};\n                    cb = options;\n                }\n                const duration = options['duration'] || 1000,\n                    easing = options['easing'] || 'out';\n                const player = this._showPlayer = maptalks.animation.Animation.animate({\n                    'scale': 1\n                }, {\n                    'duration': duration,\n                    'easing': easing\n                }, frame => {\n                    const scale = frame.styles.scale;\n                    if (scale > 0) {\n                        this.getObject3d().scale.set(scale, scale, scale);\n                    }\n                    if (cb) {\n                        cb(frame, scale);\n                    }\n                });\n                player.play();\n                return player;\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getMinZoom()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Number"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getMaxZaoom()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Number"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"isAsynchronous()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"))))),(0,r.kt)("h2",{id:"for-custom-methods"},"For Custom Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setPickObject3d(object3d: THREE.Object3D)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if you want to customize your own graphic elements and have your own hit detection implementation,this is for GPU PICK")),(0,r.kt)("li",{parentName:"ul"},"such as ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-gpupick.html"},"custom-gpupick"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"identify(coordinate) ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"coordinate ","[Coordinate]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"You need to add this method if you want to customize your own graphic elements and have your own hit detection implementation(By default, the detection of graphics is provided by Raycaster)")),(0,r.kt)("li",{parentName:"ul"},"such as ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-fatline.html"},"fatline"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_initOptions(options)  ",(0,r.kt)("inlineCode",{parentName:"li"},"Initialize internal configuration information"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"options"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"),". such as examples we provide ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-circle.html"},"circle"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    class Circle extends maptalks.BaseObject {\n                constructor(coordinate, options, material, layer) {\n                    options = maptalks.Util.extend({}, OPTIONS, options, { layer, coordinate });\n                    super();\n                    //Initialize internal configuration\n                    // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L135\n                    this._initOptions(options);\n                    const { altitude, radius } = options;\n                    //generate geometry\n                    const r = layer.distanceToVector3(radius, radius).x\n                    const geometry = new THREE.CircleBufferGeometry(r, 50);\n\n                    //Initialize internal object3d\n                    // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L140\n                    this._createMesh(geometry, material);\n\n                    //set object3d position\n                    const z = layer.distanceToVector3(altitude, altitude).x;\n                    const position = layer.coordinateToVector3(coordinate, z);\n                    this.getObject3d().position.copy(position);\n                    this.getObject3d().rotation.x = -Math.PI;\n                }\n    }\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_createMesh(geometry, material)   ",(0,r.kt)("inlineCode",{parentName:"li"},"Creating THREE.Mesh objects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"geometry ","[THREE.BufferGeometry]"),(0,r.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_createGroup()  ",(0,r.kt)("inlineCode",{parentName:"li"},"Creating THREE.Group objects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_createLine(geometry, material)  ",(0,r.kt)("inlineCode",{parentName:"li"},"Creating THREE.Line objects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"geometry ","[THREE.BufferGeometry]"),(0,r.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_createLineSegments(geometry, material)  ",(0,r.kt)("inlineCode",{parentName:"li"},"Creating THREE.LineSegments objects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"geometry ","[THREE.BufferGeometry]"),(0,r.kt)("li",{parentName:"ul"},"material ","[THREE.Material]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_createPoints(geometry, material)  ",(0,r.kt)("inlineCode",{parentName:"li"},"Creating THREE.Points objects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"geometry ","[THREE.BufferGeometry]"),(0,r.kt)("li",{parentName:"ul"},"material ","[THREE.PointsMaterial]"),(0,r.kt)("li",{parentName:"ul"},"return ",(0,r.kt)("inlineCode",{parentName:"li"},"this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize the graphics, you will use this method"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_animation()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you customize graphics and want them to perform circular animation, you need to implement the function of this method"),",such as ",(0,r.kt)("a",{parentName:"li",href:"https://maptalks.org/maptalks.three/demo/custom-linetrail.html"},"linetrail"))))),(0,r.kt)("h2",{id:"subclass"},"Subclass"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All subclasses will have baseobject methods and options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Bar.ts"},"Bar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Bars.ts"},"Bars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Box.ts"},"Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Boxs.ts"},"Boxs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLine.ts"},"ExtrudeLine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLines.ts"},"ExtrudeLines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudeLineTrail.ts"},"ExtrudeLineTrail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygon.ts"},"ExtrudePolygon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/ExtrudePolygons.ts"},"ExtrudePolygons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/FatLine.ts"},"FatLine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/FatLines.ts"},"FatLines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/HeatMap.ts"},"HeatMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Line.ts"},"Line")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Lines.ts"},"Lines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Model.ts"},"Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Point.ts"},"Point")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Points.ts"},"Points")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/maptalks/maptalks.three/blob/master/src/Terrain.ts"},"Terrain"))))}k.isMDXComponent=!0}}]);