document.getElementById('btn').addEventListener('mouseover',function signup() {
    var fn = document.getElementById('fn').value;
    var ln = document.getElementById('ln').value;
    var usr = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;

    if (pwd=='kp@0921') {
        document.getElementById('result').innerText = "Welcome "+fn+" "+ln+", Your mail id is "+usr+".";
    } else {
        document.getElementById('result').innerText = fn + " " + ln + " Please enter correct password";
    }
});

$('#btn').mouseleave(function signup() { 
    $('#result').value.fadeIn();
});