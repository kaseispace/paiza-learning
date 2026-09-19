<script setup lang="ts">
const lines = [
  '4',
  '0 2 0 0',
  '2 0 0 0',
  '0 0 0 1',
  '0 0 1 0',
]
const N = Number(lines[0])
let edgeCount = 0

for (let i = 0; i < N; i++) {
  const row = lines[i + 1].split(' ').map(Number)

  for (let j = i + 1; j < N; j++) {
    edgeCount += row[j]
  }
}

console.log(edgeCount)
</script>
