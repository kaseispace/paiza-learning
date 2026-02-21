<script setup lang="ts">
const lines = ['5 3']
const [x, y] = lines[0].split(' ').map(Number)

const dx = Math.abs(x)
const dy = Math.abs(y)

const diff = Math.abs(dx - dy)

const extra = Math.max(0, diff - 1)

console.log(dx + dy + extra)
</script>
