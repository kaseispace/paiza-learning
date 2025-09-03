<script setup lang="ts">
const lines = [
  '3 1 1',
  '9',
  '10',
  '6',
]
const [N, L, R] = lines[0].split(' ').map(Number)
const A = lines.slice(1, 1 + N).map(Number)

if (L < R) {
  A.splice(L - 1, R - L)
}

for (const val of A) {
  console.log(val)
}
</script>
