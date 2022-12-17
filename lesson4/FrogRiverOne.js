const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];

function solution(X, A) {
  const s = new Set();
  for (i = 0; i < A.length; i++) {
    s.add(A[i]);
    if (s.size === X) {
      return i;
    }
  }
  return -1;
}

console.log(solution(X, A));
