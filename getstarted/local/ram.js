


function callvalue(){
    let myObj={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("mnumber").value
    };
    let eemail=document.getElementById("email").value


    let myObj_serialzed=JSON.stringify(myObj);
    localStorage.setItem(eemail,myObj_serialzed)
}       


var myForm=document.querySelector('#my-form');
var nameInput=document.querySelector('#name');
var emailInput=document.querySelector('#email');
var number =document.querySelector('#mnumber');
var userList=document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);//if not working try onsubmit

function onsubmit(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${number.value}`));    
    userList.appendChild(li);
    var a=nameInput.value
    console.log(a);
   
    }
