import { assert } from './UnitTest.js'
import ListOfNulTerminatedStrings from './types/ListOfNulTerminatedStrings.js'
import sizeof from '../src/sizeof.js'

export function structs_ListOfNulTerminatedStrings() {

    assert(sizeof(ListOfNulTerminatedStrings, { numItems: 4, items: [ 'Привет', ', ', 'Мир', '!' ] }), 29, 'A01')
}
