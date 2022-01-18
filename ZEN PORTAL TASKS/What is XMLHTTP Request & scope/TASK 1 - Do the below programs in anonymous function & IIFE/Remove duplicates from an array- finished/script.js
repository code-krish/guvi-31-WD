//console.log("Hello World")

const arr = ["Apple", "Mango", "Banana", "Apple", "lemon", "Mango", "Orange"];

//anonymous function
let uniqueSet = (arr) => {
   const set = new Set(arr);
   const backtoArray = [...set];
   return backtoArray
} 
console.log(uniqueSet(arr));


//IIFE
((arr) => {
    const set = new Set(arr);
   const backtoArray = [...set];
   console.log(backtoArray) 
})(arr);