let id1 = 0;
let arr = [];
let msg = document.getElementById("msg");
let trData = document.getElementById("trData");
let empNo = document.getElementById("empNo").classList;
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
    empNo.add("hidden");
    let obj = {
      id: id1,
      name: naam,
      profession: prof,
      age: age1,
    };
    arr.push(obj);

    fun4();

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  }
  msg.classList.remove("hidden");
};
let fun2 = () => {
  msg.innerHTML = "";
  msg.classList.remove("hidden");
};
let fun3 = (i) => {
  arr.splice(i, 1);
  fun4();
  if (arr.length == 0) {
    empNo.remove("hidden");
    msg.classList.add("hidden");
  }
};
let fun4 = () => {
  trData.innerHTML = "";
  let a = 0;
  for (let element of arr) {
    trData.innerHTML += `
            <tr>
            <td> ${element.id}. </td> 
            <td>Name:${element.name}</td>
            <td>Profession: ${element.profession}</td> 
            <td>Age: ${element.age}</td>
            <td><button onclick="fun3(${a})">Delete User</button></td>
            </tr>
            `;
    a++;
  }
};
