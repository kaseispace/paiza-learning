<script setup lang="ts">
const lines = [
  '5 4',
  'A 4',
  'A 4',
  'B 2',
  'A 2',
]
const [N, Q] = lines[0].split(' ').map(Number)
const field: string[] = Array(N).fill(null)

for (let i = 1; i <= Q; i++) {
  const [P, xStr] = lines[i].split(' ')
  const x = parseInt(xStr) - 1

  if (field[x] === null) {
    field[x] = P
  }
}

const aCount = field.filter(v => v === 'A').length
const bCount = field.filter(v => v === 'B').length

if (aCount > bCount) {
  console.log('A')
}
else if (bCount > aCount) {
  console.log('B')
}
else {
  console.log('Draw')
}
</script>
