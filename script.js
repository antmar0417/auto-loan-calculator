function calc() {
  var amount = parseFloat(document.getElementById("amount").value);
  var interest =
    parseFloat(document.getElementById("interest").value) / 100 + 1;
  var year = document.getElementById("year").value;
  var amountAfter = amount * Math.pow(interest, year);
  var calc = (Math.pow(interest, year) - 1) / (interest - 1);
  var res = amountAfter / calc / 12;

  document.getElementById("result").value = res.toFixed(2);
}
