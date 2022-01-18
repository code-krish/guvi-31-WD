//console.log("Hello World");

//given array
const givenArray = [1, 2, 3, 4, 5, 6];
//rotation
const k = 2;

//anonymous function 
let  rotatedArray = function(arr, rotation) {
    const toRotate = arr.concat();
    for (let i = 0; i< rotation; i++) {
        const frontItem = toRotate.shift();       
        toRotate.push(frontItem);
    }
    return toRotate;
}

console.log(rotatedArray(givenArray, k));


//IIFE
((arr, rotation) => {

    const toRotate = arr.concat();

    for (let i = 0; i< rotation; i++) {
        const frontItem = toRotate.shift();
        toRotate.push(frontItem);
    }
    console.log(toRotate);
   
})(givenArray, k);
