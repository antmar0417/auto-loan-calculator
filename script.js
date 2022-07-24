function calc() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest =
    parseFloat(document.getElementById("interest").value) / 100 + 1;
  const year = document.getElementById("year").value;
  const amountAfter = amount * Math.pow(interest, year);
  const calc = (Math.pow(interest, year) - 1) / (interest - 1);
  const res = amountAfter / calc / 12;

  document.getElementById("result").value = res.toFixed(2);
}
