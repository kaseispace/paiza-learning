<script setup lang="ts">
const lines = [
  '3 1',
  '1 2 3',
  '4 5 6',
  '7 8 9',
]
const [N, P] = lines[0].split(' ').map(Number)
const A = lines.slice(1).map(line => line.split(' ').map(Number))

const S: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    S[i + 1][j + 1] = A[i][j] + S[i][j + 1] + S[i + 1][j] - S[i][j]
  }
}

let maxSum = 0
for (let h = 1; h <= N; h++) {
  for (let w = 1; w <= N; w++) {
    if (h * w > P) continue

    for (let i = 0; i + h <= N; i++) {
      for (let j = 0; j + w <= N; j++) {
        const sum = S[i + h][j + w] - S[i][j + w] - S[i + h][j] + S[i][j]
        if (sum > maxSum) maxSum = sum
      }
    }
  }
}

console.log(maxSum)
</script>
