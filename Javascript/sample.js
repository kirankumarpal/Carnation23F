function addition(fn, ln){
    result = parseInt(fn) + parseInt(ln);
    console.log(result);
    document.getElementById('i2-1').value = result ;
}

function add() {
    let fn = document.getElementById('i1-1').value;
    let ln = document.getElementById('i1-2').value;
    let result = parseInt(fn) + parseInt(ln);
    document.getElementById('i2-1').value = result ;
}

function subtract(a,b){
    let fn = document.getElementById('i1-1').value;
    let ln = document.getElementById('i1-2').value;
    let result = parseInt(fn) - parseInt(ln);
    document.getElementById('i2-2').value = result ;
}


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

