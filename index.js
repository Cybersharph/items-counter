

let number = 0;


function Increment() {
    document.getElementById("number").innerText = number + 1;
    number++;
}

function Decrement() {
    document.getElementById("number").innerText = number - 1;
    number--;
}

function Hidden() {
    number = 0; // reset number vari to 0;
    document.getElementById("number").innerText = number;
}



