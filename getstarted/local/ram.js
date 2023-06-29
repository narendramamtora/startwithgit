function callvalue(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    
    document.write ("<h3>"+"Thanks for the information we will contact you soon ")
   
   
   
    localStorage.setItem("The Name of the person:- ",name)
    localStorage.setItem("The Email of the person:- ",email)
    }      