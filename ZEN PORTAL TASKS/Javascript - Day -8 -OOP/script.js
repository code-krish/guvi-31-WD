/* class - Movie */




/*

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

*/

class Movie {
    constructor(title,studio,rating) {
/* b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided. */

        if(rating == undefined) {
            rating = "PG"
        }

        this.title = title,  //String representing the title of the movie
        this.studio = studio,  //String representing the studio
        this.rating = rating  //a String representing the rating 
    }
}

/* 
c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
*/

let data = [
    {
        title: "Ratatouille",
        studio: "Pixar Animation Studio",
        rating: "G"
    },
    {
        title: "Alice in WonderLand",
        studio: "Walt Disney Productions",
        rating: "G"
    },
    {
        title: "Encanto",
        studio: "Walt Disney Productions",
        rating: "PG"
    },
    {
        title: "Space Jam: A New Legacy",
        studio: "Warner Animation Group",
        rating: "PG"
    },
    {
        title: "No Time to Die",
        studio: "Eon Productions",
        rating: "PG13"
    },
    {
        title: "Eternals",
        studio: "Marvel Studios",
        rating: "PG13"
    },
    {
        title: "Eternals",
        studio: "Marvel Studios",
        rating: "PG13"
    },
]

let pgMovies = data.filter(function(value) {
    if(value.rating == "PG") {
        return value
    }
})

console.log(pgMovies);

/*


d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

*/

let casino_Royale = new Movie("Casino Royale", "Eon Production", "PG13");
console.log(casino_Royale);

