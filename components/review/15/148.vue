<script setup lang="ts">
const lines = [
  '10',
  '7 3',
  '100 1',
  '50',
]
const X = Number(lines[0])
const [F1, F2] = lines[1].split(' ').map(Number)
const [L, N] = lines[2].split(' ').map(Number)

let stops: number[] = []
if (N > 0) {
  stops = lines[3].split(' ').map(Number)
}

const points = stops.concat([L])
let prev = 0
let total = 0

for (const end of points) {
  const d = end - prev
  const first = Math.min(d, X)
  const rest = Math.max(d - X, 0)
  total += first * F1 + rest * F2
  prev = end
}

console.log(total)
</script>
