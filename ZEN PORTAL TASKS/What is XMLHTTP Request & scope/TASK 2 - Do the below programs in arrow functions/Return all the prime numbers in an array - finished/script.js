//console.log("Hello World");

const arr = [1,2,3,4,5,6,7,8,9,10,11];





//Anonymous function
const primeNumbers = (value) => (value.filter(function(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value !== 1;
}));

console.log(primeNumbers(arr))




