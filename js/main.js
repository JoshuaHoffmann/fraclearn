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

var operations = ['+', '-', '*', '/'];
var operation = getRandomOperation();
var aTask = [];

//Getting a random Integer between min and max, both inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function updateUI(arr) {
  // arr = [[number1,number2],["operator"],[number3,number4]]
  for(elem of arr) {
    if(elem.length == 2) {
      $("#task").append(`<math><mfrac><mi>${elem[0]}</mi><mi>${elem[1]}</mi></mfrac></math>`)
    } else {
      $("#task").append(`<p class="fraction">${elem[0]}</p>`)
    }
  }
}
