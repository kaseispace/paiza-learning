<script setup lang="ts">
type Hand = 'G' | 'C' | 'P'

interface Option {
  fingers: number
  win: number
}

const lines = [
  '4 7',
  'CGPC',
]
const [N, M] = lines[0].split(' ').map(Number)
const s = lines[1]

const INF = -1e9
const dp: number[][] = Array.from({ length: N + 1 }, () => Array(M + 1).fill(INF))
dp[0][0] = 0

const options = (friend: Hand): Option[] => {
  if (friend === 'G') {
    return [
      { fingers: 5, win: 1 }, // Pで勝つ
      { fingers: 0, win: 0 }, // Gで引き分け
      { fingers: 2, win: 0 }, // Cで負け
    ]
  }
  else if (friend === 'C') {
    return [
      { fingers: 0, win: 1 }, // Gで勝つ
      { fingers: 2, win: 0 }, // Cで引き分け
      { fingers: 5, win: 0 }, // Pで負け
    ]
  }
  else {
    return [
      { fingers: 2, win: 1 }, // Cで勝つ
      { fingers: 5, win: 0 }, // Pで引き分け
      { fingers: 0, win: 0 }, // Gで負け
    ]
  }
}

for (let i = 0; i < N; i++) {
  const opts = options(s[i] as Hand)
  for (let m = 0; m <= M; m++) {
    if (dp[i][m] < 0) continue
    for (const { fingers, win } of opts) {
      if (m + fingers <= M) {
        dp[i + 1][m + fingers] = Math.max(dp[i + 1][m + fingers], dp[i][m] + win)
      }
    }
  }
}

console.log(dp[N][M])
</script>
