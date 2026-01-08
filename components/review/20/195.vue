<script setup lang="ts">
const lines = [
  '4',
  '0 2 1 8',
  '6 3 2 0',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

let maxCap = 0
let current = 0

for (let i = 0; i < n; i++) {
  current -= a[i]
  current += b[i]

  maxCap = Math.max(current, maxCap)
}

console.log(maxCap)
</script>
