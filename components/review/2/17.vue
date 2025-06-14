<script setup lang="ts">
const lines = ['83 45 76 16']
const [H, W, y, x] = lines[0].split(' ').map(Number)

const dfs = (y: number, x: number, depth = 0) => {
  if (depth === 3) {
    console.log(y, x)
    return
  }

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  for (const [dy, dx] of directions) {
    const ny = dy + y
    const nx = dx + x

    if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue
    dfs(ny, nx, depth + 1)
  }
}

dfs(y, x)
</script>
