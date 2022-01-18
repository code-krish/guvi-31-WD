//console.log("Hello World");

const arr = ["sir", "madam", "watch", "nun", "run", "racecar" ];
//console.log(arr);


//anonymous function
let palindromes = (value) => value.filter(function(word) {
    let length = word.length;
    for (let i = 0; i < length/2; i++) {

      
        if (word[i] == word[length - i - 1]) {
            return true;
        } else {
            return false;
        }
    }
})

console.log(palindromes(arr))


