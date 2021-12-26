const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];

/*Task 1

To find the average marks in the class(scores)*/

/* Average mark = sum of the marks obtained by the students / total number of students*/

let getAverage = scores.reduce(function (cum, curr) {
  //logic

  return cum + curr.marks;
}, 0);

//console.log(getAverage);

let average = getAverage / scores.length;
let averageScore = average.toFixed(3)
console.log(`Task -1 = The Average score is '${averageScore}'`);

/* Task 2 =

To find the topper's name
*/

//The Highest Mark scored by a student

let highestMark = scores.reduce(function (acc, curr) {
  return acc = acc > curr.marks ? acc : curr.marks;
}, 0);


//console.log("Highest Mark Scored by a Student is" , highestMark);

//Name of the student, who scored the highest mark.

let topperName  = scores.filter(function(topper){
return topper.marks === highestMark;
});

console.log(`\"Task -2\" = The topper is '${topperName[0].name}'`);