function base64Encode(plainContent) {
    const base64EncodedContent = Buffer.from(plainContent).toString('base64')
    return base64EncodedContent
}


function base64Decode(base64EncodedContent) {
    const plainContent = Buffer.from(base64EncodedContent, 'base64').toString('ascii')
    return plainContent
}


module.exports = {
    base64Encode,
    base64Decode
}

