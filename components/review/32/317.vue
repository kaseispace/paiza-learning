<script setup lang="ts">
const lines = ['45 15']
let [A, B] = lines[0].split(' ').map(Number)

while (B !== 0) {
  const r = A % B
  A = B
  B = r
}

console.log(A)
</script>
