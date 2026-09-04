<script setup lang="ts">
const lines = [
  '6 16',
  '2 0 2 2 2 2',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

let requiredTwos = 0
let product = 1

while (product < K) {
  product *= 2
  requiredTwos++
}

if (requiredTwos === 0) {
  if (A.some(value => value !== 0)) {
    console.log(1)
  }
  else {
    console.log(-1)
  }

  process.exit(0)
}

let answer = Infinity
let left = 0
let twoCount = 0

for (let right = 0; right < N; right++) {
  if (A[right] === 0) {
    left = right + 1
    twoCount = 0
    continue
  }

  if (A[right] === 2) {
    twoCount++
  }

  while (twoCount >= requiredTwos) {
    answer = Math.min(answer, right - left + 1)

    if (A[left] === 2) {
      twoCount--
    }

    left++
  }
}

console.log(answer === Infinity ? -1 : answer)
</script>
