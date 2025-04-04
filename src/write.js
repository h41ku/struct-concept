import { rawDef, isStruct, isVector } from './symbols.js'
import { INT8, INT16, INT32, INT64, UINT8, UINT16, UINT32, UINT64, FLOAT32, FLOAT64, ENDIANNESS, LITTLE_ENDIAN } from './bits.js'
import isFunction from './isFunction.js'
import isArray from './isArray.js'

const write = (stream, Type, data, endianness = undefined, topLevelData = {}) => { // returns offset
    if (!Type[isStruct] && !Type[isVector]) { // scalar
        let { dataView, offset } = stream
// console.log('isScalar', data, Type)
        if (isFunction(Type))
            Type = Type(topLevelData)
        if (Type !== undefined) {
            const { type: typeBits } = Type[rawDef]
            const isLittleEndian = (endianness !== undefined ? endianness : (typeBits & ENDIANNESS)) === LITTLE_ENDIAN
            const type = typeBits & ~ENDIANNESS
            switch (type) {
                case INT8: {
                    dataView.setInt8(offset, data)
                    offset += 1
                } break
                case INT16: {
                    dataView.setInt16(offset, data, isLittleEndian)
                    offset += 2
                } break
                case INT32: {
                    dataView.setInt32(offset, data, isLittleEndian)
                    offset += 4
                } break
                case INT64: {
                    dataView.setBigInt64(offset, data, isLittleEndian)
                    offset += 8
                } break
                case UINT8: {
                    dataView.setUint8(offset, data)
                    offset += 1
                } break
                case UINT16: {
                    dataView.setUint16(offset, data, isLittleEndian)
                    offset += 2
                } break
                case UINT32: {
                    dataView.setUint32(offset, data, isLittleEndian)
                    offset += 4
                } break
                case UINT64: {
                    dataView.setBigUint64(offset, data, isLittleEndian)
                    offset += 8
                } break
                case FLOAT32: {
                    dataView.setFloat32(offset, data, isLittleEndian)
                    offset += 4
                } break
                case FLOAT64: {
                    dataView.setFloat64(offset, data, isLittleEndian)
                    offset += 8
                } break
            }
        }
        stream.offset = offset
        return
    }
    if (Type[isStruct]) { // struct
// console.log('isStruct', data)
        const { props } = Type[rawDef]
        for (let prop in props) {
            let propType = props[prop]
            if (isFunction(propType))
                propType = propType(data)
            if (propType !== undefined) {
                write(stream, props[prop], data[prop], endianness, data)
            }
        }
        return
    }
    // vector
// console.log('isVector', data)
    let { type, length, encoder } = Type[rawDef]
// console.log('itemType', type, 'length', length, 'encoder', encoder)
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
            write(stream, type, data[i], endianness, topLevelData)
        return
    }
    if (encoder !== undefined) {
        data = encoder(data)
// console.log('TODO', data)
        length = data.length
        for (let i = 0; i < length; i ++)
            write(stream, type, data[i], endianness, topLevelData)
        return
    }
    throw Error(`Invalid argument; Array expected.`)
}

export default write
