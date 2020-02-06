function ggT(a, b) {
  var r =  a % b;
  while(r > 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}

function kgV(a, b) {
  var v = b;
  while(v % a != 0) {
    v += b;
  }
  return v;
}


var numerator_1;
var denominator_1;

var operations = ['+', '-', '*', '/'];
var operation = getRandomOperation();

var numerator_2;
var denominator_2;

var numerator_result;
var denominator_result;

//Getting a random Integer between min and max, both inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function edit_p(id, str) {
     document.getElementById(id).innerHTML = str;
}

function getRandomOperation() {
  return operations[getRandomInt(0,3)];
}

//function for different numbers in numerator and denominator
function differentRandoms(numerator, denominator, min, max) {
  while(numerator == denominator) {
    denominator = getRandomInt(min, max);
  }
  return denominator;
}

//Trying to write a function for creating fractures for different difficulties :D
function createFrac(level) {
  //The intervals for the different levels are just suggestions, can change if you want
  if(level == 1) {
    numerator_1 = getRandomInt(1,10);
    numerator_2 = getRandomInt(1,10);
    denominator_1 = getRandomInt(2,10);
    denominator_2 = getRandomInt(2,10);
    denominator_1 = differentRandoms(numerator_1, denominator_1, 2, 10);
    denominator_2 = differentRandoms(numerator_2, denominator_2, 2, 10);
  } else if (level == 2) {
    numerator_1 = getRandomInt(1,20);
    numerator_2 = getRandomInt(1,20);
    denominator_1 = getRandomInt(2,20);
    denominator_2 = getRandomInt(2,20);
    denominator_1 = differentRandoms(numerator_1, denominator_1, 2, 20);
    denominator_2 = differentRandoms(numerator_2, denominator_2, 2, 20);
  } else if (level == 3) {
    numerator_1 = getRandomInt(1,30);
    numerator_2 = getRandomInt(1,30);
    denominator_1 = getRandomInt(2,30);
    denominator_2 = getRandomInt(2,30);
    denominator_1 = differentRandoms(numerator_1, denominator_1, 2, 30);
    denominator_2 = differentRandoms(numerator_2, denominator_2, 2, 30);
  }
}

function calculateResult() {
  //shorten the fractures
  var ggt1 = ggT(numerator_1, denominator_1);
  numerator_1 /= ggt1;
  denominator_1 /= ggt1;
  var ggt2 = ggT(numerator_2, denominator_2);
  numerator_2 /= ggt2;
  denominator_2 /= ggt2;

  var kgv = kgV(denominator_1, denominator_2);


  switch(operation) {
    case '+':
      numerator_1 *= kgv / denominator_1;
      numerator_2 *= kgv / denominator_2;
      numerator_result = numerator_1 + numerator_2;
      denominator_result = kgv;
      break;
    case '-':
      numerator_1 *= kgv / denominator_1;
      numerator_2 *= kgv / denominator_2;
      numerator_result = numerator_1 - numerator_2;
      denominator_result = kgv;
      break;
    case '*':
      numerator_result = numerator_1 * numerator_2;
      denominator_result = denominator_1 * denominator_2;
      var ggtr = ggT(numerator_result, denominator_result);
      numerator_result /= ggtr;
      denominator_result /= ggtr;
      break;
    case '/':
      numerator_result = numerator_1 * denominator_2;
      denominator_result = denominator_1 * numerator_2;
      var ggtr = ggT(numerator_result, denominator_result);
      numerator_result /= ggtr;
      denominator_result /= ggtr;
      break;
    default:
      alert("Fehler: Ungültige Operation");
  }
  var result = [numerator_result, denominator_result];
  return result;
}

//Test
createFrac(1);
alert(numerator_1 + "/" + denominator_1 + " " + operation + " " + numerator_2 + "/" + denominator_2 + " = ");
var r = calculateResult();
alert(r[0] + "/" + r[1])
