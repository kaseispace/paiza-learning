<script setup lang="ts">
const lines = ['9']
const N = Number(lines[0])
const isPrime: boolean[] = Array(N + 1).fill(true)

isPrime[0] = isPrime[1] = false

for (let i = 2; i * i <= N; i++) {
  if (!isPrime[i]) continue

  for (let j = i * i; j <= N; j += i) {
    isPrime[j] = false
  }
}

let ans: number

if (isPrime[N]) {
  ans = 1
}
else if (N % 2 === 0) {
  let can2 = false

  for (let p = 2; p <= N - 2; p++) {
    if (isPrime[p] && isPrime[N - p]) {
      can2 = true
      break
    }
  }

  ans = can2 ? 2 : 3
}
else {
  ans = isPrime[N - 2] ? 2 : 3
}

console.log(ans)
</script>
