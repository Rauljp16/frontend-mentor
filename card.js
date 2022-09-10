// variables

let cardholder_number = document.getElementById("card_number");
let cardholder_name = document.getElementById("cardholder_name");
let input_mm = document.getElementById("input_mm");
let input_yy = document.getElementById("input_yy");
let input_cvc = document.getElementById("input_cvc");

let error = document.getElementById("error");
let error_number = document.getElementById("error_number");
let error_mm = document.getElementById("error_mm");
let error_yy = document.getElementById("error_yy");
let error_cvc = document.getElementById("error_cvc");

let button = document.getElementById("button");

let input_name = document.querySelector(".input_name");
let input_number = document.querySelector(".input_number");
let input_Cmm = document.querySelector(".inputMM");
let input_Cyy = document.querySelector(".inputYY");
let input_Ccvc = document.querySelector(".inputCVC");

let form = document.getElementById("form");

///////numero de tarjrta

card_number.addEventListener("change", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".card_number").innerHTML = inputText.toUpperCase();
});

////// nombre de tarjeta

cardholder_name.addEventListener("change", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".card_name").innerHTML = inputText.toUpperCase();
});

////// fecha de caducidad mm

input_mm.addEventListener("change", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".mm").innerHTML = inputText;
});

////// fecha de caducidad yy

input_yy.addEventListener("change", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".yy").innerHTML = inputText;
});

////// codigo cvc

input_cvc.addEventListener("change", (event) => {
  let inputText = event.path[0].value;
  document.querySelector(".cvc").innerHTML = inputText;
});
/// confirmar formulario ///
const formValid = {
  cardholder_number: false,
  cardholder_name: false,
  input_mm: false,
  input_yy: false,
  input_cvc: false,
};
/// confirm name///

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate(cardholder_name.value);
});

function validate(cardholder_name) {
  let exp_reg = /[a-zA-ZñÑáéíóú\s]{1,50}/g;
  if (exp_reg.test(cardholder_name) == true) {
    input_name.style.border = "1px solid black";
    error.style.visibility = "hidden";
    formValid.cardholder_name = true;
    console.table(formValid);
  } else {
    input_name.style.border = "1px solid red";
    error.style.visibility = "visible";
    formValid.cardholder_name = false;
    console.table(formValid);
  }
}

///// confirm number/////

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_number(cardholder_number.value);
});

function validate_number(cardholder_number) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(cardholder_number) == true) {
    input_number.style.border = "1px solid black";
    error_number.style.visibility = "hidden";
  } else {
    input_number.style.border = "1px solid red";
    error_number.style.visibility = "visible";
  }
}

//////confirm mm ////////

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_mm(input_mm.value);
});

function validate_mm(input_mm) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_mm) == true) {
    input_Cmm.style.border = "1px solid black";
    error_mm.style.visibility = "hidden";
  } else {
    input_Cmm.style.border = "1px solid red";
    error_mm.style.visibility = "visible";
  }
}

//////confirm yy ////////

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_yy(input_yy.value);
});

function validate_yy(input_yy) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_yy) == true) {
    input_Cyy.style.border = "1px solid black";
    error_yy.style.visibility = "hidden";
  } else {
    input_Cyy.style.border = "1px solid red";
    error_yy.style.visibility = "visible";
  }
}
//////confirm cvc ////////

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_cvc(input_cvc.value);
});

function validate_cvc(input_cvc) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_cvc) == true) {
    input_Ccvc.style.border = "1px solid black";
    error_cvc.style.visibility = "hidden";
  } else {
    input_Ccvc.style.border = "1px solid red";
    error_cvc.style.visibility = "visible";
  }
}
