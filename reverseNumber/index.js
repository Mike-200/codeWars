function digitize(n) {
  //code here

  return n.toString().split("").reverse().map(Number);
  // return split(n).reverse()
}
