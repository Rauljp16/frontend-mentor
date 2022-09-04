// variables

let cardholder_number = document.getElementById("card_number");
let cardholder_name = document.getElementById("cardholder_name");
let input_mm = document.getElementById("input_mm");
let input_yy = document.getElementById("input_yy");
let input_cvc = document.getElementById("input_cvc");
let error = document.getElementById("error");
let button = document.getElementById("button");

///////numero de tarjrta

card_number.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".card_number").innerHTML = inputText.toUpperCase();
});

////// nombre de tarjeta

cardholder_name.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".card_name").innerHTML = inputText.toUpperCase();
});

////// fecha de caducidad mm

input_mm.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".mm").innerHTML = inputText;
});

////// fecha de caducidad yy

input_yy.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".yy").innerHTML = inputText;
});

////// codigo cvc

input_cvc.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".cvc").innerHTML = inputText;
});

////// confirm name

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_name(cardholder_name.value)

});

function validate_name(cardholder_name) {
  let exp_reg = /[a-zA-ZñÑáéíóú\s]{1,50}/g;

  if (exp_reg.test(cardholder_name) == true) {
    console.log("is true");
  } else {
    error.style.visibility = "visible",
      cardholder_name.border = red;
    console.log("nombre no valido")
  }
}

////// confirm number

// let error_number = document.getElementById("error_number");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   validate_form(card_number.value)

// });

// function validate_form(card_number) {
//   let exp_reg_letters = /([.0-9])*\d/g;

//   if (exp_reg_letters.test(card_number) == true) {
//     console.log("is true");
//   } else {
//     card_number.style.border = "3px solid red"
//     error_number.style.visibility = "visible";
//     console.log("numero no valido")

//   }
// }



// function validate_form(cardholder_number) {
//   let exp_reg = /[0-9]+/g;
//   console.log(exp_reg.test(cardholder_number));
// }
