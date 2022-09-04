// variables

let cardholder_number = document.getElementById("card_number");
let cardholder_name = document.getElementById("cardholder_name");
let input_mm = document.getElementById("input_mm");
let input_yy = document.getElementById("input_yy");
let input_cvc = document.getElementById("input_cvc");
let error = document.getElementById("error");
let button = document.getElementById("button");
let input_name = document.querySelector(".input_name");
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

//// confirm name

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate(cardholder_name.value);
});

function validate(cardholder_name) {
  let exp_reg = /[a-zA-ZñÑáéíóú\s]{1,50}/g;
  if (exp_reg.test(cardholder_name) == true) {
    error.style.visibility = "hidden";
  } else {
    input_name.style.border = "1px solid red";
    error.style.visibility = "visible";
  }
}

////////////////////////////////////////////////////////////
// window.addEventListener("load", () => {
//   let form = document.getElementById("form");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     validaCampos();
//   });
//   let validaCampos = () => {
//     let valor_name = cardholder_name.value;
//     let valor_number = cardholder_number.value;
//     let valor_mm = input_mm.value;
//     let valor_yy = input_yy.value;
//     let valor_cvc = input_cvc.value;
//   };
// });
