<script setup lang="ts">
const lines = [
  'AAABBB',
  'CCCDDD',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(s => s.split(''))

const visited: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false))

const dirs = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
]

let count = 0

const dfs = (sx: number, sy: number) => {
  const stack = [[sx, sy]]
  visited[sx][sy] = true
  const target = grid[sx][sy]

  while (stack.length) {
    const [x, y] = stack.pop()!

    for (const [dx, dy] of dirs) {
      const nx = x + dx
      const ny = y + dy

      if (
        nx >= 0 && nx < H
        && ny >= 0 && ny < W
        && !visited[nx][ny]
        && grid[nx][ny] === target
      ) {
        visited[nx][ny] = true
        stack.push([nx, ny])
      }
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (!visited[i][j]) {
      count++
      dfs(i, j)
    }
  }
}

console.log(count)
</script>
