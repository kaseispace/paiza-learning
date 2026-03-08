<script setup lang="ts">
const lines = [
  '3 1 3',
  '1 2 1',
  '2 1 2',
  '1 2 1',
  '1 1',
]

const first = lines[0].split(' ')
const N = Number(first[0])
const Q = Number(first[1])
const M = Number(first[2])

const A: number[][] = []
for (let i = 0; i < N; i++) {
  A.push(lines[1 + i].split(' ').map(Number))
}

const diff: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))

for (let i = 0; i < Q; i++) {
  const xy = lines[1 + N + i].split(' ')
  const x = Number(xy[0])
  const y = Number(xy[1])

  const r = x - 1
  const c = y - 1

  diff[r][c] += 1
  diff[r + M][c] -= 1
  diff[r][c + M] -= 1
  diff[r + M][c + M] += 1
}

for (let i = 0; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    diff[i][j] += diff[i][j - 1]
  }
}

for (let j = 0; j <= N; j++) {
  for (let i = 1; i <= N; i++) {
    diff[i][j] += diff[i - 1][j]
  }
}

let ans = 0
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (diff[i][j] >= A[i][j]) ans++
  }
}

console.log(ans)
</script>
