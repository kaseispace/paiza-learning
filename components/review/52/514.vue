<script setup lang="ts">
const lines = [
  '3 75 75 74',
  '1 0 0',
  '0 1 0',
  '0 0 1',
]
const [, P, Q, R] = lines[0].split(' ').map(Number)
const moves = lines.slice(1).map(line => line.split(' ').map(Number))

const dp: boolean[][][] = Array.from({ length: P + 1 }, () => Array.from(
  { length: Q + 1 }, () => Array(R + 1).fill(false)),
)

for (let a = P; a >= 0; a--) {
  for (let b = Q; b >= 0; b--) {
    for (let c = R; c >= 0; c--) {
      let win = false

      for (const [da, db, dc] of moves) {
        const na = a + da
        const nb = b + db
        const nc = c + dc

        if (na <= P && nb <= Q && nc <= R) {
          if (!dp[na][nb][nc]) {
            win = true
            break
          }
        }
      }

      dp[a][b][c] = win
    }
  }
}

console.log(dp[0][0][0] ? 'A' : 'B')
</script>
