<script setup lang="ts">
const lines = [
  '1 500000',
  '1',
]
const [n, k] = lines[0].split(' ').map(Number)
const a: number[] = []

for (let i = 0; i < n; i++) {
  a.push(Number(lines[i + 1]))
}

const MAX = 21000000

const isPrime = new Uint8Array(MAX + 1)
isPrime.fill(1, 2)

for (let p = 2; p * p <= MAX; p++) {
  if (isPrime[p] === 0) {
    continue
  }

  for (let multiple = p * p; multiple <= MAX; multiple += p) {
    isPrime[multiple] = 0
  }
}

const primeCount = new Uint32Array(MAX + 1)

for (let i = 1; i <= MAX; i++) {
  primeCount[i] = primeCount[i - 1] + isPrime[i]
}

function canUse(x: number) {
  let total = 0

  for (const value of a) {
    total += primeCount[value + x]

    if (total > k) {
      return false
    }
  }

  return true
}

let low = 0
let high = 20000000

while (high - low > 1) {
  const mid = Math.floor((low + high) / 2)

  if (canUse(mid)) {
    low = mid
  }
  else {
    high = mid
  }
}

console.log(low)
</script>
