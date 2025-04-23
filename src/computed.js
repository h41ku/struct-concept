import { isComputed } from './symbols.js'

export default (get, set = () => {}) => ({
    get [isComputed]() { return true },
    get,
    set
})
