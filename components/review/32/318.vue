<script setup lang="ts">
const lines = ['0 0']
const [A, B] = lines[0].split(' ').map(BigInt)

const sum = (A + B) * (B - A + 1n) / 2n

console.log(sum.toString())
</script>
