<script setup lang="ts">
const lines = [
  '4 200000000000',
  '1000000 1000000 1000000 1000000',
]
const [n, x] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

a.sort((p, q) => q - p)

let sum = 0

for (let i = 0; i < n; i++) {
  sum += a[i]

  if (sum >= x) {
    console.log(i + 1)
    process.exit(0)
  }
}

console.log(-1)
</script>
