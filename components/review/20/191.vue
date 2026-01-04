<script setup lang="ts">
const lines = [
  '4',
  '183',
  '138',
  '183',
  '138',
]

const n = Number(lines[0])
const a = lines.slice(1).map(Number)
let result = true

for (let i = 1; i < n; i++) {
  if (a[i - 1] > a[i]) {
    result = false
    break
  }
}

console.log(result ? 'Yes' : 'No')
</script>
