import { sculptToThreeJSMesh } from "shader-park-core"

import spCode from "./sp-code"

export const mesh = sculptToThreeJSMesh(spCode, () => ({
  ...params,
  ...pos,
}))

setInterval(() => {
  mesh.material.uniforms.time.value += 0.01
}, 1000 / 25)
