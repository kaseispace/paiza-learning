<script setup lang="ts">
const lines = [
  '3',
  '1000 2000',
  '800 780 500',
]
const N = Number(lines[0])
const [K, M] = lines[1].split(' ').map(Number)
const q = lines[2].split(' ').map(Number)

let count = 0
let total = 0

for (let i = 0; i < N; i++) {
  const cur = q[i]
  if (cur >= K) {
    count++
  }
  total += cur
}

console.log(count >= 3 && total >= M ? 'silver' : 'bronze')
</script>
