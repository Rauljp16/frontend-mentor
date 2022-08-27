const parrafo = document.querySelector("p");
const cardholder_name = document.getElementById("cardholder_name");

cardholder_name.addEventListener("change", (e) => {
  console.log(e);
  //   parrafo.texContent = e.target.value;
});
