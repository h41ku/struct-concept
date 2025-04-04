import { assert } from './UnitTest.js'
import isFunction from '../src/isFunction.js'

export function helpers_isFunction() {

    const isFunction0 = f => f instanceof Function
    const closure = () => {}
    function func() {}
    
    assert(isFunction0(func), true, 'A01')
    assert(isFunction0(closure), true, 'A02')
    assert(isFunction(func), true, 'B01')
    assert(isFunction(closure), true, 'B02')
}
