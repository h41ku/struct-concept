import { assert } from './UnitTest.js'
import { int8, int16, int32, int64, uint8, uint16, uint32, uint64, float32, float64, struct } from '../src/index.js'
import { isStruct } from '../src/symbols.js'

export function private_isStruct() {

    assert(int8[isStruct], false, 'A01')
    assert(int16[isStruct], false, 'A02')
    assert(int32[isStruct], false, 'A03')
    assert(int64[isStruct], false, 'A04')
    assert(uint8[isStruct], false, 'A05')
    assert(uint16[isStruct], false, 'A06')
    assert(uint32[isStruct], false, 'A07')
    assert(uint64[isStruct], false, 'A08')
    assert(float32[isStruct], false, 'A09')
    assert(float64[isStruct], false, 'A10')

    assert(int8[5][isStruct], false, 'B01')
    assert(int16[5][isStruct], false, 'B02')
    assert(int32[5][isStruct], false, 'B03')
    assert(int64[5][isStruct], false, 'B04')
    assert(uint8[5][isStruct], false, 'B05')
    assert(uint16[5][isStruct], false, 'B06')
    assert(uint32[5][isStruct], false, 'B07')
    assert(uint64[5][isStruct], false, 'B08')
    assert(float32[5][isStruct], false, 'B09')
    assert(float64[5][isStruct], false, 'B10')

    assert(struct({ x: float32, y: float32 })[isStruct], true, 'C01')
    assert(struct({ x: float32, y: float32 })[10][isStruct], false, 'C02')
}
