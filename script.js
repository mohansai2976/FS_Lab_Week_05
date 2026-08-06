function loginValidity(){
    let uname=document.getElementById("name1").value.trim();
    let password=document.getElementById("password").value.trim();
    let defaultUname="mohan";
    let defaultPassword="1234";
    let error=document.getElementById("error");
    error.innerHTML="";

    if(uname==""){
        error.innerHTML="*UserName is required";
        return;
    }

    if(password==""){
        error.innerHTML="*Password is required";
        return;
    }

    if(uname==defaultUname && password==defaultPassword){
        window.location.href="success.html";
    }

    else{
        error.innerHTML="<b>Invalid UserName or Password.</b>";
    }
}