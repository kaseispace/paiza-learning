<script setup lang="ts">
const lines = [
  '14',
  '((((())())()))',
]
const S = lines[1]
let count = 0
let isValid = true

for (const c of S) {
  if (c === '(') count++
  else if (c === ')') count--

  if (count < 0) {
    isValid = false
    break
  }
}

if (count !== 0) isValid = false

console.log(isValid ? 'Yes' : 'No')
</script>
