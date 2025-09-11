<script setup lang="ts">
const lines = [
  '5',
  '3 6 9 12 15',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)

const diff = a[1] - a[0]
let diffResult = true
for (let i = 1; i < n; i++) {
  const d = a[i] - a[i - 1]
  if (d !== diff) {
    diffResult = false
    break
  }
}

let ratioResult = true
for (let i = 2; i < n; i++) {
  if (a[i] * a[i - 2] !== a[i - 1] * a[i - 1]) {
    ratioResult = false
    break
  }
}

console.log(diffResult ? 'Yes' : 'No')
console.log(ratioResult ? 'Yes' : 'No')
</script>
