import { passTest } from './UnitTest.js'

import { helpers_isArray } from './isArray.js'
import { helpers_isFunction } from './isFunction.js'

import { private_isVector } from './isVector.js'
import { private_isStruct } from './isStruct.js'
import { public_sizeof } from './sizeof.js'
import { public_stream } from './stream.js'
import { public_read } from './read.js'
import { public_write } from './write.js'

import { encoders_utf8 } from './utf8.js'

import { structs_NulTerminatedString } from './NulTerminatedString.js'
import { structs_ListOfNulTerminatedStrings } from './ListOfNulTerminatedStrings.js'
import { structs_RGBAColor } from './RGBAColor.js'
import { structs_Vector4 } from './Vector4.js'
import { structs_Variant } from './Variant.js'
import { structs_NulTerminatedVariants } from './NumTerminatedVariants.js'
import { structs_io } from './io.js'

passTest(helpers_isArray)
passTest(helpers_isFunction)

passTest(private_isVector)
passTest(private_isStruct)
passTest(public_sizeof)
passTest(public_stream)
passTest(public_read)
passTest(public_write)

passTest(encoders_utf8)

passTest(structs_NulTerminatedString)
passTest(structs_ListOfNulTerminatedStrings)
passTest(structs_RGBAColor)
passTest(structs_Vector4)
passTest(structs_Variant)
passTest(structs_NulTerminatedVariants)
passTest(structs_io)
