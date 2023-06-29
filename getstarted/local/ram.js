


function callvalue(){
    let myObj={
        name: document.getElementById("name").value,
        emails: document.getElementById("email").value
    };

    let myObj_serialzed=JSON.stringify(myObj);

    localStorage.setItem("The Name and email",myObj_serialzed)
    }      