function reverseWords(str) {
  // Go for it
  newString = "";
  const array = str.split(" ");
  for (let j = 0; j < array.length; j++) {
    for (let i = array[j].length; i > 0; i--) {
      newString += array[j][i - 1];
    }
    newString += " ";
  }
  const finalString = newString.slice(0, -1);
  return finalString;
}
