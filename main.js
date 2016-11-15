
var button = document.querySelector("#result");
var button2 = document.querySelector("#result2");
var button3 = document.querySelector("#result3");
var button4 = document.querySelector("#result4");

button.addEventListener("click", add);
button2.addEventListener("click", subtract);
button3.addEventListener("click", mult);
button4.addEventListener("click", divide);

var input1 = document.querySelector("#number-1");
var input2 = document.querySelector("#number-2");

function add () {
  var sum = parseFloat(input1.value)  + parseFloat(input2.value);
  document.querySelector("#total").innerHTML = sum;
}

function subtract () {
  var sub = parseFloat(input1.value) - parseFloat(input2.value);
  document.querySelector("#total").innerHTML = sub;
}

function mult () {
  var mult = parseFloat(input1.value) * parseFloat(input2.value);
  document.querySelector("#total").innerHTML = mult;
}

function divide () {
  var divide = parseFloat(input1.value) / parseFloat(input2.value);
  document.querySelector("#total").innerHTML = divide;
}
