<script setup lang="ts">
const lines = [
  '4 6',
  '3',
  '3 3 2',
  '1 6 1',
  '5 6 4',
]
const [N, M] = lines[0].split(' ').map(Number)
const targets = lines.slice(2).map(line => line.split(' ').map(Number))
const grid: number[][] = Array.from({ length: N }, () => Array(M).fill(0))

targets.forEach((target) => {
  const [T, X, Y] = target

  if (T == 1) {
    grid[Y - 1][X - 1]++
  }
  else {
    const d = Math.floor(T / 2)
    const top = Y - 1 - d
    const bottom = Y - 1 + d
    const left = X - 1 - d
    const rigth = X - 1 + d

    for (let i = 0; i < T; i++) {
      // 上
      if (top >= 0 && top < N && left + i >= 0 && left + i < M) {
        grid[top][left + i]++
      }

      // 下
      if (bottom >= 0 && bottom < N && left + i >= 0 && left + i < M) {
        grid[bottom][left + i]++
      }
    }

    for (let i = 1; i < T - 1; i++) {
      // 右
      if (top + i >= 0 && top + i < N && rigth >= 0 && rigth < M) {
        grid[top + i][rigth]++
      }

      // 左
      if (top + i >= 0 && top + i < N && left >= 0 && left < M) {
        grid[top + i][left]++
      }
    }
  }
})

grid.forEach((row) => {
  console.log(row.join(' '))
})
</script>
