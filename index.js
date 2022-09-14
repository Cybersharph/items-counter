

let number = 0;


function Increment() {
    document.getElementById("number").innerText = number + 1;
    number++;
}

function Decrement() {
    // if helps to not decrement zeros towards negative
    if (number > 0) {
        document.getElementById("number").innerText = number - 1;
        number--;
    }
}

function Hidden() {
    number = 0; // reset number variable to 0;
    document.getElementById("number").innerText = number;
}



