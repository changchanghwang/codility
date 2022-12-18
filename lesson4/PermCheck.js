const A = [4, 1, 3, 2];

function solution(A) {
  const max = Math.max(...A);
  const s = new Set(A);
  return s.size !== max || s.size !== A.length ? 0 : 1;
}

console.log(solution(A));
