import { assert } from './UnitTest.js'
import { NATIVE_ENDIANNESS, LITTLE_ENDIAN, BIG_ENDIAN } from '../src/bits.js'
import { stream, read, uint32, uint32le, uint32be } from '../src/index.js'

export function public_read() {

    {
        const u8vec = new Uint8Array([0x11,0x22,0x33,0x44])
        const buf = u8vec.buffer

        assert(read(stream(buf), uint32), (NATIVE_ENDIANNESS === BIG_ENDIAN ? 0x11223344 : 0x44332211), 'A01')
        assert(read(stream(buf), uint32le), 0x44332211, 'A02')
        assert(read(stream(buf), uint32be), 0x11223344, 'A03')

        assert(read(stream(buf), uint32, LITTLE_ENDIAN), 0x44332211, 'B01')
        assert(read(stream(buf), uint32, BIG_ENDIAN), 0x11223344, 'B02')

        assert(read(stream(buf), uint32le, LITTLE_ENDIAN), 0x44332211, 'C01')
        assert(read(stream(buf), uint32le, BIG_ENDIAN), 0x11223344, 'C02')

        assert(read(stream(buf), uint32be, LITTLE_ENDIAN), 0x44332211, 'D01')
        assert(read(stream(buf), uint32be, BIG_ENDIAN), 0x11223344, 'D02')
    }
}
