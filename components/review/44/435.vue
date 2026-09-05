<script setup lang="ts">
const lines = [
  '8734',
  '23128',
]
const K = Number(lines[0])
const N = Number(lines[1])

const MOD = 10000

const cumulative: number[] = Array(N + 1).fill(0)

let answer = 0

for (let i = 1; i <= N; i++) {
  let current: number

  if (i <= K) {
    current = 1
  }
  else {
    current = (cumulative[i - 1] - cumulative[i - K - 1] + MOD) % MOD
  }

  cumulative[i] = (cumulative[i - 1] + current) % MOD

  if (i === N) {
    answer = current
  }
}

console.log(answer)
</script>
