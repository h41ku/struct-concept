import { assert } from './UnitTest.js'
import NulTerminatedString from './types/NulTerminatedString.js'
import sizeof from '../src/sizeof.js'

export function structs_NulTerminatedString() {

    assert(sizeof(NulTerminatedString), undefined, 'A01')
    assert(sizeof(NulTerminatedString, 'Мир'), 7, 'A02')
    assert(sizeof(NulTerminatedString[2], [ 'Привет', 'Мир' ]), 20, 'A03')
}
