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

var arrTask = [];
var kgv;


//Getting a random Integer between min and max, both inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function for different numbers for numerator and denominator
function getDifferentRandom(n) {
  var z;
  do {
    z = getRandomInt(2, 10);
  } while(n == z);
  return z;
}

function edit_p(id, str) {
     document.getElementById(id).innerHTML = str;
}

function getRandomOperation() {
  var operations = ['+', '-', '*', '/'];
  return operations[getRandomInt(0,3)];
}

function createFrac(level) {
  //Für level 1 wird operation nicht benötigt, da man nur ggt oder kgv berechnen muss
  if(level == 1 || level == 2) {
    //arrTask 1
    arrTask.push([getRandomInt(1, 10)]);
    arrTask[0].push([getDifferentRandom(arrTask[0][0])]);
    //Operation
    arrTask.push([getRandomOperation()]);
    //arrTask 2
    arrTask.push([getRandomInt(1, 10)]);
    arrTask[2].push(getDifferentRandom(arrTask[2][0]));
    //'='
    arrTask.push(['=']);
    //calculateResult();
  } else if (level == 3) {

  }
}

createFrac(1);
alert(arrTask[0][0] +"/" + arrTask[0][1]+ " " + arrTask[1][0] + " " + arrTask[2][0] + "/" + arrTask[2][1] + " " + arrTask[3][0]);
var frac = calculateResult(arrTask[0][0], arrTask[0][1], arrTask[2][0], arrTask[2][1]);
alert(frac[0] + "/" + frac[1]);

function calculateResult(nom1, den1, operation, nom2, den2) {
  //shorten the arrTasks
  var ggt1 = ggT(nom1, den1);
  var ggt2 = ggT(nom2, den2);
  var frac = [];

  kgv = kgV(den1, den2);


  switch(operation) {
    case '+':
      nom1 *= kgv / den1 ;
      nom2 *= kgv / den2;
      frac.push(nom1 + nom2, kgv);
      break;
    case '-':
      nom1 *= kgv / den1 ;
      nom2 *= kgv / den2;
      frac.push(nom1 - nom2, kgv);
      break;
    case '*':
      nom1 *= nom2;
      den1 *= den2;
      var ggtr = ggT(nom1, den1);
      frac.push(nom1 / ggtr, den1 / ggtr);
      break;
    case '/':
      nom1 *= den2;
      den1 *= nom2;
      var ggtr = ggT(nom1, den1);
      frac.push(nom1 / ggtr, den1 / ggtr);
      break;
    default:
      alert("Fehler: Ungültige Operation");
  }
  return frac;
}

//Test
/*
createFrac(1);
alert(numerator_1 + "/" + denominator_1 + " " + operation + " " + numerator_2 + "/" + denominator_2 + " = ");
var r = calculateResult();
alert(r[0] + "/" + r[1])*/
