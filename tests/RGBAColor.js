
import { assert } from './UnitTest.js'
import RGBAColor from './types/RGBAColor.js'
import sizeof from '../src/sizeof.js'

export function structs_RGBAColor() {

    assert(sizeof(RGBAColor), 4, 'A01')
    assert(sizeof(RGBAColor, { r: 10, g: 20, b: 30, a: 40 }), 4, 'A02')
    assert(sizeof(RGBAColor[2]), 8, 'A03')
}
