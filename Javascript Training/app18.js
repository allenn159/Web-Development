// Functions 
// Functions allow us to write reusable, modular code. 
// We define a "chunk" of code that we can then execute at a later point.
// We use them ALL THE TIME

// function funcName () {
    //do something
// }

function grumpus () {
    console.log('ugh...you again...');
    console.log('FOR THE LAST TIME...');
    console.log('LEAVE ME ALONE!!');
}

grumpus ();
grumpus ();
grumpus ();

for (let i = 0; i < 50; i++) {
    grumpus();    
}

