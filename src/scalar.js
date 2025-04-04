import { rawDef, isStruct, isVector, sizeOf } from './symbols.js'
import { SIZE_MASK } from './bits.js'
import vector from './vector.js'

export default ({ type }) => {
    // if (!Number.isInteger(type)) {
    //     throw new Error(`Invalid argument. Type of scalar is expected.`)
    // }
    const Type = new Proxy({ type }, {
        get(target, prop, receiver) {
            switch (prop) {
                case rawDef: return target
                case isVector: return false
                case isStruct: return false
                case sizeOf: return type & SIZE_MASK
                case 'withLength': return length => vector({ type: Type, length })
                case 'readWhile': return reader => vector({ type: Type, reader })
            }
            {
                const length = parseInt(prop)
                if (!isNaN(prop) && prop >= 0) {
                    return vector({ type: Type, length })
                }
            }
            return undefined
        }
    })
    return Type
}
