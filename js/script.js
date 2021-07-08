let i = 0;
let message = "";

function plus() {
    i++
    document.getElementById("message").innerHTML = message + i;
}

function minus() {
    i--
    document.getElementById("message").innerHTML = message + i;

}