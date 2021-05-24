// Reduce 
// Executes a reducer function on each element of the array resulting in a single value.

// [3, 5, 7, 9, 11].reduce((accumlator, currentValue) => {
//     return accumlator + currentValue;
// });

// Call Back       accumlator      currentValue        return value
// first call      3               5                   8
// second call     8               7                   15
// third call      15              9                   24
// fourth call     24              11                  35

// const nums = [3, 4, 5, 6, 7]
// const product = nums.reduceRight((total, currentVal) => {
//     return total * currentVal;
// });

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrade = grades.reduceRight((max, currVal) => {
//     if(currVal > max) return currVal;
//     return max;
// })

// max         currVal         return
// 87          64              87
// 87          96              96 
// and so on....

const maxGrade = grades.reduceRight((max, currVal) => {
    return Math.max(max,currVal);
})

const minGrade = grades.reduceRight((min, currVal) => (
    Math.min(min,currVal)
))

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000);

