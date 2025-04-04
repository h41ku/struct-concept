import { assert } from './UnitTest.js'
import { int8, int16, int32, int64, uint8, uint16, uint32, uint64, float32, float64, struct } from '../src/index.js'
import { isVector } from '../src/symbols.js'

export function private_isVector() {

    assert(int8[isVector], false, 'A01')
    assert(int16[isVector], false, 'A02')
    assert(int32[isVector], false, 'A03')
    assert(int64[isVector], false, 'A04')
    assert(uint8[isVector], false, 'A05')
    assert(uint16[isVector], false, 'A06')
    assert(uint32[isVector], false, 'A07')
    assert(uint64[isVector], false, 'A08')
    assert(float32[isVector], false, 'A09')
    assert(float64[isVector], false, 'A10')

    assert(int8[5][isVector], true, 'B01')
    assert(int16[5][isVector], true, 'B02')
    assert(int32[5][isVector], true, 'B03')
    assert(int64[5][isVector], true, 'B04')
    assert(uint8[5][isVector], true, 'B05')
    assert(uint16[5][isVector], true, 'B06')
    assert(uint32[5][isVector], true, 'B07')
    assert(uint64[5][isVector], true, 'B08')
    assert(float32[5][isVector], true, 'B09')
    assert(float64[5][isVector], true, 'B10')

    assert(struct({ x: float32, y: float32 })[isVector], false, 'C01')
    assert(struct({ x: float32, y: float32 })[10][isVector], true, 'C02')
}
