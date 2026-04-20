<script setup lang="ts">
const lines = [
  '1 1',
  '#',
]
const [H, W] = lines[0].split(' ').map(Number)

for (let y = 0; y < H; y++) {
  const row = lines[1 + y]

  for (let x = 0; x < W; x++) {
    if (row[x] === '#') {
      console.log(y, x)
      process.exit(0)
    }
  }
}
</script>
