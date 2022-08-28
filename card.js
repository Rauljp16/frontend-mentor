

let cardholder_name = document.getElementById("text");

text.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".toUpper").innerHTML = inputText.toUpperCase();
})