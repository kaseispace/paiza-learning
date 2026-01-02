<script setup lang="ts">
 type Player = {
   num: number
   name: string
 }

const lines = [
  '5',
  '31 SAITO',
  '56 GORO',
  '11 IIJIMA',
  '70 NAKAMURA',
  '1 HAJIME',
]
const n = Number(lines[0])
const players: Player[] = []

for (let i = 1; i <= n; i++) {
  const [b, p] = lines[i].split(' ')
  players.push({ num: Number(b), name: p })
}

players.sort((a, b) => a.num - b.num)

players.forEach((player) => {
  console.log(player.num, player.name)
})
</script>
