let id1 = 0;
let msg = document.getElementById("msg");
let arr = [];

let fun1 = () => {
  let inputs = document.getElementsByTagName("input");
  let naam = inputs[0].value;
  let prof = inputs[1].value;
  let age1 = inputs[2].value;

  if (naam.length == 0 || prof.length == 0 || age1.length == 0) {
    msg.innerHTML =
      '<span style="color:red"> Error : Please make sure all the fields are filled before adding in an employee ! </span>';
  } else {
    id1++;
    msg.innerHTML =
      '<span style="color:green"> Success: Employee Added! </span>';
    document.getElementById("empNo").innerHTML = "";
    // let buttons=document.getElementById('buttons');
    let obj = {
      id: id1,
      name: naam,
      profession: prof,
      age: age1,
    };
    arr.push(obj);

    fun4();
    // let trData = document.getElementById("trData");
    // trData.innerHTML = "";
    // for (let element of arr) {
    //   trData.innerHTML += `
                
    //             <tr>

    //             <td> ${element.id} </td> 
    //             <td>Name:${element.name}</td>
    //             <td>Profession: ${element.profession}</td> 
    //             <td>Age: ${element.age}</td>
    //             <td><button style="border-radius: 30px;" onclick="fun3(id-1)">Delete User</button>
    //             </td>

    //             </tr>
                
    //             `;
    // }

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  }
};
let fun2 = () => {
  msg.innerHTML = "";
};
let fun3=(i)=>{
    arr=arr.splice(i,1);
    fun4();
}
let fun4=()=>{
    let trData = document.getElementById("trData");
    trData.innerHTML = "";
    for (let element of arr) {
      trData.innerHTML += `
                
                <tr>

                <td> ${element.id} </td> 
                <td>Name:${element.name}</td>
                <td>Profession: ${element.profession}</td> 
                <td>Age: ${element.age}</td>
                <td><button style="border-radius: 30px;" onclick="fun3(id-1)">Delete User</button>
                </td>

                </tr>
                
                `;
    }
}
