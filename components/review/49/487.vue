<script setup lang="ts">
const lines = [
  '5 3',
  '21 41 15 53 3',
  '3 5 7',

]
const A = lines[1].split(' ').map(Number)
const B = lines[2].split(' ').map(Number)

const rest = A.filter(a => B.every(b => a % b !== 0))

if (rest.length === 0) {
  console.log('You')
}
else {
  console.log('Kyoko')
  console.log(rest.join(' '))
}
</script>
