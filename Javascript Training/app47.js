// Destructuring Parameters

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

function print({
    first, 
    last, 
    title
}) {
    console.log(`${first} ${last}, ${title}`)
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contestType]) {
    console.log(`Status: ${statusCode}`);
}