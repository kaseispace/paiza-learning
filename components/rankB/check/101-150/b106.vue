<script setup lang="ts">
const lines = [
  '6 4 5',
  '4',
  '12',
  '6',
  '24',
  '9',
]
const [H, W] = lines[0].split(' ').map(Number)
const studentSeats = lines.slice(1).map(Number)
const grid: number[][] = Array.from({ length: H }, () => Array(W).fill(0))

studentSeats.forEach((seatNumber, studentNumber) => {
  const x = Math.floor((seatNumber - 1) / W)
  const y = (seatNumber - 1) % W
  grid[x][y] = studentNumber + 1
})

for (let y = 0; y < W; y++) {
  const seats: number[] = []

  for (let x = 0; x < H; x++) {
    if (grid[x][y] !== 0) {
      seats.push(grid[x][y])
    }
  }

  for (let x = 0; x < H; x++) {
    grid[x][y] = x < seats.length ? seats[x] : 0
  }
}

grid.forEach(row => console.log(row.join(' ')))
</script>
