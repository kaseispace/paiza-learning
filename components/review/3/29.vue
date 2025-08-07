<script setup lang="ts">
const lines = ['2 2 0 0']
const [H, W, y, x] = lines[0].split(' ').map(Number)

const dfs = (y: number, x: number, depth: number = 0) => {
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
