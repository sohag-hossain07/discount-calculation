// discount
function discountValue(coupon, price) {
  const discount = (price / 100) * 30;
  return discount;
}

document
  .getElementById("payment-button")
  .addEventListener("click", function () {
    // get value
    const priceValueString = document.getElementById("price");
    const price = parseFloat(priceValueString.innerText);

    // coupon
    const couponString = document.getElementById("coupon");
    const coupon = couponString.value;
    const discount = discountValue(coupon, price);

    // set value
    const paymentTotal = document.getElementById("payment-total");
    // error message field
    const error = document.getElementById("error-message");
    if (coupon === "disc30") {
      paymentTotal.innerText = (price - discount).toFixed(2);
      error.style.display = "none";
    } else if (coupon === "") {
      paymentTotal.innerText = price.toFixed(2);
      error.style.display = "none";
    } else {
      error.innerText = "*Invalid Coupon";
      error.style.display = "block";
      error.style.color = "tomato";
      error.style.fontSize = "14px";
      error.style.marginBottom = "10px";
      paymentTotal.innerText = price.toFixed(2);
    }

    // clear input
    couponString.value = "";
  });
