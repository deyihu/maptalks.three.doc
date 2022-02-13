---
sidebar_position: 6
---

# Share WebGL Context

If you want to share threelayer's webgl context, you need the [@maptalks/gl](https://www.npmjs.com/package/@maptalks/gl) plugin,[Share Webgl Context Example](https://maptalks.org/maptalks.three/demo/shared-webgl-context.html)

```js

     // the ThreeLayer to draw buildings
        var threeLayer = new maptalks.ThreeLayer('t', {
            identifyCountOnEvent: 1,
            // forceRenderOnMoving: true,
            // forceRenderOnRotating: true
        });
        threeLayer.prepareToDraw = function (gl, scene, camera) {
            var light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, -10, 10).normalize();
            scene.add(light);
            scene.add(new THREE.AmbientLight('#fff', 0.5));
            // animate();
            // addPolygon();

        };
      const sceneConfig = {
            postProcess: {
                enable: true,
                antialias: { enable: true }
            }
        };
        const groupLayer = new maptalks.GroupGLLayer('group', [geo3DTilesLayer, threeLayer,...otherLayer], {sceneConfig });
        groupLayer.addTo(map);
```