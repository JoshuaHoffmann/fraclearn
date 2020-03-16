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
var aTask = [];

//Getting a random Integer between min and max, both inclusive
function rndInt(min, max) {
	
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndOperation() {
  return operations[rndInt(0,3)];
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
      $("#task").append(`<span class="frac"><sup>${elem[0]}</sup><span>&frasl;</span><sub>${elem[1]}</sub></span>`)
    } else {
      $("#task").append(`<p class="operator">${elem[0]}</p>`)
    }
  }
}

function generateTask(difficulty) {
	
	// TODO: Difficulties
	var task = []
	const times = 2 // How many fractions
	
	// Fill with fractions
	Array.from({length: times}, () => {
		
		rnd1 = rndInt(1,10), rnd2 = rndInt(1,10)
		while(rnd1/rnd2 == 1)
		  rnd1 = rndInt(1,10)
		task.push([rnd1, rnd2])
	});
	
	// Insert Operations
	task = _.flatMap(task, (value, index, array) =>
     array.length -1 !== index // check for the last item
     ? [value, rndOperation()] // insert op
     : [value] 				   // if last, ignore
	);
	
	aTask = task
	updateUI(task)
    return true	
}

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
