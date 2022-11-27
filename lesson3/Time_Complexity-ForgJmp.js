const x = 10;
const y = 85;
const d = 30;

function solution(X, Y, D) {
  const value = Math.floor((Y - X) / D);
  return (Y - X) % D == 0 ? value : value + 1;
}

console.log(solution(x, y, d));
