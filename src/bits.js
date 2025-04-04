export const UNSIGNED = 8192
export const FLOAT = 16384
export const ENDIANNESS = 32768

export const INT8 = 1
export const INT16 = 2
export const INT32 = 4
export const INT64 = 8

export const UINT8 = INT8 | UNSIGNED
export const UINT16 = INT16 | UNSIGNED
export const UINT32 = INT32 | UNSIGNED
export const UINT64 = INT64 | UNSIGNED

export const FLOAT32 = INT32 | FLOAT
export const FLOAT64 = INT64 | FLOAT

export const SIZE_MASK = ~(UNSIGNED | FLOAT | ENDIANNESS)

export const LITTLE_ENDIAN = 0
export const BIG_ENDIAN = ENDIANNESS
export const NATIVE_ENDIANNESS = (() => {
    const uint32 = new Uint32Array([ 0x11223344 ])
    const uint8 = new Uint8Array(uint32.buffer)
    if (uint8[0] === 0x44) {
        return LITTLE_ENDIAN
    } else if (uint8[0] === 0x11) {
        return BIG_ENDIAN
    } else {
        throw Error(`Unsupported platform (mixed endianness)`)
    }
})();
