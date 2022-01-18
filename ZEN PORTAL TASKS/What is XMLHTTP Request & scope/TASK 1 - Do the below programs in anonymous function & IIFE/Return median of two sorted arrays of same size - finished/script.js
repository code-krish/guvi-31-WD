//console.log("Hellow World");

let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];


//anonymous function
let getMedian = function(arr1,arr2) {

    let arr = [...arr1,...arr2].sort(function(a,b) {return a-b});
    console.log(arr);

    if(arr.length % 2 == 1) {
        let med = arr.length / 2 - .5;
       
            return arr[med];
        
    } else {
        let mid = arr[arr.length /2 ] + arr[arr.length/2 - 1] ;

        return mid /2;

    }
  

}
console.log(getMedian(arr1,arr2));


