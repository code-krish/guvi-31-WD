//console.log("Hello World!");

const resume = [
    {
        jobApplication: {
            role: "Full-Stack Developer"
        },
        personalInfo: {
            name: {
                firstName: "Naveen",
                lastName: "Muthusamy",
                age: 24,
                fullName: this.firstName + " " + this.lastName
            },
            contact: {
                state: "Tamil Nadu",
                district: "Perambalur",
                address: `xyz street, ${this.district}, ${this.state}`,
                mail: "email@gmail.com",
                mobile: "********56"
            },
            languages: {
                tam: "Tamil",
                eng: "English"
            }
        },
        experience: {
            internship:{
                company1:{
                    name: "archixyz",
                    place: "Chennai",
                    state: "Tamil Nadu",
                },
                company2:{
                    name: "SRB *** ",
                    place: "Krishnagiri",
                    state: "Tamil Nadu"
                },
            },
            freelance:{
                company1: {
                    name: "aaa",
                    place: "Bangalore",
                    state: "Karnataka"
                },
                company2: {
                    name: "bbb",
                    place: "Chennai",
                    state: "Tamil Nadu"
                },
            },
        },
        interest: {
            interest_1 :"Watching Movies",
            interest_2 :"playing Basketball",
            interest_3 :"Reading Books",
            interest_4 :"Painting" 
        },
  
    }
]

console.log(resume);