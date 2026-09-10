<script setup lang="ts">
const lines = [
  '3 2 2',
  '1 2 1',
  '2 1 2',
  '1 2 1',
  '1 1',
  '2 2',

]
const [N, Q, M] = lines[0].split(' ').map(Number)
const A: number[][] = []

for (let y = 0; y < N; y++) {
  A.push(lines[y + 1].split(' ').map(Number))
}

const damage: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))

for (let i = 0; i < Q; i++) {
  const [inputX, inputY] = lines[N + 1 + i].split(' ').map(Number)

  const x = inputX - 1
  const y = inputY - 1

  damage[y][x] += 1
  damage[y][x + M] -= 1
  damage[y + M][x] -= 1
  damage[y + M][x + M] += 1
}

for (let y = 0; y <= N; y++) {
  for (let x = 1; x <= N; x++) {
    damage[y][x] += damage[y][x - 1]
  }
}

for (let y = 1; y <= N; y++) {
  for (let x = 0; x <= N; x++) {
    damage[y][x] += damage[y - 1][x]
  }
}

let defeated = 0

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (damage[y][x] >= A[y][x]) {
      defeated++
    }
  }
}

console.log(defeated)
</script>
