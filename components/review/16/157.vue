<script setup lang="ts">
const lines = ['3 1048 1']
const [A, B, C] = lines[0].split(' ').map(Number)

if (A % B === C) {
  const q = Math.floor(A / B)
  console.log(`1 ${-q}`)
}
else {
  const q = Math.floor(B / A)
  console.log(`${-q} 1`)
}
</script>
