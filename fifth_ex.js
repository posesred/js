//Write a function called combineArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
// const combineArrays = (array1, array2) => {
//     return combinedArrays = [...array1,...array2];
// }
// const array1 = [2,4,5,"yi"];
// const array2 = ["Nah","fag"];
// console.log(combineArrays(array1,array2));

//Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

// => addEveryOther(4, 7, 3, 2, 10) // 17
// => addEveryOther(2, 8, 3, 1) // 5
// const addEveryOther = (...rest) =>{
//     let sum= 0;
//     for(let i =0; i< rest.length; i+=2){
//         sum+=rest[i];
//     }
//     return sum;
// }
// console.log(addEveryOther(5,10,5,15,1,51,5,15));