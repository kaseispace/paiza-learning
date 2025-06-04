<script setup lang="ts">
const lines = [
  '5 5',
  '3',
  '8 6 9 1 2',
  '7 3 9 5 8',
  '8 3 7 5 9',
  '9 7 7 3 3',
  '9 7 2 6 1',
]
const [H, W] = lines[0].split(' ').map(Number)
const N = Number(lines[1])
const grid = lines.slice(2).map(line => line.split(' ').map(Number))
let maxNuts = 0

// 東方向
for (let i = 0; i < H; i++) {
  for (let j = 0; j <= W - N; j++) {
    const sum = grid[i].slice(j, N + j).reduce((sum, count) => sum + count, 0)
    maxNuts = Math.max(maxNuts, sum)
  }
}

// 南方向
for (let i = 0; i < W; i++) {
  for (let j = 0; j <= H - N; j++) {
    let sum = 0

    for (let k = 0; k < N; k++) {
      sum += grid[k + j][i]
    }

    maxNuts = Math.max(maxNuts, sum)
  }
}

console.log(maxNuts)
</script>
