
var input = [
    {
      id: 1,
      title: "Title 1",
      childrens: [
        {
          id: 2,
          title: "Title 2",
          childrens: [
           
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Title 3",
      childrens: [
        {
          id: 4,
          title: "Title 4",
          childrens: [
            {
              id: 5,
              title: "Title 5",
              childrens: []
            }
          ],
        },
      ],
    },
  ];





let outputList = [];
let list = (input) => {
   
  if (input.childrens !== undefined && input.childrens.length > 0) {
      

let tempObj = {...input};
tempObj.childrens = []
outputList.push(tempObj);

 list(input.childrens[0]);
 } else {
    outputList.push(input);
  }
};

for (let loopObj of input) {
  list(loopObj);
}

console.log(outputList);