---
sidebar_position: 1
---

# GeoJSONUtil

**Provides a simple [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)  method** 


## Methods
* isGeoJSON(geojsonFeature) 
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Boolean`



* isGeoJSONPolygon(geojsonFeature) 
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Boolean`



* isGeoJSONLine(geojsonFeature)
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Boolean`




* isGeoJSONPoint(geojsonFeature) ``
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Boolean`



* isGeoJSONMulti(geojsonFeature) `MultiPoint/MultiLineString/MultiPolygon`
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Boolean`




* getGeoJSONCoordinates(geojsonFeature) ``
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Array<Coordiantes>|Array<Array<Coordiantes>>|Array<Array<Array<Coordiantes>>>|Array<Array<Array<Array<Coordiantes>>>>`




* getGeoJSONCenter(geojsonFeature) `Center is the center of gravity`
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `maptalks.Coordiante`
```js
const multiPolygon={
    .......
}

const center=GeoJSONUtil.getGeoJSONCenter(multiPolygon);

```



* spliteGeoJSONMulti(geojsonFeature) `split multi geojson to single geojson`
  * geojsonFeature `GeoJSON Feature,Point/LineString/......`
  * return  `Array<GeoJSONFeature>`


```js
const multiPolygon={
    .......
}

const polygons=GeoJSONUtil.spliteGeoJSONMulti(multiPolygon);

```
