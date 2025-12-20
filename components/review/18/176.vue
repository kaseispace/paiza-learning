<script setup lang="ts">
const lines = [
  '9 3',
  '7989',
  '98693',
  '10250',
  '-89388',
  '-32127',
  '34027',
  '27383',
  '6151',
  '-20489',
]
const [N, D] = lines[0].split(' ').map(Number)
const A = lines.slice(1).map(Number)

for (let i = 0; i < N; i += D) {
  let maxVal = -Infinity
  for (let j = i; j < i + D; j++) {
    if (A[j] > maxVal) maxVal = A[j]
  }
  console.log(maxVal)
}
</script>
