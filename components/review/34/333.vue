<script setup lang="ts">
const lines = ['abcbada']
const S = lines[0]
const n = S.length

const pal: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false))

for (let i = 0; i < n; i++) pal[i][i] = true

for (let i = 0; i < n - 1; i++) {
  pal[i][i + 1] = (S[i] === S[i + 1])
}

for (let len = 3; len <= n; len++) {
  for (let i = 0; i + len - 1 < n; i++) {
    const j = i + len - 1
    pal[i][j] = (S[i] === S[j]) && pal[i + 1][j - 1]
  }
}

const dp: number[] = Array(n).fill(Infinity)

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (pal[j][i]) {
      if (j === 0) dp[i] = 1
      else dp[i] = Math.min(dp[i], dp[j - 1] + 1)
    }
  }
}

console.log(dp[n - 1])
</script>
