const utf8 = {
    fromUint8Array: uint8Array => new TextDecoder().decode(uint8Array.subarray(0, uint8Array.length - 1)),
    toUint8Array: string => {
        const u8vec = new Uint8Array(string.length * 3 + 1)
        return u8vec.subarray(0, new TextEncoder().encodeInto(string, u8vec).written + 1)
    }
}

export default utf8
