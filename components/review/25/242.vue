<script setup lang="ts">
const lines = ['11 7 2']
const [x, y, z] = lines[0].split(' ').map(Number)
let k

if (x - z >= 0) {
  k = Math.ceil((x - z) / y)
}
else {
  k = 0
}

const n = y * k + z

console.log(n)
</script>
