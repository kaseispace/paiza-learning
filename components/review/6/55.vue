<script setup lang="ts">
const lines = [
  '2 1',
  '1',
  '2',
  '1 1 1',
]
const [N, _] = lines[0].split(' ').map(Number)
const A = lines.slice(1, 1 + N).map(Number)
const queries = lines.slice(1 + N)
const list = [...A]

for (const query of queries) {
  const parts = query.split(' ').map(Number)
  if (parts[0] === 1) {
    const [_, P, X] = parts
    list.splice(P - 1, 0, X)
  }
  else if (parts[0] === 2) {
    const [_, P] = parts
    list.splice(P - 1, 1)
  }
}

for (const val of list) {
  console.log(val)
}
</script>
