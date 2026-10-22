// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array,
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically
// take from start to end.

console.log(arr.slice(1, 3));  //will slice from index 1 to 3
console.log(arr);   //actual array is not mutated

console.log(arr.slice(2)); //will slice from index 2 to end i.e 4

console.log(arr.slice(-2));  //will slice from index -2 i.e from 3 to end i.e -1
console.log(arr.slice(-3));  //will slice from index -3 i.e from 2 to end i.e -1

console.log(arr.slice(0)); //will slice from index 0 to end

console.log(arr.slice(-5)); //will slice from index -5 i.e from 0 to end

console.log(arr.slice(-3,-5));  //in negative index ,it slices from left to right like in positive index