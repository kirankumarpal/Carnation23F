function displayName() {
    var name = document.getElementById('passname').value;
    document.getElementById('getname').innerHTML = "Welcome "+ name;
    document.getElementById('getadesh').innerText = "Enter your id & password to login ";
}

function userlogin() {
    var usrname = document.getElementById('usr').value;
    var pwdname = document.getElementById('pwd').value;
    if (pwdname=='abc@123' && usrname=='kiran') {
        document.getElementById('result').innerText = "Welcome "+ usrname;
    } else {
        document.getElementById('result').innerText = "Password is wrong"; 
    }
}

// function welcome(data){
//     alert(data + "Welcome")
// }
// displayName();

