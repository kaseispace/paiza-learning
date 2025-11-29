<script setup lang="ts">
const lines = [
  '3 3',
  '###',
  '...',
  '###',
]
const [H, W] = lines[0].split(' ').map(Number)
const S = lines.slice(1)

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let ok = false
    if (y === 0) {
      if (S[y + 1][x] === '#') ok = true
    }
    else if (y === H - 1) {
      if (S[y - 1][x] === '#') ok = true
    }
    else if (S[y - 1][x] === '#' && S[y + 1][x] === '#') ok = true
    if (ok) {
      console.log(`${y} ${x}`)
    }
  }
}
</script>
