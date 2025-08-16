<script setup lang="ts">
const lines = [
  '2 10',
  '1 3 5',
  '2 5 4',
]
const [Q, M] = lines[0].split(' ').map(Number)
const diff: number[] = Array(1001).fill(0)

for (let i = 1; i <= Q; i++) {
  const [S, T, P] = lines[i].split(' ').map(Number)
  diff[S] += P
  diff[T] -= P
}

let current = 0
for (let t = 0; t <= 1000; t++) {
  current += diff[t]
  if (current >= M) {
    break
  }
}

console.log(current >= M ? 'No' : 'Yes')
</script>
