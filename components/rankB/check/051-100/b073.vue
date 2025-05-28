<script setup lang="ts">
const lines = [
  '5 6',
  '4 3 6 1 3',
  '3',
  '1 3',
  '1 5',
  '2 3',
]
const [, M] = lines[0].split(' ').map(Number)
const tree = lines[1].split(' ').map(Number)
const queries = lines.slice(3).map(line => line.split(' ').map(Number))

for (const [s, e] of queries) {
  const startIndex = s - 1
  const endIndex = e - 1
  const length = endIndex - startIndex + 1

  const sum = tree.slice(startIndex, endIndex + 1).reduce((acc, cur) => acc + cur, 0)
  const avg = sum / length

  if (avg < M) {
    const add = Math.ceil(M - avg)
    for (let i = startIndex; i <= endIndex; i++) {
      tree[i] += add
    }
  }
}

console.log(tree.join(' '))
</script>
