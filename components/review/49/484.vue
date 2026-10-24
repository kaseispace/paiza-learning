<script setup lang="ts">
const lines = [
  '5',
  '1 1 1 1 1',
]
const MOD = 1e10
const N = Number(lines[0])
const a = lines[1].trim().split(' ').map(Number)

const suf = new Float64Array(N + 2)
suf[N] = 1
suf[N + 1] = 0

let dp = 1
for (let i = N - 1; i >= 0; i--) {
  const k = Math.min(a[i], N - i)
  dp = suf[i + 1] - suf[i + k + 1]
  if (dp < 0) dp += MOD
  let s = suf[i + 1] + dp
  if (s >= MOD) s -= MOD
  suf[i] = s
}

console.log(String(dp))
</script>
