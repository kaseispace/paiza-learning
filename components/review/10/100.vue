<script setup lang="ts">
const lines = [
  '7 6 1',
  '3 4',
  'U 3',
]
const [w, h] = lines[0].split(' ').map(Number)
let [x, y] = lines[1].split(' ').map(Number)
const moves = lines.slice(2).map(line => line.split(' '))

for (const [dir, m] of moves) {
  if (dir === 'U') {
    const M = Number(m) % h
    y = (y + M) % h
  }
  else if (dir === 'D') {
    const M = Number(m) % h
    y = (y - M + h) % h
  }
  else if (dir === 'R') {
    const M = Number(m) % w
    x = (x + M) % w
  }
  else if (dir === 'L') {
    const M = Number(m) % w
    x = (x - M + w) % w
  }
}

console.log(x, y)
</script>
