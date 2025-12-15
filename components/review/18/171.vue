<script setup lang="ts">
const lines = [
  '4',
  'shirt 500',
  'pants 1000',
  'pants 500',
  'shoes 2000',
]
const n = Number(lines[0])

let total = 0
let hasPants = false

for (let i = 1; i <= n; i++) {
  const [c, pStr] = lines[i].split(' ')
  const p = Number(pStr)
  total += p
  if (c === 'pants') hasPants = true
}

if (hasPants && total >= 2000) {
  total -= 500
}

console.log(total)
</script>
