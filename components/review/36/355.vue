<script setup lang="ts">
const lines = [
  '3 6',
  '0 3 1 4 1 5',
  '9 2 6 5 3 5',
  '3 9 7 9 3 2',
]
const [h, w] = lines[0].split(' ').map(Number)
const cost: number[][] = []

for (let i = 0; i < h; i++) {
  cost.push(lines[i + 1].split(' ').map(Number))
}

const INF = 10 ** 18

const dist: number[][] = Array.from({ length: h }, () => Array(w).fill(INF))

dist[0][0] = cost[0][0]

const pq = [[cost[0][0], 0, 0]]

const dy = [-1, 1, 0, 0]
const dx = [0, 0, -1, 1]

while (pq.length > 0) {
  pq.sort((a, b) => a[0] - b[0])

  const [d, y, x] = pq.shift()!

  if (d > dist[y][x]) continue

  for (let k = 0; k < 4; k++) {
    const ny = y + dy[k]
    const nx = x + dx[k]

    if (ny < 0 || ny >= h || nx < 0 || nx >= w) {
      continue
    }

    const nd = d + cost[ny][nx]

    if (nd < dist[ny][nx]) {
      dist[ny][nx] = nd
      pq.push([nd, ny, nx])
    }
  }
}

console.log(dist[h - 1][w - 1])
</script>
