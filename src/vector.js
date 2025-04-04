import { rawDef, isStruct, isVector, sizeOf } from './symbols.js'
import isFunction from './isFunction.js'

const vector = ({ type, length, reader, encoder, decoder }) => {
    const Type = new Proxy({ type, length, reader, encoder, decoder }, {
        get(target, prop, receiver) {
            switch (prop) {
                case rawDef: return target
                case isStruct: return false
                case isVector: return true
                case sizeOf: {
                    if (!reader && !isFunction(length)) {
                        const sizeOfItem = type[sizeOf]
                        if (sizeOfItem !== undefined)
                            return sizeOfItem * length
                    }
                    return undefined
                }
                case 'withLength': return length => vector({ type: Type, length })
                case 'readWhile': return reader => vector({ type: Type, reader })
                case 'withEncoder': return encoder => vector({ ...target, encoder })
                case 'withDecoder': return decoder => vector({ ...target, decoder })
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

export default vector
