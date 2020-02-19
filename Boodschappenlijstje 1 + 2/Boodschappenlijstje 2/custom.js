function totalPrice() {

  var pdtPrice = document.getElementsByClassName("productPrice")[0].innerText;
  var qtyInput = document.getElementsByClassName("quantityInput")[0].value;

  for (var i = 0; i < qtyInput.length; i++) {
    var qtyValue = '';
    qtyValue += qtyInput[i];
    var subtotal = parseFloat(pdtPrice) * qtyInput
    if (!isNaN(subtotal))
      document.getElementById("subtotal").innerHTML = subtotal
  }

  console.log(subtotal);

  var total = '';
  for (var i = 0; i < total.length; i++) {
    total = subtotal;
    total++
  }



}totalPrice()
