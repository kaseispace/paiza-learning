<script setup lang="ts">
const lines = [
  '4',
  '0 2 2 1',
  '1 2',
  '1 3',
  '3 4',
]
const values = lines.flatMap(line => line.split(' ').map(Number))
let index = 0

const n = values[index++]
const colors: number[] = []

for (let i = 0; i < n; i++) {
  colors.push(values[index++])
}

const graph: number[][] = Array.from({ length: n }, () => [])

for (let i = 0; i < n - 1; i++) {
  const a = values[index++] - 1
  const b = values[index++] - 1

  graph[a].push(b)
  graph[b].push(a)
}

const root = colors.indexOf(0)

const parent: number[] = Array(n).fill(-1)
const order = [root]

for (let i = 0; i < order.length; i++) {
  const current = order[i]

  for (const next of graph[current]) {
    if (next === parent[current]) {
      continue
    }

    parent[next] = current
    order.push(next)
  }
}

function isValid(rootColor: number) {
  const down: number[] = Array(n).fill(0)
  let maxPathSum = -Infinity

  for (let i = n - 1; i >= 0; i--) {
    const current = order[i]

    const weight = current === root ? (rootColor === 1 ? 1 : -1) : (colors[current] === 1 ? 1 : -1)

    let first = -Infinity
    let second = -Infinity

    for (const next of graph[current]) {
      if (parent[next] !== current) {
        continue
      }

      maxPathSum = Math.max(maxPathSum, weight + down[next])

      if (down[next] > first) {
        second = first
        first = down[next]
      }
      else if (down[next] > second) {
        second = down[next]
      }
    }

    if (second !== -Infinity) {
      maxPathSum = Math.max(maxPathSum, weight + first + second)
    }

    down[current] = weight + Math.max(0, first)
  }

  return maxPathSum <= 0
}

let answer = 0

if (isValid(1)) {
  answer++
}

if (isValid(2)) {
  answer++
}

console.log(answer)
</script>
