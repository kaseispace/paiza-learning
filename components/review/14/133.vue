<script setup lang="ts">
const lines = ['172 8467 10']
const [X, M, N] = lines[0].split(' ').map(Number)

let sum = 0
let power = 1

for (let i = 1; i <= N; i++) {
  power = (power * X) % M
  sum = (sum + power) % M
  console.log(sum)
}
</script>
