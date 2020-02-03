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
