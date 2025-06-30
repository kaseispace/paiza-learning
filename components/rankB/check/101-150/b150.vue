<script setup lang="ts">
const lines = [
  '4 10 50',
  '2',
  '2',
  '1',
  '5',
]
const [N, X, Y] = lines[0].split(' ').map(Number)
const invest = lines.slice(1).map(Number)
let total = X
let days = -1

invest.sort((a, b) => b - a)

for (let i = 0; i < N; i++) {
  total *= invest[i]
  if (Y <= Math.floor(total / (i + 1))) {
    days = i + 1
    break
  }
}

console.log(days)
</script>
