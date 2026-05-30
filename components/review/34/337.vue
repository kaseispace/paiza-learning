<script setup lang="ts">
const lines = ['10']
const N = Number(lines[0])
const MOD = 1000000007

const memo: number[] = Array(N + 1).fill(-1)

const fib = (n: number) => {
  if (memo[n] !== -1) return memo[n]
  if (n === 1 || n === 2) return memo[n] = 1

  memo[n] = (fib(n - 1) + fib(n - 2)) % MOD
  return memo[n]
}

console.log(fib(N))
</script>
