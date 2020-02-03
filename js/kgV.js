function kgV(a, b) {
  var v = b;
  while(v % a != 0) {
    v += b;
  }
  return v;
}
