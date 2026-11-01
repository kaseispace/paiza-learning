<script setup lang="ts">
const lines = ['2147483647']
const N = Number(lines[0])

function isPrime(n: number) {
  if (n < 2) {
    return false
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(N) ? 'YES' : 'NO')
</script>
