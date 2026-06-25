<script setup lang="ts">
const lines = [
  '2 3 5',
  'abcd',
  'bcd',
]
const [n, , K] = lines[0].split(' ').map(Number)
const S = lines[1]
const C = new Set(lines[2])

const MOD = 1000000007
const N = 2 * n

const pref: number[] = Array(N + 1).fill(0)

for (let i = 0; i < N; i++) {
  pref[i + 1] = pref[i] + (C.has(S[i]) ? 1 : 0)
}

const cost: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    cost[i][j] = pref[j + 1] - pref[i]
  }
}

const dp: number[][][] = Array.from({ length: N + 1 }, () => Array.from({ length: n + 1 }, () => Array(K + 1).fill(0)))
dp[0][0][0] = 1

for (let pos = 0; pos < N; pos++) {
  for (let open = 0; open <= n; open++) {
    for (let score = 0; score <= K; score++) {
      const cur = dp[pos][open][score]

      if (cur === 0) continue

      if (open + 1 <= n) {
        dp[pos + 1][open + 1][score] += cur
        dp[pos + 1][open + 1][score] %= MOD
      }

      if (open > 0) {
        const add = pref[pos + 1]

        if (score + add <= K) {
          dp[pos + 1][open - 1][score + add] += (cur * open) % MOD
          dp[pos + 1][open - 1][score + add] %= MOD
        }
      }
    }
  }
}

console.log(dp[N][0][K] % MOD)
</script>
