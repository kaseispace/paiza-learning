<script setup lang="ts">
const lines = ['3 4 12']
const [H, W, T] = lines[0].split(' ').map(Number)
const men = Array.from({ length: H }, (_, i) => ['M', i + 1])
const women = Array.from({ length: W }, (_, i) => ['F', i + 1])

const getX = (t: number) => {
  const cycle = 2 * W
  const pos = t % cycle
  return pos <= W ? pos : cycle - pos
}

const getY = (t: number) => {
  const cycle = 2 * H
  const pos = t % cycle
  return pos <= H ? pos : cycle - pos
}

for (let t = 0; t <= T; t++) {
  for (let i = 0; i < H; i++) {
    const manRow = i + 1
    const manCol = getX(t)

    for (let j = 0; j < W; j++) {
      const womenCol = j + 1
      const womenRow = getY(t)

      if (manRow === womenRow && manCol === womenCol) {
        const tmp = men[i]
        men[i] = women[j]
        women[j] = tmp
      }
    }
  }
}

men.forEach(([type, num]) => console.log(`${type} ${num}`))
women.forEach(([type, num]) => console.log(`${type} ${num}`))
</script>
