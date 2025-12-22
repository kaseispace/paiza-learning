<script setup lang="ts">
const lines = [
  '3 5',
  '1 4 0',
  '3',
  '1 3',
  '2 0',
  '3 3',
]
const [, M] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
const Q = Number(lines[2])

for (let qi = 0; qi < Q; qi++) {
  const [ind, S] = lines[3 + qi].split(' ').map(Number)

  const k = (S - A[ind - 1] + M) % M
  const result = A.map(v => (v + k) % M)

  console.log(result.join(' '))
}
</script>
