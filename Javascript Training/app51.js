// KEYWORD THIS!!!

// This is an object and refers to the current execution scope.

function sayHi () {
    console.log('HI');
    console.log(this);
}

const greet = function() {
    console.log(this);
}

// This just pulls up the window because this is a free floating function in the global scope of the window.

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {
            first, 
            last, 
            nickName
        } = this;
        return (`${first} ${last} AKA ${nickName}`);
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person`);
    }
}

// the value of this in the const person is the object itself. 