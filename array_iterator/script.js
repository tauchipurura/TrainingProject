let supers = ['Superman', 'Batman', 'Flash', 'Aquaman', 'Thor', 'Spider-man', 'Wolverine', 'Cyclops', 'Professor X'];


// supers.forEach(
//     function(value, index, array){
//         console.log(`the index of ${value} is ${index}`)

//     }
// );

// function upperCase(value){
//     return value.toUpperCase();
// }

// let supersCap = supers.map(upperCase);

// console.log(supersCap);
// console.log(supers);

// ***************filter****************

let number = [1,2,3,4,50,45,22,36,95,88,59,67,63,13,100]

// let evenNumbers = number.filter(
//     function(value, index, array){
//         return value % 2 ===0;
//     }
// );

// console.log(evenNumbers)

// *************reduce

function add(total, value, index, array){
    return total + value;

}
let sum = number.reduce(add)
// console.log(sum)

function multi(total, value, index, array){
    return value * value;
}

let multiplication = number.reduce(multi);

console.log(multi)
