<script setup lang="ts">
const lines = [
  '5',
  '5',
  '6',
  '7',
  '8',
  '9',
]
const A = lines.slice(1).map(Number)

const isPrime = (n: number) => {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

for (const num of A) {
  console.log(isPrime(num) ? 'pass' : 'failure')
}
</script>
