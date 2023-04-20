

let getform = document.getElementById("getform");
console.log(getform);

getform.addEventListener("submit", function (event) {
  let getquantity = document.getElementById("getquantity").value;
  let quantity = parseInt(getquantity);
  let price = 3.25;
  let total = price * quantity;
  console.log(total);
  console.log(getquantity);
  event.preventDefault();
  alert(`Thank you for you order, total price: $${total} .`);
});
