<script setup lang="ts">
const lines = [
  '3',
  '1 -4 -4',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)

let count = 0

for (let i = 0; i < n - 1; i++) {
  if (a[i] === a[i + 1]) {
    count++
  }
}

console.log(count)
</script>
