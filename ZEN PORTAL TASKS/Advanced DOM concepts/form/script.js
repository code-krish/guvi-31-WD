var isEdit;
var currentid;
async function submitData() {
    try {
        if(isEdit==true){
            putData();
            isEdit=false;
        }else{
            postData();
        }
    }catch (error){
        console.log(error)
    }
}


async function postData(){
    var formdata= {
        FirstName: document.getElementById("fstname").value,
        LastName:document.getElementById("lstname").value,
        Gender:document.getElementById("gender").value,
        Choice_of_Food:document.getElementById("food").value,
        Address:document.getElementById("address").value,
        State:document.getElementById("state").value,
        Country:document.getElementById("country").value,
        Pin_Code:document.getElementById("pin").value,
    }
    try{
        var postdata=await fetch("https://62026e86b8735d00174cbaaa.mockapi.io/form",{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-type":"application/json"
            }
        })
        alert("Data stored");
       getdata()

    }catch(error){
        alert("something went wrong");
    }
}

async function getdata(){
    try{
        var datas=await fetch("https://62026e86b8735d00174cbaaa.mockapi.io/form");
        var dat= await datas.json();
        console.log(dat);
        let tbody=document.getElementById("tbody");
        tbody.innerText="";

        dat.forEach((data) => {
            var tr=document.createElement("tr");

            var idtd=document.createElement("td");
            idtd.innerText=data.id;

            var rowid=data.id;

            var FirstNametd=document.createElement("td");
            FirstNametd.innerText=data.FirstName;

            var LastNametd=document.createElement("td");
            LastNametd.innerText=data.LastName;

            var Gendertd=document.createElement("td");
            Gendertd.innerText=data.Gender;

            var Choice_of_Foodtd=document.createElement("td");
            Choice_of_Foodtd.innerText=data.Choice_of_Food;

            var Addresstd=document.createElement("td");
            Addresstd.innerText=data.Address;

            var Statetd=document.createElement("td");
            Statetd.innerText=data.State;

            var Countrytd=document.createElement("td");
            Countrytd.innerText=data.Country;

            var Pin_Codetd=document.createElement("td");
            Pin_Codetd.innerText=data.Pin_Code;

             var Edittd=document.createElement("td");
             

             var Edit_button=document.createElement("button");
             Edit_button.innerText="Edit"
             Edittd.appendChild(Edit_button)
            Edit_button.addEventListener("click",async function (){
                try{
                    var edata=await fetch("https://62026e86b8735d00174cbaaa.mockapi.io/form/"+rowid)
                    var editdata=await edata.json();
                    console.log(editdata);
                      currentid=editdata.id;
                      document.getElementById("fstname").value=editdata.FirstName;
                      document.getElementById("lstname").value=editdata.LastName;
                      document.getElementById("gender").value=editdata.Gender;
                      document.getElementById("food").value=editdata.Choice_of_food;
                      document.getElementById("address").value=editdata.Address;
                      document.getElementById("state").value=editdata.State;
                      document.getElementById("country").value=editdata.Country;
                      document.getElementById("pin").value=editdata.Pin_Code;
                } catch (error) {
                    console.log(error)
                }
                isEdit=true;
            })
            var Deletetd=document.createElement("td");
            var Delete_button=document.createElement("button");
            Delete_button.innerText="Delete"
            Deletetd.appendChild(Delete_button);
            Delete_button.addEventListener("click",async function(){
                try {
                    var edata=await fetch("https://62026e86b8735d00174cbaaa.mockapi.io/form/"+rowid,{
                        method:"DELETE"
                    })
                      alert("data deleted")
                      getdata()
                } catch (error) {
                    console.log(error)
                }
            })

            tr.appendChild(idtd);
            tr.appendChild(FirstNametd);
            tr.appendChild(LastNametd);
            tr.appendChild(Gendertd);
            tr.appendChild(Choice_of_Foodtd);
            tr.appendChild(Addresstd);
            tr.appendChild(Statetd);
            tr.appendChild(Countrytd);
            tr.appendChild(Pin_Codetd);
            tr.appendChild(Edittd);
            tr.appendChild(Deletetd);
            tbody.appendChild(tr);
        }); 

    } catch (error) {
        alert("something went wrong")
        console.log(error)
    }
}
getdata();

async function putData(){
    var formdata={
        FirstName : document.getElementById("fstname").value,
        LastName : document.getElementById("lstname").value,
        Gender : document.getElementById("gender").value,
        Choice_of_Food : document.getElementById("food").value,
        Address : document.getElementById("address").value,
        State : document.getElementById("state").value,
        Country : document.getElementById("country").value,
        Pin_Code : document.getElementById("pin").value,
    }
    getdata();
    try{
        var putdata=await fetch("https://62026e86b8735d00174cbaaa.mockapi.io/form/"+currentid,{
        method:"PUT",
        body:JSON.stringify(formdata),
        headers:{"Content-type":"application/json"}
    })
    alert("data updated")
    getdata();
}
catch (error){
    console.log(error);
}
}