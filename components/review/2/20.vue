<script setup lang="ts">
const lines = [
  '621 -855',
  '2 6 3 6',
  '19',
  't L',
  't L',
  't R',
  'm L',
  'm B',
  't R',
  't L',
  't L',
  't B',
  't B',
  'm R',
  't B',
  'm R',
  't R',
  't L',
  't B',
  'm L',
  'm R',
  't L',
]
const [s_x, s_y] = lines[0].split(' ').map(Number)
const [d_f, d_r, d_b, d_l] = lines[1].split(' ').map(Number)
const moves = lines.slice(3).map(line => line.split(' '))

const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

let x = s_x
let y = s_y
const distance = { F: d_f, R: d_r, B: d_b, L: d_l }
const distanceMap = { F: 0, R: 1, B: 2, L: 3 }
let currentIndex = 0

moves.forEach(([e, c]) => {
  if (e === 'm') {
    const index = (currentIndex + distanceMap[c]) % 4
    const [dy, dx] = directions[index]
    const d = distance[c]
    x += dx * d
    y += dy * d
  }
  else if (e === 't') {
    currentIndex = (currentIndex + distanceMap[c]) % 4
  }
})

console.log(x, y)
</script>
