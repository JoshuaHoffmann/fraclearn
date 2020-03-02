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

function edit_p(id, str) {
     $("#" + id).value.replace(str);
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

function taskArrtoUI(arr) {
  var ltex_task = "";
  for(element of arr) {
    if(element.length == 2) {
      ltex_task.concat(`\frac{${element[0]}}{${element[1]}} `)
    } else {
      ltex_task.concat(`${element[0]} `)
    }
  }
  edit_p("task_p", ltex_task);
}
