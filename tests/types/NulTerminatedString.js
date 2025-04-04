import { uint8 } from '../../src/index.js'
import utf8 from '../encoders/utf8.js'

const NulTerminatedString = uint8.readWhile(x => x !== 0)
    .withDecoder(utf8.fromUint8Array)
    .withEncoder(utf8.toUint8Array)

export default NulTerminatedString
