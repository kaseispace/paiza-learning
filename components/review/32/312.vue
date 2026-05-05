<script setup lang="ts">
const lines = [
  '5',
  '1 3 5 7 9',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)

let ok = true

for (let i = 0; i < n - 1; i++) {
  if (a[i] > a[i + 1]) {
    ok = false
    break
  }
}

console.log(ok ? 'Yes' : 'No')
</script>
