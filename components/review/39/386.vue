<script setup lang="ts">
const lines = [
  '8 300',
  '70',
  '90',
  '40',
  '90',
  '30',
  '10',
  '100',
  '30',
]
const [N, K] = lines[0].split(' ').map(Number)

let count = 1
let sum = 0

for (let i = 0; i < N; i++) {
  const weight = Number(lines[i + 1])

  if (sum + weight <= K) {
    sum += weight
  }
  else {
    count++
    sum = weight
  }
}

console.log(count)
</script>
