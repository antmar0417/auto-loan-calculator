function calc() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest =
    parseFloat(document.getElementById("interest").value) / 100 + 1;
  const year = document.getElementById("year").value;
  const cashDeposit =
    (parseFloat(document.getElementById("cashDeposit").value) / 100) * amount;
  const amountAfter = (amount - cashDeposit) * Math.pow(interest, year);
  const calc = (Math.pow(interest, year) - 1) / (interest - 1);
  const res = amountAfter / calc / 12;

  document.getElementById("result").value = res.toFixed(2);
  document.getElementById("cashDeposit").value = `${cashDeposit} USD`;
}
