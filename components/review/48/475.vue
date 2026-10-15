<script setup lang="ts">
const lines = [
  '15',
  '1 7',
  '5 22',
  '5 23',
  '5 4',
  '4 30',
  '3 58',
  '3 55',
  '4 17',
  '3 30',
  '5 0',
  '3 53',
  '3 38',
  '5 25',
  '4 14',
  '7 16',
]
const n = Number(lines[0])
let totalSeconds = 0

for (let i = 0; i < n; i++) {
  const [minutes, seconds] = lines[i + 1].split(' ').map(Number)

  totalSeconds += minutes * 60 + seconds
}

if (totalSeconds <= 74 * 60) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
