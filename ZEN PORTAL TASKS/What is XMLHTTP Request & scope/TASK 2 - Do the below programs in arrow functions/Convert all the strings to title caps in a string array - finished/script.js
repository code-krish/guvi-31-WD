arr = ["i'm viNotH kUmaR"];


//anonymous fucntion
let titleCaps = (arr) => {
let str = arr.toString().toLowerCase();
let words = str.split(" ").map(word => {
    let firstLetter = word.slice(0,1);
    let rest = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${rest}`
});
return words.join(" ");
};

console.log(titleCaps(arr));


