<script setup lang="ts">
const lines = ['10']
const N = Number(lines[0])
const isPrime = new Uint8Array(N + 1)
isPrime.fill(1, 2)

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i] === 0) {
    continue
  }

  for (let multiple = i * i; multiple <= N; multiple += i) {
    isPrime[multiple] = 0
  }
}

let count = 0

for (let i = 2; i <= N; i++) {
  count += isPrime[i]
}

console.log(count)
</script>
