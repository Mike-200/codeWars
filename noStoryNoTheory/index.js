function accum(s) {
  // your code
  let finalString = "";
  for (let i = 0; i < s.length; i++) {
    finalString += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      finalString += s[i].toLowerCase();
    }
    finalString += "-";
  }
  answer = finalString.slice(0, -1);
  return answer;
}
