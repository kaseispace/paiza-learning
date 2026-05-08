<script setup lang="ts">
const lines = [
  '3 3',
  '1 2 3',
  '3 6 9',
]
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

const MOD = 1000000000
const MAXS = 10000

const dpA: number[] = Array(MAXS + 1).fill(0)
const dpB: number[] = Array(MAXS + 1).fill(0)

dpA[0] = 1

for (const x of a) {
  for (let s = MAXS - x; s >= 0; s--) {
    dpA[s + x] = (dpA[s + x] + dpA[s]) % MOD
  }
}

dpB[0] = 1

for (const x of b) {
  for (let s = MAXS - x; s >= 0; s--) {
    dpB[s + x] = (dpB[s + x] + dpB[s]) % MOD
  }
}

let ans = 0

for (let s = 0; s <= MAXS; s++) {
  ans = (ans + dpA[s] * dpB[s]) % MOD
}

console.log(ans)
</script>
