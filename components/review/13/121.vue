<script setup lang="ts">
const lines = [
  '3 2 1',
  '4',
  '5',
  '2',
]
const [N, P, X] = lines[0].split(' ').map(Number)
const A = lines.slice(1).map(Number)

const index = (P <= N) ? P - 1 : N
A.splice(index, 0, X)

for (const value of A) {
  console.log(value)
}
</script>
