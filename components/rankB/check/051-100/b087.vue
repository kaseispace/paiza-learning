<script setup lang="ts">
const lines = [
  '3 3 2',
  '156',
  '827',
  '349',
]
const [h, w, k] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))
let maxValue = 0

// 左から右
for (let y = 0; y < h; y++) {
  for (let x = 0; x <= w - k; x++) {
    const num = Number(grid[y].slice(x, x + k).join(''))
    maxValue = Math.max(maxValue, num)
  }
}

// 上から下
for (let x = 0; x < w; x++) {
  for (let y = 0; y <= h - k; y++) {
    let num = ''
    for (let i = 0; i < k; i++) {
      num += grid[y + i][x]
    }

    maxValue = Math.max(maxValue, Number(num))
  }
}
console.log(maxValue)
</script>
