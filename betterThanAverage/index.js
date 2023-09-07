function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = 0;
  classPoints.forEach((point) => {
    total += point;
  });
  let average = total / classPoints.length;
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}
