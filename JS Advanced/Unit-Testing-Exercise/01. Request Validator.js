function solve(input){
    if (input.method !== 'GET' 
    && input.method !== 'POST' 
    && input.method !== 'DELETE' 
    && input.method !== 'CONNECT' 
    || input.method === undefined) {
        throw new Error(`Invalid request header: Invalid Method`);
    };
    let patternURI = /^([a-zA-Z0-9\.\*]+)$/g;
    if (!patternURI.test(input.uri) || input.uri === undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    };
    if (input.version !== 'HTTP/0.9' 
    && input.version !== 'HTTP/1.0' 
    && input.version !== 'HTTP/1.1' 
    && input.version !== 'HTTP/2.0'
    || input.version === undefined) {
        throw new Error(`Invalid request header: Invalid Version`);
    };

    let patternMessage = /[<>\\&'"]/g;

    if (patternMessage.test(input.message) || input.message === undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return input;
}
console.log(solve(obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));