import { assert } from './UnitTest.js'
import { NATIVE_ENDIANNESS, BIG_ENDIAN } from '../src/bits.js'
import { sizeof, stream, write, uint32, uint32le, uint32be } from '../src/index.js'

export function public_write() {

    {
        const buf = new ArrayBuffer(sizeof(uint32))
        write(stream(buf), uint32, 0x11223344)
        const u8vec = new Uint8Array(buf)
        assert(u8vec.join(','), (NATIVE_ENDIANNESS === BIG_ENDIAN ? [0x11,0x22,0x33,0x44].join(',') : [0x44,0x33,0x22,0x11].join(',')), 'A01')
        write(stream(buf), uint32be, 0x11223344)
        assert(u8vec.join(','), [0x11,0x22,0x33,0x44].join(','), 'A02')
        write(stream(buf), uint32le, 0x11223344)
        assert(u8vec.join(','), [0x44,0x33,0x22,0x11].join(','), 'A03')
    }
}
