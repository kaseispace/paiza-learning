<script setup lang="ts">
const lines = [
  '6 3',
  '1 2 3 4 5 6',
  '1 2 3 4 5 6',
  '1 2 3 4 5 6',
  '4 5 6 1 2 3',
  '4 5 6 1 2 3',
  '4 5 6 1 2 3',
]
const [N, K] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(' ').map(Number))
const newGrid: number[][] = Array.from({ length: N / K }, () => [])

for (let y = 0; y < N; y += K) {
  for (let x = 0; x < N; x += K) {
    let sum = 0
    for (let i = 0; i < K; i++) {
      const row = grid[y + i].slice(x, x + K)
      sum += row.reduce((total, cur) => total + cur, 0)
    }

    newGrid[y / K].push(Math.floor(sum / (K * K)))
  }
}

newGrid.forEach(row => console.log(row.join(' ')))
</script>
