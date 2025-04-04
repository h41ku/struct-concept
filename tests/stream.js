import { assert } from './UnitTest.js'
import { stream } from '../src/index.js'

export function public_stream() {

    const s = stream(new ArrayBuffer(4))
    assert(s.offset, 0, 'A01')
    assert(s.eof, false, 'A02')
    s.offset += 2
    assert(s.offset, 2, 'B01')
    assert(s.eof, false, 'B02')
    s.offset ++
    assert(s.offset, 3, 'C01')
    assert(s.eof, false, 'C02')
    s.offset ++
    assert(s.offset, 4, 'D01')
    assert(s.eof, true, 'D02')
    s.offset += 2
    assert(s.offset, 6, 'E01')
    assert(s.eof, true, 'E02')
}
