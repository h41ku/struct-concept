import { rawDef, isStruct, isVector } from './symbols.js'
import { INT8, INT16, INT32, INT64, UINT8, UINT16, UINT32, UINT64, FLOAT32, FLOAT64, ENDIANNESS, LITTLE_ENDIAN } from './bits.js'
import isFunction from './isFunction.js'
import getTypedArray from './getTypedArray.js'

const read = (stream, Type, endianness = undefined, topLevelData = {}) => { // returns offset
    if (!Type[isStruct] && !Type[isVector]) { // scalar
// console.log('isScalar', data, Type)
        let { dataView, offset } = stream
        if (isFunction(Type))
            Type = Type(topLevelData)
        let data // undefined
        if (Type !== undefined) {
            const { type: typeBits } = Type[rawDef]
            const isLittleEndian = (endianness !== undefined ? endianness : (typeBits & ENDIANNESS)) === LITTLE_ENDIAN
            const type = typeBits & ~ENDIANNESS
            switch (type) {
                case INT8: {
                    data = dataView.getInt8(offset)
                    offset += 1
                } break
                case INT16: {
                    data = dataView.getInt16(offset, isLittleEndian)
                    offset += 2
                } break
                case INT32: {
                    data = dataView.getInt32(offset, isLittleEndian)
                    offset += 4
                } break
                case INT64: {
                    data = dataView.getBigInt64(offset, isLittleEndian)
                    offset += 8
                } break
                case UINT8: {
                    data = dataView.getUint8(offset)
                    offset += 1
                } break
                case UINT16: {
                    data = dataView.getUint16(offset, isLittleEndian)
                    offset += 2
                } break
                case UINT32: {
                    data = dataView.getUint32(offset, isLittleEndian)
                    offset += 4
                } break
                case UINT64: {
                    data = dataView.getBigUint64(offset, isLittleEndian)
                    offset += 8
                } break
                case FLOAT32: {
                    data = dataView.getFloat32(offset, isLittleEndian)
                    offset += 4
                } break
                case FLOAT64: {
                    data = dataView.getFloat64(offset, isLittleEndian)
                    offset += 8
                } break
            }
        }
        stream.offset = offset
        return data // scalar | undefined
    }
    if (Type[isStruct]) { // struct
// console.log('isStruct', data)
        const { props } = Type[rawDef]
        const data = {}
        for (let prop in props) {
            let propType = props[prop]
            if (isFunction(propType))
                propType = propType(data)
            if (propType !== undefined) {
                const propData = read(stream, props[prop], endianness, data)
                if (propData !== undefined)
                    data[prop] = propData
            }
        }
        return data
    }
    // vector
// console.log('isVector', Type)
    let { type, length, reader, decoder } = Type[rawDef]
    let data
// console.log('itemType', type, 'length', length, 'decoder', decoder, 'reader', reader)
    if (length !== undefined) {
        if (isFunction(length)) {
            length = length(topLevelData)
// console.log('computed length is', length, 'for data', topLevelData)
        }
    }
    if (length !== undefined) {
        data = getTypedArray(type, length)
        for (let i = 0; i < length; i ++)
            data[i] = read(stream, type, endianness, topLevelData)
    } else if (reader !== undefined) {
        data = []
        do {
            const itemData = read(stream, type, endianness, topLevelData)
// console.log('itemData', itemData)
            data.push(itemData)
            if (itemData === undefined || !reader(itemData, data.length - 1, topLevelData))
                break
        } while (!stream.eof)
        data = getTypedArray(type, data)
    }
    if (data !== undefined && decoder !== undefined)
        data = decoder(data)
    return data
}

export default read
