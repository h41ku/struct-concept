import {
    INT8, INT16, INT32, INT64,
    UINT8, UINT16, UINT32, UINT64,
    FLOAT32, FLOAT64,
    NATIVE_ENDIANNESS, LITTLE_ENDIAN, BIG_ENDIAN } from './bits.js'
import scalar from './scalar.js'

export const int8 = scalar({ type: INT8 | NATIVE_ENDIANNESS })
export const int16 = scalar({ type: INT16 | NATIVE_ENDIANNESS })
export const int32 = scalar({ type: INT32 | NATIVE_ENDIANNESS })
export const int64 = scalar({ type: INT64 | NATIVE_ENDIANNESS })

export const uint8 = scalar({ type: UINT8 | NATIVE_ENDIANNESS })
export const uint16 = scalar({ type: UINT16 | NATIVE_ENDIANNESS })
export const uint32 = scalar({ type: UINT32 | NATIVE_ENDIANNESS })
export const uint64 = scalar({ type: UINT64 | NATIVE_ENDIANNESS })

export const int8le = scalar({ type: INT8 | LITTLE_ENDIAN })
export const int16le = scalar({ type: INT16 | LITTLE_ENDIAN })
export const int32le = scalar({ type: INT32 | LITTLE_ENDIAN })
export const int64le = scalar({ type: INT64 | LITTLE_ENDIAN })

export const uint8le = scalar({ type: UINT8 | LITTLE_ENDIAN })
export const uint16le = scalar({ type: UINT16 | LITTLE_ENDIAN })
export const uint32le = scalar({ type: UINT32 | LITTLE_ENDIAN })
export const uint64le = scalar({ type: UINT64 | LITTLE_ENDIAN })

export const int8be = scalar({ type: INT8 | BIG_ENDIAN })
export const int16be = scalar({ type: INT16 | BIG_ENDIAN })
export const int32be = scalar({ type: INT32 | BIG_ENDIAN })
export const int64be = scalar({ type: INT64 | BIG_ENDIAN })

export const uint8be = scalar({ type: UINT8 | BIG_ENDIAN })
export const uint16be = scalar({ type: UINT16 | BIG_ENDIAN })
export const uint32be = scalar({ type: UINT32 | BIG_ENDIAN })
export const uint64be = scalar({ type: UINT64 | BIG_ENDIAN })

export const float32 = scalar({ type: FLOAT32 })
export const float64 = scalar({ type: FLOAT64 })

export const float = float32 // alias
export const double = float64 // alias

export { default as struct } from './struct.js'
export { default as sizeof } from './sizeof.js'
export { default as stream } from './stream.js'
export { default as read } from './read.js'
export { default as write } from './write.js'
