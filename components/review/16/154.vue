<script setup lang="ts">
const lines = ['4']
const N = Number(lines[0])

const isPrime: boolean[] = Array(N + 1).fill(true)
isPrime[0] = isPrime[1] = false
for (let p = 2; p * p <= N; p++) {
  if (isPrime[p]) {
    for (let m = p * p; m <= N; m += p) isPrime[m] = false
  }
}

for (let p = Math.floor(N / 2); p >= 2; p--) {
  const q = N - p
  if (isPrime[p] && isPrime[q]) {
    const a = Math.min(p, q)
    const b = Math.max(p, q)
    console.log(a)
    console.log(b)
    break
  }
}
</script>
