<script setup lang="ts">
const lines = [
  '2',
  '1 2',
  '2 3',
  '3 2',
  '2 1',
]
const N = Number(lines[0])
const A: number[][][] = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(N)))

let idx = 1
for (let z = 0; z < N; z++) {
  for (let y = 0; y < N; y++) {
    const row = lines[idx++].trim().split(' ').map(Number)
    for (let x = 0; x < N; x++) {
      A[z][y][x] = row[x]
    }
  }
}

let maxSum = -Infinity

// 直線方向
for (let z = 0; z < N; z++) {
  for (let y = 0; y < N; y++) {
    let sum = 0
    for (let x = 0; x < N; x++) sum += A[z][y][x]
    maxSum = Math.max(maxSum, sum)
  }
}

for (let z = 0; z < N; z++) {
  for (let x = 0; x < N; x++) {
    let sum = 0
    for (let y = 0; y < N; y++) sum += A[z][y][x]
    maxSum = Math.max(maxSum, sum)
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    let sum = 0
    for (let z = 0; z < N; z++) sum += A[z][y][x]
    maxSum = Math.max(maxSum, sum)
  }
}

// 各面の対角線
for (let z = 0; z < N; z++) {
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < N; i++) {
    sum1 += A[z][i][i]
    sum2 += A[z][i][N - 1 - i]
  }
  maxSum = Math.max(maxSum, sum1, sum2)
}

for (let x = 0; x < N; x++) {
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < N; i++) {
    sum1 += A[i][i][x]
    sum2 += A[i][N - 1 - i][x]
  }
  maxSum = Math.max(maxSum, sum1, sum2)
}

for (let y = 0; y < N; y++) {
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < N; i++) {
    sum1 += A[i][y][i]
    sum2 += A[N - 1 - i][y][i]
  }
  maxSum = Math.max(maxSum, sum1, sum2)
}

// 空間対角線
let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0
for (let i = 0; i < N; i++) {
  sum1 += A[i][i][i]
  sum2 += A[i][i][N - 1 - i]
  sum3 += A[i][N - 1 - i][i]
  sum4 += A[N - 1 - i][i][i]
}

maxSum = Math.max(maxSum, sum1, sum2, sum3, sum4)
console.log(maxSum)
</script>
