// You can start with an empty object then add items to it.

const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 2;

userReviews.mrSmith78++;

// Arrays + Objects
// We can fill objects with keys that are arrays or also keys that are other objects.
// Nested :)

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: [ 'Music', 'Art' ],
    exams: {
        midterm: 92,
        final: 88
    }

};

const avg = (student.exams.midterm + student.exams.final)
/ 2;

// Arrays can have objects nested inside them

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quanitity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quanitity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
];

