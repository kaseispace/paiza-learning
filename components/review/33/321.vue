<script setup lang="ts">
const lines = [
  '10',
  '1',
  '4',
  '2',
  '4',
  '3',
  '3',
  '4',
  '2',
  '5',
  '5',
]
const N = Number(lines[0])
const A = lines.slice(1).map(Number)

const posList: Map<number, number[]> = new Map()
for (let i = 0; i < N; i++) {
  if (!posList.has(A[i])) posList.set(A[i], [])
  posList.get(A[i])!.push(i)
}

const dist: number[] = Array(N).fill(-1)
dist[0] = 0

const used: Set<number> = new Set()
const queue = [0]

while (queue.length) {
  const cur = queue.shift()!

  if (cur === N - 1) break

  const nx = cur + 1
  if (nx < N && dist[nx] === -1) {
    dist[nx] = dist[cur] + 1
    queue.push(nx)
  }

  const v = A[cur]
  if (!used.has(v)) {
    used.add(v)

    for (const to of posList.get(v)!) {
      if (to > cur && dist[to] === -1) {
        dist[to] = dist[cur] + 1
        queue.push(to)
      }
    }
  }
}

console.log(dist[N - 1])
</script>
