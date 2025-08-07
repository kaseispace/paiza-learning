<script setup lang="ts">
const lines = [
  '12 6',
  '4 6',
  '4 8',
  '4 10',
  '4 12',
  '4 2',
  '4 4',
]
const [n, m] = lines[0].split(' ').map(Number)
const table: boolean[] = Array(n).fill(false)
let totalSeated = 0

for (let i = 1; i <= m; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  let canSit = true
  const indices: number[] = []

  for (let j = 0; j < a; j++) {
    const seatIndex = (b - 1 + j) % n
    if (table[seatIndex]) {
      canSit = false
      break
    }

    indices.push(seatIndex)
  }

  if (canSit) {
    for (const index of indices) {
      table[index] = true
    }

    totalSeated += a
  }
}

console.log(totalSeated)
</script>
