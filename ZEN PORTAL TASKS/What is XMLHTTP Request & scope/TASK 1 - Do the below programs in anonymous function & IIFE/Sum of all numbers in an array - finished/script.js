const arr = [ 1, 2, 3, 4];


//Anonymous function
const addValue = (value) => value.reduce(function(cum,curr) {
    return cum + curr
});

console.log(addValue(arr));


//IIFE
(function (value) {
    let addValue = value.reduce(function(cum,curr){
return cum+curr
        
    })
    console.log(addValue)
})(arr);
