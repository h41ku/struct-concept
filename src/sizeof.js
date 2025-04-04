import { rawDef, isStruct, isVector, sizeOf } from './symbols.js'
import isFunction from './isFunction.js'
import isArray from './isArray.js'

function sizeOfType(Type) {
    return Type[sizeOf]
}

function sizeOfData(data, Type, topLevelData) {
    if (!Type[isStruct] && !Type[isVector]) { // scalar
// console.log('isScalar', data, Type)
        if (isFunction(Type))
            Type = Type(topLevelData)
        return Type === undefined ? 0 : Type[sizeOf]
    }
    if (Type[isStruct]) { // struct
// console.log('isStruct', data)
        let size = 0
        const { props } = Type[rawDef]
        for (let prop in props) {
            let propType = props[prop]
            if (isFunction(propType))
                propType = propType(data)
            size += sizeOfData(data[prop], props[prop], data)
        }
        return size
    }
    // vector
// console.log('isVector', data)
    let { type, length, encoder } = Type[rawDef]
// console.log('itemType', type, 'length', length, 'encoder', encoder)
    let size = 0
    if (isArray(data) && encoder === undefined) {
        if (length !== undefined) {
            if (isFunction(length)) {
                length = length(topLevelData)
// console.log('computed length is', length, 'for data', topLevelData)
            }
            if (data.length < length)
                throw Error(`Not enough items; Required ${length} items, but passed ${data.length} items.`)
            if (data.length > length)
                throw Error(`Too many items; Required ${length} items, but passed ${data.length} items.`)
        }
        length = data.length
        for (let i = 0; i < length; i ++)
            size += sizeOfData(data[i], type, data)
        return size
    }
    if (encoder !== undefined) {
        data = encoder(data)
// console.log('TODO', data)
        length = data.length
        for (let i = 0; i < length; i ++)
            size += sizeOfData(data[i], type, data)
        return size
    }
    throw Error(`Invalid argument; Array expected.`)
}

export default (Type, data) => data === undefined ? sizeOfType(Type) : sizeOfData(data, Type, {})
