import { uint32, struct } from '../../src/index.js'
import NulTerminatedString from './NulTerminatedString.js'

const ListOfNulTerminatedStrings = struct({
    numItems: uint32,
    items: NulTerminatedString.withLength(s => s.numItems)
})

export default ListOfNulTerminatedStrings
