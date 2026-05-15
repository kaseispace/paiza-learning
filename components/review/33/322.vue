<script setup lang="ts">
const lines = ['9']
const N = Number(lines[0])

let x = N
let count = 0

while (x > 0) {
  count += x & 1
  x >>= 1
}

console.log(count)
</script>
