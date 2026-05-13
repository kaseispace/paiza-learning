<script setup lang="ts">
const lines = [
  '3',
  '1 3 1',
  '2 4 1',
  '3 5 1',
]
const Q = Number(lines[0])
const people: number[] = Array(1001).fill(0)

for (let i = 0; i < Q; i++) {
  const [S, T, P] = lines[i + 1].split(' ').map(Number)

  for (let t = S; t <= T; t++) {
    people[t] += P
  }
}

const maxPeople = Math.max(...people)
const ans: number[] = []

for (let t = 0; t <= 1000; t++) {
  if (people[t] === maxPeople) {
    ans.push(t)
  }
}

console.log(ans.join('\n'))
</script>
