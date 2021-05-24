// Lexical Scope

// function outer() {
//     let movie = 'Amadeus';
//     function inner() {
//         let movie = 'The Shining'
//         console.log(movie.toUpperCase())
//     }
//     inner();
// }

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining'

        function extraInner() {
        console.log(movie.toUpperCase())
        }
        extraInner();
    }
    inner();
}

// If the inner function cannot find a defined variable, it will look up to the nearest scope. However this doesn't work
// the other way around where the outer function will not look for an inner variable.


