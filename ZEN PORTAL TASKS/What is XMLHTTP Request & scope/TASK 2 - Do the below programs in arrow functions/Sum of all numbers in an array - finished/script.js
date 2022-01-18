const arr = [ 1, 2, 3, 4];


//Anonymous function
const addValue = (value) => value.reduce((cum,curr) => cum + curr);

console.log(addValue(arr));

