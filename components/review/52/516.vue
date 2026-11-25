<script setup lang="ts">
const lines = [
  '3',
  '1 2 4',
  '2 3 10',
  '2 1 5',
]
const N = Number(lines[0])
const cards: [number, number][] = []
const C: number[] = []

for (let i = 1; i <= N; i++) {
  const [A, B, c] = lines[i].split(' ').map(Number)

  cards.push([A, B])
  C.push(c)
}

C.sort((a, b) => a - b)

const canWin = (x: number) => {
  const D = cards.map(([A, B]) => A * x + B)

  D.sort((a, b) => a - b)

  let wins = 0
  let j = 0

  for (let i = 0; i < N && j < N; i++) {
    if (D[i] > C[j]) {
      wins++
      j++
    }
  }

  return wins * 2 > N
}

let left = -1e9 - 1
let right = 1e9 + 1

while (right - left > 1) {
  const mid = Math.floor((left + right) / 2)

  if (canWin(mid)) {
    right = mid
  }
  else {
    left = mid
  }
}

console.log(right)
</script>
