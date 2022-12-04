const A = [1, 2, 3, 5];

function solution(A) {
  if (A.length === 0) {
    return 1;
  }
  const sum = ((A.length + 1) * (A.length + 2)) / 2;
  return sum - A.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(A));
