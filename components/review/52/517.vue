<script setup lang="ts">
const lines = [
  '4',
  '0 0',
  '2 2',
  '-1 1',
  '1 -1',
]
const n = Number(lines[0])
const cities = lines.slice(1).map(line => line.split(' ').map(Number))

const visited: boolean[] = Array(n).fill(false)

const route = [0]
visited[0] = true

let current = 0

for (let count = 1; count < n; count++) {
  let next = -1
  let minDist = Infinity

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue
    }

    const dx = cities[current][0] - cities[i][0]
    const dy = cities[current][1] - cities[i][1]
    const dist = dx * dx + dy * dy

    if (dist < minDist) {
      minDist = dist
      next = i
    }
  }

  visited[next] = true
  route.push(next)
  current = next
}

console.log(route.join('\n'))
</script>
