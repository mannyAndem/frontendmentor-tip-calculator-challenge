let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("number");
let tip5 = document.getElementById("5%");
let tip10 = document.getElementById("10%");
let tip15 = document.getElementById("15%");
let tip25 = document.getElementById("25%");
let tip50 = document.getElementById("50%");
let customTip = document.getElementById("custom");
let tip;
let reset = document.getElementById("reset-button");

tip5.addEventListener("click", () => {
  tip5.setAttribute("active", "true");
  tip15.setAttribute("active", false);
  tip10.setAttribute("active", false);
  tip25.setAttribute("active", false);
  tip50.setAttribute("active", false);
  tip = 5;
  console.log(tip);
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});
tip10.addEventListener("click", () => {
  tip10.setAttribute("active", "true");
  tip5.setAttribute("active", false);
  tip15.setAttribute("active", false);
  tip25.setAttribute("active", false);
  tip50.setAttribute("active", false);
  tip = 10;
  console.log(tip);
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});
tip15.addEventListener("click", () => {
  tip15.setAttribute("active", "true");
  tip5.setAttribute("active", false);
  tip10.setAttribute("active", false);
  tip25.setAttribute("active", false);
  tip50.setAttribute("active", false);
  tip = 15;
  console.log(tip);
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});
tip25.addEventListener("click", () => {
  tip25.setAttribute("active", "true");
  tip5.setAttribute("active", false);
  tip10.setAttribute("active", false);
  tip15.setAttribute("active", false);
  tip50.setAttribute("active", false);
  tip = 25;
  console.log(tip);
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});
tip50.addEventListener("click", () => {
  tip50.setAttribute("active", "true");
  tip5.setAttribute("active", false);
  tip10.setAttribute("active", false);
  tip15.setAttribute("active", false);
  tip25.setAttribute("active", false);
  tip = 50;
  console.log(tip);
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});

customTip.addEventListener("input", () => {
  if (customTip.value <= 100 && customTip.value > 1) {
    tip = customTip.value;
    tip5.setAttribute("active", "false");
    tip15.setAttribute("active", false);
    tip10.setAttribute("active", false);
    tip25.setAttribute("active", false);
    tip50.setAttribute("active", false);
    if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
      let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
      let total = bill.value / numberOfPeople.value + tipAmount;
      document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
        2
      )}`;
      document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
    }
  }
});

bill.addEventListener("input", () => {
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});
numberOfPeople.addEventListener("input", () => {
  if (bill.value > 0 && numberOfPeople.value > 0 && tip) {
    let tipAmount = (bill.value / numberOfPeople.value) * (tip / 100);
    let total = bill.value / numberOfPeople.value + tipAmount;
    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(
      2
    )}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
  }
});

reset.addEventListener("click", () => {
  tip = null;
  tip5.setAttribute("active", "false");
  tip15.setAttribute("active", false);
  tip10.setAttribute("active", false);
  tip25.setAttribute("active", false);
  tip50.setAttribute("active", false);
  customTip.value = null;
  bill.value = null;
  numberOfPeople.value = null;
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
});
