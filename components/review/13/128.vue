<script setup lang="ts">
const lines = [
  '5',
  '/',
  '\'',
  '\'',
  '/',
  '_',
]
const walls = lines.slice(1)

let dx = 1, dy = 0

for (const wall of walls) {
  if (wall === '_') {
    // 方向変化なし
  }
  else if (wall === '/') {
    [dx, dy] = [-dy, -dx]
  }
  else if (wall === '\\') {
    [dx, dy] = [dy, dx]
  }
  console.log(`${dx} ${dy}`)
}
</script>
