import { uint8, struct, computed } from '../../src/index.js'

export const RGBASuit = s => {
    const at = i => computed(
        () => s.values[i],
        (v) => { s.values[i] = v }
    )
    return {
        r: at(0),
        g: at(1),
        b: at(2),
        a: at(3),
        get __type__() { return 'RGBA<Vector4<uint8[4]>>' },
        get __source__() { return s }
    }
}

const Vector4 = struct({
    values: uint8[4]
})

export default Vector4
