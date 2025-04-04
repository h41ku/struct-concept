export default arrayBuffer => ({
    arrayBuffer,
    offset: 0,
    dataView: new DataView(arrayBuffer),
    get eof() { return this.offset >= arrayBuffer.byteLength }
})
