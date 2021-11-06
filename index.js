const { base64Encode, base64Decode } = require('./util')


exports.handler = async (event) => {
    let requestBody = event.body, 
        statusCode = 200;
    let responseBody;
    console.log('keys', Object.keys(event))
    console.log('values', Object.values(event))
    
    switch(event.routeKey) {
        case 'POST /base64-encode': {
            responseBody = base64Encode(requestBody);
            break;
        }
        case 'POST /base64-decode': {
            responseBody = base64Decode(requestBody);
            break;
        }
        default: {
            statusCode = 400;
            responseBody = `Unsupported routeKey: ${event.routeKey}. Event is ${JSON.stringify(event)}`
        }
    }
        
    const response = {
        statusCode,
        body: responseBody,
    };
    return response;
};
