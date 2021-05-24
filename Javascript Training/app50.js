// Adding methods to objects

const add = function(x,y) {
    return x + y;
}

const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function(x,y) {
        return x + y;
    },
    multiply: function(x,y) {
        x * y;
    }
}

// with this one variable, you can call the array or the functions. use math.add(x,y), math.multiply(x,y),
// or math.numbers

// Another way to write it in a shorthand style.

const auth = {
    username: 'TommyBoy',
    login() {
        console.log('LOGGED YOU IN');
    },
    logout() {
        console.log('GOODBYE');
    }
}



