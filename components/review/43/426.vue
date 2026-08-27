<script setup lang="ts">
const lines = [
  '1 0 0 1',
  '0 0 1 1',
  '0 1 0 1',
  '0 0 0 1',

]
const grid = lines.flatMap(line => line.split(' ').map(Number))

for (let top = 0; top < 4; top++) {
  for (let bottom = top + 1; bottom < 4; bottom++) {
    for (let left = 0; left < 4; left++) {
      for (let right = left + 1; right < 4; right++) {
        const topLeft = grid[top * 4 + left]
        const topRight = grid[top * 4 + right]
        const bottomLeft = grid[bottom * 4 + left]
        const bottomRight = grid[bottom * 4 + right]

        if (topLeft === 1 && topRight === 1 && bottomLeft === 1 && bottomRight === 1) {
          console.log('Yes')
          process.exit(0)
        }
      }
    }
  }
}

console.log('No')
</script>
