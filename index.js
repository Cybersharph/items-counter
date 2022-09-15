

let number = 0;

function Increment() {
    document.getElementById("number").innerText = number + 1;
    number++;
}

function Decrement() {
    // it helps to not decrement zeros towards negative
    if (number > 0) {
        document.getElementById("number").innerText = number - 1;
        number--;
    }
}

function Reset() {
    number = 0; // reset number variable to 0;
    document.getElementById("number").innerText = number;
}


// Tracking saves
function Save(){
    if(number > 0){
        recentEl = document.getElementById("recent");
    // Check if the html element is empty
        if (recentEl.childNodes.length === 0) {
            recentEl.innerText = number;
        } 
        else {
            recentEl.innerText += " - " + number;
        }
    } else {
        alert("You can't save a ZERO");
        // A better way will go here
    }
}

// Clear saves 

function Clear() {
    Reset();
    recentEl.innerText = "";
}