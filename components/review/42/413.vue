<script setup lang="ts">
const lines = [
  '3 2 2',
  '1 2 1',
  '2 1 2',
  '1 2 1',
  '1 1',
  '2 2',

]
let line = 0
const [N, Q, M] = lines[line++].split(' ').map(Number)
const A: number[][] = []

for (let i = 0; i < N; i++) {
  A.push(lines[line++].trim().split(' ').map(Number))
}

const imos: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))

for (let i = 0; i < Q; i++) {
  const [x, y] = lines[line++].split(' ').map(Number)

  const r = x - 1
  const c = y - 1

  imos[r][c]++
  imos[r + M][c]--
  imos[r][c + M]--
  imos[r + M][c + M]++
}

for (let i = 0; i < N; i++) {
  for (let j = 1; j < N; j++) {
    imos[i][j] += imos[i][j - 1]
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N; j++) {
    imos[i][j] += imos[i - 1][j]
  }
}

let answer = 0

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (imos[i][j] >= A[i][j]) {
      answer++
    }
  }
}

console.log(answer)
</script>
