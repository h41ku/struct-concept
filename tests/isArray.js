import { assert } from './UnitTest.js'
import isArray from '../src/isArray.js'

export function helpers_isArray() {

    const vec = [11,22,33]
    const u8vec = new Uint8Array(4)
    
    assert(Array.isArray(vec), true, 'A01')
    assert(Array.isArray(u8vec), false, 'A02')
    assert(isArray(vec), true, 'B01')
    assert(isArray(u8vec), true, 'B02')
}
