function addition(fn,ln){
    console.log(fn+ln);
}

function add() {
    var fn = document.getElementById('i1-1').value;
    var ln = document.getElementById('i1-2').value;
    document.getElementById('answer').innerText = addition(fn,ln);
}

// function subtract(a,b){
//     console.log(a-b);
// }
// function multiply(a,b){
//     console.log(a*b);
// }
// function divide(a,b){
//     console.log(a/b);
// }
// add(8,8);
// subtract(8,8);
// multiply(8,8);
// divide(8,8);

