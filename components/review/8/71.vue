<script setup lang="ts">
const lines = [
  '3 3 1',
  '1 2 3',
  '4 5 6',
  '7 8 9',
]
const [N, W, H] = lines[0].split(' ').map(Number)
const A = lines.slice(1).map(line => line.split(' ').map(Number))

const S: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    S[i + 1][j + 1] = A[i][j] + S[i][j + 1] + S[i + 1][j] - S[i][j]
  }
}

let maxSum = 0
for (let r = 0; r <= N - H; r++) {
  for (let c = 0; c <= N - W; c++) {
    const sum = S[r + H][c + W] - S[r + H][c] - S[r][c + W] + S[r][c]
    if (sum > maxSum) maxSum = sum
  }
}

console.log(maxSum)
</script>
