function ggT(a, b) {
  var r =  a % b;
  while(r > 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}


