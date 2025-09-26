#!/usr/bin/env node

function fibs(reps) {
  let fibsArray = [0, 1];

  if (reps <= 0) {
    return (fibsArray = []);
  }

  if (reps == 1) {
    return (fibsArray = [0]);
  }

  for (let i = 2; i < reps; i++) {
    fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }

  return fibsArray;
}

console.log(fibs(-2));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(8));
console.log(fibs(20));
