<script setup lang="ts">
const lines = [
  '3 6',
  '1 2 3',
]
const [N, K] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const total = 1 << N
let ok = false

for (let mask = 0; mask < total; mask++) {
  let sum = 0

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      sum += a[i]
    }
  }

  if (sum === K) {
    ok = true
    break
  }
}

console.log(ok ? 'Yes' : 'No')
</script>
