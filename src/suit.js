import { isComputed } from './symbols.js'

export default (Suit, data) => {
    const dressed = { ...data }
    for (const [ prop, descriptor ] of Object.entries(Object.getOwnPropertyDescriptors(Suit(dressed)))) {
        let { value, get, set, configurable, enumerable, writable } = descriptor
        if (value !== undefined && value[isComputed]) {
            get = value.get
            set = value.set
        }
        Object.defineProperty(dressed, prop, {
            ...(get ? {} : { value }),
            configurable,
            enumerable,
            ...(set || get ? {} : { writable }),
            get,
            set
        })
    }
    return dressed
}
