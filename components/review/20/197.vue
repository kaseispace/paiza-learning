<script setup lang="ts">
const lines = [
  '2',
  '0 1',
  '1 2',
]
const n = Number(lines[0])
const a = lines.slice(1).map(edge => edge.split(' ').map(Number))
const result: boolean[] = Array(2).fill(false)
let result2 = false

for (let i = 0; i < n; i++) {
  const edge = a[i]

  if (edge[0] === 0 && edge[1] === 1) {
    result[0] = true
  }
  else if (edge[0] === 1 && edge[1] === 2) {
    result[1] = true
  }

  if (edge[0] === 0 && edge[1] === 2) {
    result2 = true
  }

  if (!result.includes(false)) break
}

console.log(!result.includes(false) || result2 ? 'Yes' : 'No')
</script>
