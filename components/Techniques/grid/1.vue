<script setup lang="ts">
const N = 5
const grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

// 垂直方向に探索
const verticalView = Array.from({ length: N }, (_, i) => grid.map(row => row[i]))
console.log(verticalView)
//   [
//     [1, 6, 11, 16, 21],
//     [2, 7, 12, 17, 22],
//     [3, 8, 13, 18, 23],
//     [4, 9, 14, 19, 24],
//     [5, 10, 15, 20, 25]
//   ]

// 右下がり斜め（↘）に探索
const rightDownDiagonals: number[][] = Array.from({ length: N * 2 - 1 }, () => [])
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    rightDownDiagonals[i + j].push(grid[i][j])
  }
}
console.log(rightDownDiagonals)
//   [
//     [1],
//     [2, 6],
//     [3, 7, 11],
//     [4, 8, 12, 16],
//     [5, 9, 13, 17, 21],
//     [10, 14, 18, 22],
//     [15, 19, 23],
//     [20, 24],
//     [25]
//   ]

// 左下がり斜め（↙）に探索
const leftDownDiagonals: number[][] = Array.from({ length: N * 2 - 1 }, () => [])
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    leftDownDiagonals[i - j + N - 1].push(grid[i][j])
  }
}
// console.log(leftDownDiagonals)
//   [
//     [5],
//     [4, 10],
//     [3, 9, 15],
//     [2, 8, 14, 20],
//     [1, 7, 13, 19, 25],
//     [6, 12, 18, 24],
//     [11, 17, 23],
//     [16, 22],
//     [21]
//   ]
</script>
