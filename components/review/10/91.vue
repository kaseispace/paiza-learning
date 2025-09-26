<script setup lang="ts">
const lines = [
  '3 1',
  '9',
  '4',
  '4',
]
const [N, P] = lines[0].split(' ').map(Number)
const A = lines.slice(1, 1 + N).map(Number)

A.splice(P - 1, 1)

A.forEach(x => console.log(x))
</script>
