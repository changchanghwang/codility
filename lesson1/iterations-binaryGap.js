const N = 1041;

function solution(N) {
  const binaryNum = N.toString(2);
  let count = 0;
  const countArray = [];
  for (i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === '0') {
      count++;
    }
    if (binaryNum[i] === '1') {
      countArray.push(count);
      count = 0;
    }
  }
  countArray.sort((a, b) => b - a);
  return countArray[0];
}

console.log(solution(N));
