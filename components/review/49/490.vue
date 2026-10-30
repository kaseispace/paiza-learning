<script setup lang="ts">
const lines = [
  '5 2 9',
  'aaaaabcdef',
  'bc',
]
const [n, m, k] = lines[0].split(' ').map(Number)
const S = lines[1]
const C = lines[2]
const MOD = 1000000007n
const inC: boolean[] = new Array(26).fill(false)

for (let i = 0; i < m; i++) inC[C.charCodeAt(i) - 97] = true

const W = k + 1
let dp: bigint[] = new Array((n + 1) * W).fill(0n)
dp[0] = 1n

for (let p = 0; p < 2 * n; p++) {
  const c = inC[S.charCodeAt(p) - 97] ? 1 : 0
  const nd: bigint[] = new Array((n + 1) * W).fill(0n)

  for (let j = 0; j <= n; j++) {
    for (let s = 0; s <= k; s++) {
      const v = dp[j * W + s]
      if (v === 0n) continue

      if (j + 1 <= n) {
        const ns = s + c * (j + 1)
        if (ns <= k) nd[(j + 1) * W + ns] = (nd[(j + 1) * W + ns] + v) % MOD
      }

      if (j >= 1) {
        const ns = s + c * j
        if (ns <= k) nd[(j - 1) * W + ns] = (nd[(j - 1) * W + ns] + v * BigInt(j)) % MOD
      }
    }
  }

  dp = nd
}

console.log(String(dp[k]))
</script>
