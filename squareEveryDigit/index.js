function squareDigits(num) {
  let finalString = "";
  const string = num.toString();
  for (let i = 0; i < string.length; i++) {
    finalString += Number(string[i]) ** 2;
  }
  return Number(finalString);
}
