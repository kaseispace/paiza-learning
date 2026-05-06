<script setup lang="ts">
const lines = [
  '5 3',
  '1 2',
  '2 3',
  '4 5',
]
const [N, M] = lines[0].split(' ').map(Number)
const g = Array.from({ length: N + 1 }, () => [] as number[])

for (let i = 0; i < M; i++) {
  const [a, b] = lines[1 + i].split(' ').map(Number)
  g[a].push(b)
  g[b].push(a)
}

const visited: boolean[] = Array(N + 1).fill(false)

let components = 0

for (let v = 1; v <= N; v++) {
  if (visited[v]) continue

  components++

  const stack = [v]
  visited[v] = true

  while (stack.length) {
    const x = stack.pop()!
    for (const to of g[x]) {
      if (!visited[to]) {
        visited[to] = true
        stack.push(to)
      }
    }
  }
}

console.log(components)
</script>
