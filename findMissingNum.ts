

function missingNumber(nums: number[]): number {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([0, 1]));