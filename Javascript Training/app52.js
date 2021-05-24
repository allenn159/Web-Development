// This Cont...

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
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person`);
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAH`);
    }
}

const printBio = person.printBio;

// calling this won't work because this is dependent on the invocation context. 
// calling printBio here will refer to the window. 

//** ARROW FUNCTIONS DO NOT GET THEIR OWN VERSION OF THIS. Due to this reason, we try not to use them for this. 