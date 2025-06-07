<script setup lang="ts">
const lines = [
  '4',
  '1314',
  '1213',
  '2134',
  '3124',
]
const N = Number(lines[0])
const grid = lines.slice(1).map(line => line.split('').map(Number))
let maxLength = 2

const findMaxSwipe = (array: number[][]) => {
  let localLength = 2

  array.forEach((row) => {
    let count = 1

    // 昇順
    for (let j = 1; j < row.length; j++) {
      count = (row[j - 1] + 1 === row[j] && row[j] !== 0) ? count + 1 : 1
      localLength = Math.max(localLength, count)
    }

    // 降順
    for (let j = row.length - 2; j >= 0; j--) {
      count = (row[j + 1] + 1 === row[j] && row[j] !== 0) ? count + 1 : 1
      localLength = Math.max(localLength, count)
    }
  })

  return localLength
}

// 横
maxLength = Math.max(maxLength, findMaxSwipe(grid))

// 縦
const verticalGrid = Array.from({ length: N }, (_, i) => grid.map(row => row[i]))
maxLength = Math.max(maxLength, findMaxSwipe(verticalGrid))

// 右斜め
const diagonalsRight: number[][] = Array.from({ length: N * 2 - 1 }, () => [])
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    diagonalsRight[i + j].push(grid[i][j])
  }
}
maxLength = Math.max(maxLength, findMaxSwipe(diagonalsRight))

// 左斜め
const diagonalsLeft: number[][] = Array.from({ length: N * 2 - 1 }, () => [])
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    diagonalsLeft[i - j + N - 1].push(grid[i][j])
  }
}
maxLength = Math.max(maxLength, findMaxSwipe(diagonalsLeft))

console.log(maxLength)
</script>
