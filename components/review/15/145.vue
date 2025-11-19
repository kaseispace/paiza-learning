<script setup lang="ts">
const lines = [
  '5 50',
  '23',
  '5',
  '14',
  '6',
  '9',
]
const [N, M] = lines[0].split(' ').map(Number)
let total = 0

for (let i = 1; i <= N; i++) {
  total += Number(lines[i])
}

if (total <= M) {
  console.log('OK')
}
else {
  console.log('NG')
}
</script>
