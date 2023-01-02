const n = 5;
const a = [3, 4, 4, 6, 1, 4, 4];

// 시간복잡도 O(N*M)
function solution(N, A) {
  const arr = new Array(N).fill(0);
  let maxCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      arr.fill(maxCount);
    } else {
      arr[A[i] - 1] += 1;
      maxCount = maxCount < arr[A[i] - 1] ? arr[A[i] - 1] : maxCount;
    }
  }
  return arr;
}

// O(n+m) 이해를 아직 못했다..
function solution2(N, A) {
  const result = Array(N).fill(0);
  let max = 0;
  let lastmax = 0;
  for (let i = 0; i < A.length; i++) {
    let cur = A[i];
    if (cur == N + 1) {
      lastmax = max;
    } else {
      let num = result[cur - 1];
      if (num < lastmax) num = lastmax;
      result[cur - 1] = num + 1;
      if (max < num + 1) max = num + 1;
    }
  }

  return result.map((e) => (e < lastmax ? lastmax : e));
}

console.log(solution(n, a));
