import { uint8, struct } from '../../src/index.js'

const RGBAColor = struct({
    r: uint8,
    g: uint8,
    b: uint8,
    a: uint8,
})

export default RGBAColor
