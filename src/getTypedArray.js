import { rawDef } from './symbols.js'
import { INT8, INT16, INT32, INT64, UINT8, UINT16, UINT32, UINT64, FLOAT32, FLOAT64 } from './bits.js'
import isArray from './isArray.js'

export default (Type, template) => {
    const { type } = Type[rawDef]
    switch (type) {
        case INT8: return new Int8Array(template)
        case INT16: return new Int16Array(template)
        case INT32: return new Int32Array(template)
        case INT64: return new BigInt64Array(template)
        case UINT8: return new Uint8Array(template)
        case UINT16: return new Uint16Array(template)
        case UINT32: return new Uint32Array(template)
        case UINT64: return new BigUint64Array(template)
        case FLOAT32: return new Float32Array(template)
        case FLOAT64: return new Float64Array(template)
    }
    return isArray(template) ? [ ...template ] : []
}
