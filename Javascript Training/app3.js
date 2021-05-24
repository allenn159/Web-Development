let password = "hellobrah"


if(password.length >= 8 && password.indexOf(" ") === -1) {
    console.log("Valid Password");
}

else {
    console.log("INVALID PASSWORD!");
}

// Example 2

let num = 10;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
}
else {
    console.log("Please guess a number between 1 and 10");
}

// Example 3

let age = 21;

if (age < 6 || age >= 65) {
    console.log('You get in for free!');
}

else {
    console.log("Pay up bruh");
}

// Example 4

let loggedInUser;

// If there isn't a logged in user

if(!loggedInUser) {
    console.log('Get out of here!');
}


let flavor = 'cherry';

// if(flavor !== 'grape' && flavor !== 'cherry') {
//     console.log('WE DONT HAVE THAT FLAVOR');
// }

if(!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('WE ONLY HAVE GRAPE OR CHERRY');
}

else {
    console.log('COME ON DOWN BABY');
}