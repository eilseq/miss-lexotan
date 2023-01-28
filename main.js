import { setSize, setRatio } from "./src/renderer"
import { composeFrame } from "./src/composer"
import { resetCamera, updateControls } from "./src/pipeline"

import { vhsMaterial } from "./src/vhs"
import { fxcolor } from "./src/rand"

import "./src/malware"
import "./style.css"

const modes = ["multiply", "difference", "difference", "difference"]
const mode = modes[Math.floor(modes.length * fxrand())]

document.querySelector(":root").style.setProperty("--bgColor", fxcolor())
document.querySelector(":root").style.setProperty("--blend", mode)

let render, control
render = setInterval(() => {
  updateControls()
  composeFrame()
}, 1000 / 25)
control = setInterval(updateControls, 30)

setRatio(1)

const getVMax = () => {
  const { innerWidth: w, innerHeight: h } = window
  const isLandscape = w > h
  return isLandscape ? w : h
}
setSize(getVMax())

window.addEventListener("resize", () => {
  setSize(getVMax())
  setRatio()
  resetCamera()
})

setInterval(() => {
  vhsMaterial.uniforms.uNoiseIntensity.value = 0.1 + Math.random() * 0.2
  vhsMaterial.uniforms.uScanlineIntensity.value = Math.random() * 0.07
}, 60)

document.addEventListener("mousemove", () => {
  vhsMaterial.uniforms.uNoiseIntensity.value += Math.random()
  vhsMaterial.uniforms.uNoiseIntensity.value -= Math.random()

  vhsMaterial.uniforms.uScanlineIntensity.value += Math.random() * 0.1
  vhsMaterial.uniforms.uScanlineIntensity.value -= Math.random() * 0.1

  vhsMaterial.uniforms.uColorShiftIntensity.value += Math.random()
  vhsMaterial.uniforms.uColorShiftIntensity.value -= Math.random()
})
