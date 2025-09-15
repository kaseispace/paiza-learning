<script setup lang="ts">
const lines = [
  '5',
  '1 5 3 4 4',
  '2',
  '1 2',
  '2 5',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)
const swaps = lines.slice(3).map(line => line.split(' ').map(Number))

for (const [L, R] of swaps) {
  const i = L - 1
  const j = R - 1;
  [a[i], a[j]] = [a[j], a[i]]
}

let result = true
for (let i = 0; i < n - 1; i++) {
  if (a[i] > a[i + 1]) {
    result = false
    break
  }
}

console.log(result ? 'Yes' : 'No')
</script>
