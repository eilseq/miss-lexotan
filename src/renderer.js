import { Color, WebGLRenderer } from "three"

export const renderer = new WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true,
})

renderer.setSize(1080, 1080)
renderer.setClearColor(new Color(1, 1, 1), 1)
document.body.appendChild(renderer.domElement)

export const setSize = (size) => {
  renderer.setSize(size, size)
}

export const setRatio = (ratio) => {
  renderer.setPixelRatio(ratio)
}
