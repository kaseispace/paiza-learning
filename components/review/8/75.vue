<script setup lang="ts">
const lines = [
  '4 7',
  '1 1',
  '2 4',
  '2 8',
  '4 16',
  '1 32',
  '3 64',
  '4 128',
]
const [N, M] = lines[0].split(' ').map(Number)
const bright: number[] = Array(N).fill(0)
let onCount = 0

for (let i = 1; i <= M; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  const idx = a - 1

  if (bright[idx] === 0 && b > 0) onCount++
  if (bright[idx] > 0 && b === 0) onCount--

  bright[idx] = b

  if (onCount === N) {
    const sum = bright.reduce((s, v) => s + v, 0)
    console.log(sum)
    process.exit(0)
  }
}
</script>
