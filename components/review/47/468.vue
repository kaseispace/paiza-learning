<script setup lang="ts">
const lines = ['33']
const N = Number(lines[0])
const MOD = 998244353

const count: number[] = Array(21).fill(0)
const popcount = new Uint8Array(N + 1)

for (let i = 1; i <= N; i++) {
  popcount[i] = popcount[i >> 1] + (i & 1)
  count[popcount[i]]++
}

let answer = 1

for (const numberOfValues of count) {
  answer = (answer * (numberOfValues + 1)) % MOD
}

answer = (answer - 1 + MOD) % MOD

console.log(answer)
</script>
