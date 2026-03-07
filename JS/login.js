//login
function login(){
    const input = document.querySelectorAll(".input");

    const userName = input[0].value;
    const pass = input[1].value;
    // console.log(userName, pass);
    
    if(userName === "admin" && pass === "admin123"){
        window.location.href = "home.html";
    }
    else{
        alert("Invalid Credentials")
    }
}