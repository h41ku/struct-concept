import { assert } from './UnitTest.js'
import utf8 from './encoders/utf8.js'

export function encoders_utf8() {

    assert([ ...utf8.toUint8Array('Привет!') ].join(','), '208,159,209,128,208,184,208,178,208,181,209,130,33,0', 'A01')
    assert(utf8.fromUint8Array(utf8.toUint8Array('Привет!')), 'Привет!', 'A02')

    assert([ ...utf8.toUint8Array('Привет') ].join(','), '208,159,209,128,208,184,208,178,208,181,209,130,0', 'B01')
    assert([ ...utf8.toUint8Array('Мир') ].join(','), '208,156,208,184,209,128,0', 'B02')
}
