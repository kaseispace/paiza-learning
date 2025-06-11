<script setup lang="ts">
const lines = [
  '2 2',
  '2 1 1 1',
  '8',
  'm F',
  't R',
  'm F',
  'm F',
  't B',
  'm L',
  'm L',
  'm B',
]
let [s_x, s_y] = lines[0].split(' ').map(Number)
const [d_f, d_r, d_b, d_l] = lines[1].split(' ').map(Number)
const actions = lines.slice(3).map(line => line.split(' '))

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]
let dir = 0

const moveLen = { F: d_f, R: d_r, B: d_b, L: d_l }
const dirMap = { F: 0, R: 1, B: 2, L: 3 }

actions.forEach(([e, c]) => {
  if (e === 'm') {
    const moveDir = (dir + dirMap[c]) % 4
    s_x += dx[moveDir] * moveLen[c]
    s_y += dy[moveDir] * moveLen[c]
  }
  else if (e === 't') {
    dir = (dir + dirMap[c]) % 4
  }
})

console.log(s_x, s_y)
</script>
