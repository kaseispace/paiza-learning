<script setup lang="ts">
const lines = [
  '3',
  '10',
]
const K = Number(lines[0])
const N = Number(lines[1])
const MOD = 10000

const KB: number[] = new Array(N + 1).fill(0)
let C = 0

for (let i = 1; i <= N; i++) {
  if (i <= K) {
    KB[i] = 1
  }
  else {
    let sum = 0
    for (let j = i - K; j < i; j++) {
      sum += KB[j]
    }

    KB[i] = sum % MOD
  }

  C = (C + KB[i]) % MOD
}

console.log(String(C))
</script>
