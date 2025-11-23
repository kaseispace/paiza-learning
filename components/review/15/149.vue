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
const leds: number[] = Array(N).fill(0)

for (let i = 1; i <= M; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  leds[a - 1] = b

  if (leds.every(v => v > 0)) {
    const sum = leds.reduce((acc, v) => acc + v, 0)
    console.log(sum)
    break
  }
}
</script>
