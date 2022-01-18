//console.log("Hello World")

const givenNumbers = [1, 2, 45, 86, 91, 5, 6, 9];


//IIFE
((value) => {
  const oddNumber = value.filter((number) => number % 2 !== 0);
  console.log(oddNumber);
})(givenNumbers);



//Anonymous function 
const printOdd = (value) => value.filter((value) => value % 2 ==1);
console.log(printOdd(givenNumbers));


