<script setup lang="ts">
const lines = [
  '3 3 3',
  '2 1',
  'FRB',
  '3 6 2',
  '0 4 1',
  '5 0 7',
]
const [, H] = lines[0].split(' ').map(Number)
let [sy, sx] = lines[1].split(' ').map(Number)
const s = lines[2].split('') as ('F' | 'B' | 'L' | 'R')[]
const c = Array.from({ length: H }, (_, i) => lines[3 + i].split(' ').map(Number))
const directions = {
  F: [-1, 0],
  B: [1, 0],
  L: [0, -1],
  R: [0, 1],
}
const result = []

sy -= 1
sx -= 1

for (let i = 0; i < s.length; i++) {
  const move = s[i]

  const [dy, dx] = directions[move]
  sy += dy
  sx += dx

  result.push(c[sy][sx])
}

result.forEach(num => console.log(num))
</script>
