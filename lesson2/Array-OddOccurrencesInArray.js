const A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
  const count = A.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (c in count) {
    if (count[c] % 2 !== 0) {
      return Number(c);
    }
  }
}

console.log(solution(A));
