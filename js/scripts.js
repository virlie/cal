var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputadd").text(result);
  });

  $("form#multiply").submit(function(event) {
     event.preventDefault();
    var numberM1 = parseInt($("#multi1").val());
    var numberM2 = parseInt($("#multi2").val());
    console.log(numberM1);
    var resultM = multiply(numberM1, numberM2);
      $("#outputmult").text(resultM);
  });
});
