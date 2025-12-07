<script setup lang="ts">
type Point = {
  idx: number
  x: number
  y: number
}

const lines = [
  '100 100',
  '3',
  '100 100',
  '123 123',
  '120 120',
]
const [Px, Py] = lines[0].split(' ').map(Number)
const N = Number(lines[1])

const points: Point[] = []
for (let i = 0; i < N; i++) {
  const [x, y] = lines[2 + i].split(' ').map(Number)
  points.push({ idx: i + 1, x, y })
}

// ユークリッド距離
const euclid = points.map((p) => {
  const d = Math.sqrt((Px - p.x) ** 2 + (Py - p.y) ** 2)
  return { idx: p.idx, d }
})
euclid.sort((a, b) => a.d - b.d || a.idx - b.idx)

// マンハッタン距離
const manhattan = points.map((p) => {
  const d = Math.abs(Px - p.x) + Math.abs(Py - p.y)
  return { idx: p.idx, d }
})
manhattan.sort((a, b) => a.d - b.d || a.idx - b.idx)

// 出力
for (let i = 0; i < 3; i++) console.log(euclid[i].idx)
for (let i = 0; i < 3; i++) console.log(manhattan[i].idx)
</script>
