<script setup lang="ts">
const lines = [
  '3 3',
  '1 2 3',
  '2 2 2',

]
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

const MOD = 1000000000n

function countSubsetSums(numbers: number[]) {
  const maxSum = numbers.reduce((sum, value) => sum + value, 0)

  const dp: bigint[] = Array(maxSum + 1).fill(0n)
  dp[0] = 1n

  let currentSum = 0

  for (const value of numbers) {
    for (let sum = currentSum; sum >= 0; sum--) {
      dp[sum + value] = (dp[sum + value] + dp[sum]) % MOD
    }

    currentSum += value
  }

  return dp
}

const countA = countSubsetSums(a)
const countB = countSubsetSums(b)

let answer = 0n

const maxCommonSum = Math.min(countA.length, countB.length)

for (let sum = 0; sum < maxCommonSum; sum++) {
  answer = (answer + countA[sum] * countB[sum]) % MOD
}

console.log(answer.toString())
</script>
