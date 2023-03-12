function getMaxSubSum(arr) {
  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;

    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSubSum = Math.max(maxSubSum, subSum);
    }
  }

  return maxSubSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5)
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11)
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3)
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
console.log(getMaxSubSum([1, 2, 3]) == 6)