<script setup lang="ts">
const lines = [
  '3 300',
  '150',
  '120',
  '130',
]
const [N, X] = lines[0].split(' ').map(Number)
let sum = 0

for (let i = 0; i < N; i++) {
  sum += Number(lines[1 + i])
}

console.log(sum <= X ? 'Yes' : 'No')
</script>
