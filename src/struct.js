import { rawDef, isStruct, isVector, sizeOf } from './symbols.js'
import vector from './vector.js'

export default (props) => {
    const Type = new Proxy({ props }, {
        get(target, prop, receiver) {
            switch (prop) {
                case rawDef: return target
                case isStruct: return true
                case isVector: return false
                case sizeOf: {
                    let size = 0
                    for (let prop in props) {
                        const sizeOfProp = props[prop][sizeOf]
                        if (sizeOfProp === undefined)
                            return undefined
                        size += sizeOfProp
                    }
                    return size
                }
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
