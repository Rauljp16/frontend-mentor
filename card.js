
///////numero de tarjrta

let cardholder_number = document.getElementById("card_number");

card_number.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".card_number").innerHTML = inputText.toUpperCase();
})

////// nombre de tarjeta

let cardholder_name = document.getElementById("cardholder_name");

cardholder_name.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".card_name").innerHTML = inputText.toUpperCase();
})


////// fecha de caducidad mm

let input_mm = document.getElementById("input_mm");

input_mm.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".mm").innerHTML = inputText;
})

////// fecha de caducidad yy

let input_yy = document.getElementById("input_yy");

input_yy.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".yy").innerHTML = inputText;
})
////// codigo cvc

let input_cvc = document.getElementById("input_cvc");

input_cvc.addEventListener("keyup", (event) => {
    let inputText = event.path[0].value;
    document.querySelector(".cvc").innerHTML = inputText;
})
////// confirm formulario