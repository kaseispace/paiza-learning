<script setup>
const [H, _, N] = lines[0].split(' ').map(Number)
const grid = []
const L = Number(lines[H + 1])
const players = new Map()
let currentPlayer = 1

for (let i = 1; i <= H; i++) {
  const col = lines[i].split(' ').map(Number)
  grid.push([...col])
}

for (let i = 1; i <= N; i++) {
  players.set(i, 0)
}

for (let i = H + 2; i <= H + L + 1; i++) {
  const [a_1, b_1, A_1, B_1] = lines[i].split(' ').map(Number)
  const card1 = grid[a_1 - 1][b_1 - 1]
  const card2 = grid[A_1 - 1][B_1 - 1]

  if (card1 === card2 && card1 !== 0 && card2 !== 0) {
    players.set(currentPlayer, players.get(currentPlayer) + 2)

    grid[a_1 - 1][b_1 - 1] = 0
    grid[A_1 - 1][B_1 - 1] = 0
  }
  else {
    currentPlayer++

    if (currentPlayer > N) {
      currentPlayer -= N
    }
  }
}

for (const [_, score] of players) {
  console.log(score)
}
</script>
