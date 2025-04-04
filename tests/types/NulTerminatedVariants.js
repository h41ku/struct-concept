import Variant from './Variant.js'
const NulTerminatedVariants = Variant.readWhile(x => x.containerType !== 0)
export default NulTerminatedVariants
