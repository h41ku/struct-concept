import { assert } from './UnitTest.js'
import { LITTLE_ENDIAN, BIG_ENDIAN } from '../src/bits.js'
import { sizeof, stream, read, write } from '../src/index.js'
import ListOfNulTerminatedStrings from './types/ListOfNulTerminatedStrings.js'
import NulTerminatedVariants from './types/NulTerminatedVariants.js'

export function structs_io() {

    const structToBuffer = (Type, data, endianness) => {
        const buf = new ArrayBuffer(sizeof(Type, data))
        write(stream(buf), Type, data, endianness)
        return buf
    }

    const bufferToStruct = (buf, Type, endianness) => read(stream(buf), Type, endianness)

    {
        const buf = structToBuffer(ListOfNulTerminatedStrings, { numItems: 4, items: [ 'Привет', ', ', 'Мир', '!' ] }, BIG_ENDIAN)
        assert(new Uint8Array(buf).join(','), '0,0,0,4,208,159,209,128,208,184,208,178,208,181,209,130,0,44,32,0,208,156,208,184,209,128,0,33,0', 'A01')
        assert(JSON.stringify(bufferToStruct(buf, ListOfNulTerminatedStrings, BIG_ENDIAN)), '{"numItems":4,"items":["Привет",", ","Мир","!"]}', 'A02')
    }

    {
        const buf = structToBuffer(ListOfNulTerminatedStrings, { numItems: 4, items: [ 'Привет', ', ', 'Мир', '!' ] }, LITTLE_ENDIAN)
        assert(new Uint8Array(buf).join(','), '4,0,0,0,208,159,209,128,208,184,208,178,208,181,209,130,0,44,32,0,208,156,208,184,209,128,0,33,0', 'B01')
        assert(JSON.stringify(bufferToStruct(buf, ListOfNulTerminatedStrings, LITTLE_ENDIAN)), '{"numItems":4,"items":["Привет",", ","Мир","!"]}', 'B02')
    }

    {
        const buf = structToBuffer(NulTerminatedVariants, [ { containerType: 1, value: 123 }, { containerType: 2, value: -1963 }, { containerType: 0 } ], BIG_ENDIAN)
        assert(new Uint8Array(buf).join(','), '1,123,2,248,85,0', 'C01')
        assert(JSON.stringify(bufferToStruct(buf, NulTerminatedVariants, BIG_ENDIAN)), '[{"containerType":1,"value":123},{"containerType":2,"value":-1963},{"containerType":0}]', 'C02')
    }

    {
        const buf = structToBuffer(NulTerminatedVariants, [ { containerType: 1, value: 123 }, { containerType: 2, value: -1963 }, { containerType: 0 } ], LITTLE_ENDIAN)
        assert(new Uint8Array(buf).join(','), '1,123,2,85,248,0', 'D01')
        assert(JSON.stringify(bufferToStruct(buf, NulTerminatedVariants, LITTLE_ENDIAN)), '[{"containerType":1,"value":123},{"containerType":2,"value":-1963},{"containerType":0}]', 'D02')
    }
}
