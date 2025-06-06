<script setup lang="ts">
const lines = [
  '6',
  '1 0 1 1 0 0',
  '0 0 0 1 0 0',
  '1 1 1 0 1 0',
  '1 0 1 0 1 1',
  '0 0 0 0 0 0',
  '0 1 1 1 1 1',
]
const N = Number(lines[0])
const grid = lines.slice(1).map(line => line.split(' ').map(Number))
let maxCount = 0

// 深さ優先探索(DFS)を用いた解答
// 計算量が多く、時間がかかるため効率的ではない
// /dp/check/a061に別解あり
const dfs = (y: number, x: number, count: number) => {
  count += grid[y][x]

  if (y === N - 1 && x === N - 1) {
    maxCount = Math.max(maxCount, count)
    return
  }

  const directions = [[0, 1], [1, 0]]
  for (const [dy, dx] of directions) {
    const ny = dy + y
    const nx = dx + x

    if (ny < N && nx < N) {
      dfs(ny, nx, count)
    }
  }
}

dfs(0, 0, 0)
console.log(maxCount)
</script>
