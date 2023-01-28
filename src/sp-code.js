let complexity = Math.pow(fxrand(), 1 / 2)
complexity = complexity > 1 || complexity <= 0 ? 1 : complexity

let shape = Math.floor(fxrand() * 4)
if (shape === 0) {
  shape = "torus(0.2, 0.2)"
} else if (shape === 1) {
  shape = "torus(0.25, 0.2)"
} else if (shape === 2) {
  shape = "torus(0.35, 0.2)"
} else {
  shape = "sphere(0.4, 0.2)"
}

const x = fxrand() - 1
const y = fxrand() - 1
const z = fxrand() - 1

const chaos = Math.pow(fxrand(), 4) / 2
const pulse = Math.pow(fxrand(), 4) * 4
const color = 8 * Math.pow(fxrand(), fxrand())

window.$fxhashFeatures = {
  shape,
  chaos,
  complexity,
  pulse,
  color,
}

export default `
  const scale = 15

  rotateX(${x} + time / 10)
  rotateY(${y} + time / 10)
  rotateZ(${z} + time / 10)

  setStepSize(0.91)
  setMaxIterations(13)

  const s = getSpace()

  rotateX(PI / 2)

  const n = ${chaos} * noise(scale * s)
  const rtp = getSpherical(getSpace()) * ${complexity}
  const verticalLines = sin(60 * rtp.z + n * 150)
  const endsDampen = sin(rtp.y)

  const n2 = noise(
    getRayDirection() +
      verticalLines * pow(endsDampen, 1.3) +
      vec3(0, time * 1.62 * ${pulse}, 1)
  )
  occlusion(0.2)

  color(pow(vec3(n2) + s * 0.25 * ${color} + 0.25, vec3(7)))

  ${shape}
  sphere(0.1)

  expand((n2 * 0.04) / sin(time*4))
`
