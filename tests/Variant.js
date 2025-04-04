import { assert } from './UnitTest.js'
import Variant from './types/Variant.js'
import sizeof from '../src/sizeof.js'

export function structs_Variant() {

    assert(sizeof(Variant), undefined, 'A01')
    assert(sizeof(Variant, { containerType: 1, value: 1 }), 2, 'A02')
    assert(sizeof(Variant, { containerType: 2, value: 1 }), 3, 'A03')
    assert(sizeof(Variant, { containerType: 3, value: 1 }), 5, 'A04')
    assert(sizeof(Variant, { containerType: 4, value: 1 }), 9, 'A05')
    assert(sizeof(Variant, { containerType: 5, value: 1 }), 2, 'A06')
    assert(sizeof(Variant, { containerType: 6, value: 1 }), 3, 'A07')
    assert(sizeof(Variant, { containerType: 7, value: 1 }), 5, 'A08')
    assert(sizeof(Variant, { containerType: 8, value: 1 }), 9, 'A09')
    assert(sizeof(Variant, { containerType: 9, value: 1 }), 5, 'A10')
    assert(sizeof(Variant, { containerType: 10, value: 1 }), 9, 'A11')
}
