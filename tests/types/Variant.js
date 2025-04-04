import { int8, int16, int32, int64, uint8, uint16, uint32, uint64, float, double, struct } from '../../src/index.js'

const VariantValue = s => {
    switch (s.containerType) {
        case 1: return int8
        case 2: return int16
        case 3: return int32
        case 4: return int64
        case 5: return uint8
        case 6: return uint16
        case 7: return uint32
        case 8: return uint64
        case 9: return float
        case 10: return double
    }
}
const Variant = struct({ containerType: uint8, value: VariantValue })
export default Variant
