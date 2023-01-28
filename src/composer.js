import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"

import { renderer } from "./renderer"
import { scene, camera } from "./pipeline"
import { vhsMaterial } from "./vhs"

const renderPass = new RenderPass(scene, camera)
const vhsPass = new ShaderPass(vhsMaterial)

const composer = new EffectComposer(renderer)
composer.addPass(renderPass)
composer.addPass(vhsPass)

export const composeFrame = () => {
  composer.render(scene, camera)
}
