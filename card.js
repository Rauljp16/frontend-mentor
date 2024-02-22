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
let menFinal = document.getElementById("menFinal");
// Número de tarjeta
card_number.addEventListener("input", (event) => {
  let inputText = event.target.value;
  document.querySelector(".card_number").innerHTML = inputText.toUpperCase();
});

// Nombre de tarjeta

cardholder_name.addEventListener("input", (event) => {
  let inputText = event.target.value;
  document.querySelector(".card_name").innerHTML = inputText.toUpperCase();
});

// Fecha de caducidad mm

input_mm.addEventListener("input", (event) => {
  let inputText = event.target.value;
  document.querySelector(".mm").innerHTML = inputText;
});

// Fecha de caducidad yy

input_yy.addEventListener("input", (event) => {
  let inputText = event.target.value;
  document.querySelector(".yy").innerHTML = inputText;
});

// Código CVC

input_cvc.addEventListener("input", (event) => {
  let inputText = event.target.value;
  document.querySelector(".cvc").innerHTML = inputText;
});

// confirmar formulario ///

const formValid = {
  cardholder_number: false,
  cardholder_name: false,
  input_mm: false,
  input_yy: false,
  input_cvc: false,
};

// confirm name///

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
  } else {
    input_name.style.border = "1px solid red";
    error.style.visibility = "visible";
    formValid.cardholder_name = false;
  }
}

// confirm number

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_number(cardholder_number.value);
});

function validate_number(cardholder_number) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(cardholder_number) == true) {
    input_number.style.border = "1px solid black";
    error_number.style.visibility = "hidden";
    formValid.cardholder_number = true;
  } else {
    input_number.style.border = "1px solid red";
    error_number.style.visibility = "visible";
    formValid.cardholder_number = false;
  }
}

//confirm mm

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_mm(input_mm.value);
});

function validate_mm(input_mm) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_mm) == true) {
    input_Cmm.style.border = "1px solid black";
    error_mm.style.visibility = "hidden";
    formValid.input_mm = true;
  } else {
    input_Cmm.style.border = "1px solid red";
    error_mm.style.visibility = "visible";
    formValid.input_mm = false;
  }
}

//confirm yy

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_yy(input_yy.value);
});

function validate_yy(input_yy) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_yy) == true) {
    input_Cyy.style.border = "1px solid black";
    error_yy.style.visibility = "hidden";
    formValid.input_yy = true;
  } else {
    input_Cyy.style.border = "1px solid red";
    error_yy.style.visibility = "visible";
    formValid.input_yy = false;
  }
}
//confirm cvc

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate_cvc(input_cvc.value);
});

function validate_cvc(input_cvc) {
  let exp_reg = /[^a-z ]\ *([.0-9])*\d/g;
  if (exp_reg.test(input_cvc) == true) {
    input_Ccvc.style.border = "1px solid black";
    error_cvc.style.visibility = "hidden";
    formValid.input_cvc = true;
  } else {
    input_Ccvc.style.border = "1px solid red";
    error_cvc.style.visibility = "visible";
    formValid.input_cvc = false;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  enviarForm(formValid);
});
function enviarForm(formValid) {
  if (
    formValid.cardholder_name == true &&
    formValid.cardholder_number == true &&
    formValid.input_mm == true &&
    formValid.input_yy == true &&
    formValid.input_cvc == true
  ) {
    form.style.visibility = "hidden";
    menFinal.style.visibility = "visible";
  } else {
    form.style.visibility = "visible";
    menFinal.style.visibility = "hidden";
  }
}
