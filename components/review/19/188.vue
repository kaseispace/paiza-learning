<script setup lang="ts">
const lines = [
  '5 8 5 3',
  '1 2 6 7 8',
]
const [N, , T, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
let result = true
let count = 0

for (let i = 0; i < T; i++) {
  if (A[i] >= N + 1) {
    count++
  }
  else {
    count = 0
  }

  if (count >= K) {
    result = false
  }
}

console.log(result ? 'Yes' : 'No')
</script>
