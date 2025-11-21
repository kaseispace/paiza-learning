<script setup lang="ts">
const lines = [
  '5 3',
  '8',
  '2',
  '5',
  '6',
  '1',
]
const [N, M] = lines[0].split(' ').map(Number)

let count = 0
for (let i = 1; i <= N; i++) {
  const Ai = parseInt(lines[i], 10)
  if (Ai <= M) {
    count++
  }
}

console.log(count)
</script>
