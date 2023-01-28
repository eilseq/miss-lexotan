import { PerspectiveCamera, Scene } from "three"
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js"

import { renderer } from "./renderer"
import { mesh } from "./mesh.js"

export const scene = new Scene()
scene.add(mesh)

export const camera = new PerspectiveCamera(75, 1, 0.1, 1000)

camera.position.z = 1
if (isFxpreview) {
  camera.position.z = 1.2
}

export const resetCamera = () => {
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

const controls = new TrackballControls(camera, renderer.domElement)

controls.rotateSpeed = 1.2
controls.zoomSpeed = 1.2
controls.noZoom = false
controls.dynamicDampingFactor = 0.05

export const updateControls = () => {
  controls.update()
}
