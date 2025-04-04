import { assert } from './UnitTest.js'
import NulTerminatedVariants from './types/NulTerminatedVariants.js'
import sizeof from '../src/sizeof.js'

export function structs_NulTerminatedVariants() {

    assert(sizeof(NulTerminatedVariants), undefined, 'A01')
    assert(sizeof(NulTerminatedVariants, [ { containerType: 1, value: 123 }, { containerType: 2, value: 456789 }, { containerType: 0 } ]), 6, 'A02')
}
