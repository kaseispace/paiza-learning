<script setup lang="ts">
const lines = [
  '5 4',
  '2',
  '10',
  '4',
  '10',
  '5',
]
const [N, P] = lines[0].split(' ').map(Number)
const A = lines.slice(1, 1 + N).map(Number)

A.splice(P - 1, 1)
for (const val of A) {
  console.log(val)
}
</script>
