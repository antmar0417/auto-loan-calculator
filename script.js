function calc() {
  const amount = document.getElementById("amount").value;
  checkAmount(amount);
  const interest =
    parseFloat(document.getElementById("interest").value) / 100 + 1;
  const year = document.getElementById("year").value;
  const cashDepositPercent = document.getElementById("cashDeposit").value;
  checkInterest(cashDepositPercent);
  const cashDeposit = (parseFloat(cashDepositPercent) / 100) * amount;
  const amountAfter = (amount - cashDeposit) * Math.pow(interest, year);
  const calc = (Math.pow(interest, year) - 1) / (interest - 1);
  const res = amountAfter / calc / 12;

  document.getElementById("result").value = res.toFixed(2);
  document.getElementById("cashDeposit").value = cashDeposit;
}

function checkAmount(amount) {
  if (amount == "") {
    window.alert("You must provide an amount!");
  }
}

function checkInterest(cashDepositPercent) {
  if (cashDepositPercent < 20) {
    window.alert("The Deposit should be atleast 20 Percent!");
  }
}
