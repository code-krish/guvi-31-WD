


const createHead = document.createElement("h1");
createHead.innerText = "Image Lists"
createHead.setAttribute("class", "heading");
document.body.append(createHead);

const imageURL = ["https://wallpaperaccess.com/full/2703791.jpg", "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg", "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg", "https://mocah.org/uploads/posts/343911-Neon-Scenery-Landscape-Digital-Art.jpg"];






for (let image of imageURL) {
    const createImageElement = document.createElement("img");
    createImageElement.setAttribute("src", image);
    createImageElement.setAttribute("class", "imagelist")
    document.body.append(createImageElement);
}


const countryTitle = document.createElement("h1");
countryTitle.innerText = "Country details"
countryTitle.setAttribute("class", "heading");
document.body.append(countryTitle);


// const containerDiv = document.createElement("div");
// containerDiv.setAttribute("class", "container");


// const imageDiv = document.createElement("div");
// imageDiv.setAttribute("class", "imageContainer");
// const inputFlag = document.createElement("img");
// inputFlag.setAttribute("img", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png")


// containerDiv.append(imageDiv);


// const contentDiv = document.createElement("div");
// contentDiv.setAttribute("class", "contentContainer");
// containerDiv.append(contentDiv);


// document.body.append(containerDiv);

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");
document.body.appendChild(containerDiv);

const imageContainer = document.createElement("div");
imageContainer.setAttribute("class", "imageContainer")
containerDiv.append(imageContainer);

const flagImage = document.createElement("img");
flagImage.setAttribute("class", "flagImage")
flagImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png")
imageContainer.append(flagImage)


const contentDiv = document.createElement("div");
contentDiv.setAttribute("class", "contentDiv");
containerDiv.append(contentDiv);

const countryName = document.createElement("h1");
countryName.setAttribute("class", "countryTitle");
countryName.innerText= "United States of America"
contentDiv.append(countryName);

const details = document.createElement("p");
details.setAttribute("class", "details")
contentDiv.append(details)

let clist = ["Population: 323,947,000", "Region: America", "Capital: Washington D.C."]

for (var li of clist) {
    const details = document.createElement("p");
    details.innerText = li
    contentDiv.append(details)
}

