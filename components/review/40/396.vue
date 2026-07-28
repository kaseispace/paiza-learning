<script setup lang="ts">
const lines = [
  '6 666 700',
  '1 1 1 1 1 1',
  '4 1 4 1 1 1',
]
const [n, k1, k2] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

let ok = false

for (let i = 0; i < n; i++) {
  if (b[i] * k1 >= a[i] * k2) {
    ok = true
    break
  }
}

console.log(ok ? 'Yes' : 'No')
</script>
