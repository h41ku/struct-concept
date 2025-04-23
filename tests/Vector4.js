import { assert } from './UnitTest.js'
import Vector4, { RGBASuit } from './types/Vector4.js'
import sizeof from '../src/sizeof.js'
import suit from '../src/suit.js'

export function structs_Vector4() {

    assert(sizeof(Vector4), 4, 'A01')
    assert(sizeof(Vector4[2]), 8, 'A02')

    const color = suit(RGBASuit, { values: [10,20,30,40] })

    assert(color.values[0], 10, 'B01')
    assert(color.values[1], 20, 'B02')
    assert(color.values[2], 30, 'B03')
    assert(color.values[3], 40, 'B04')

    assert(color.r, 10, 'C01')
    assert(color.g, 20, 'C02')
    assert(color.b, 30, 'C03')
    assert(color.a, 40, 'C04')

    assert(color.__type__, 'RGBA<Vector4<uint8[4]>>', 'D01')

    color.values[2] = 50
    assert(color.b, 50, 'E01')

    assert(color.__source__, color, 'F01')
    assert(color.__source__.values, color.values, 'F02')

    assert(sizeof(Vector4, color), 4, 'G01')
}
