

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

// submit event
myForm.addEventListener('submit', onsubmit);//if not working try onsubmit

//delete event
userList.addEventListener('click', removeItem)
userList.addEventListener('click', editItem)

//Add item
function onsubmit(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.id=emailInput.value   
    li.name=nameInput.value
    li.num=number.value
    
    
    li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${number.value}`));    
   
    // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
   // Add classes to del button
   deleteBtn.className = 'btnbtnbtn';
   editBtn.className = 'btnedit';
   // Append text node
   deleteBtn.appendChild(document.createTextNode('delete'));
   editBtn.appendChild(document.createTextNode('edit'));
  // Append button to li
   li.appendChild(deleteBtn);  
   li.appendChild(editBtn);
   userList.appendChild(li);   
    }

//remove item
function removeItem(e){
    if(e.target.classList.contains('btnbtnbtn')){
        var li=e.target.parentElement;
        userList.removeChild(li) 
        const key  = li.id;
        localStorage.removeItem(key);
    }
}

    function editItem(e){
    if(e.target.classList.contains('btnedit')){
        var li=e.target.parentElement;
        userList.removeChild(li) 
        const key  = li.id;
        const n=li.num;
        const na=li.name;
        localStorage.removeItem(key);
    
        //update
        nameInput.value=na;
        emailInput.value=key;
        number.value=n;
    }
}