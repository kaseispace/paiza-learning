<script setup lang="ts">
const lines = [
  '6 3',
  'ABCDEF',
  'GHIJKL',
  'MNOPQR',
  'STUVWX',
  'YZABCD',
  'EFGHIJ',
  'CFI',
  'NQV',
  'ZBE',

]
const [N, M] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, N + 1).map(line => line.split(''))

for (let i = 1; i <= M; i++) {
  const word = lines[N + i]
  const L = word.length
  let found = false

  for (let y = 0; y < N && !found; y++) {
    for (let x = 0; x < N && !found; x++) {
      if (grid[y][x] !== word[0]) continue

      if (y + L > N || x + L > N) continue

      let ok = true
      for (let k = 1; k < L; k++) {
        if (grid[y + k][x + k] !== word[k]) {
          ok = false
          break
        }
      }

      if (ok) {
        console.log(`${x + 1} ${y + 1}`)
        found = true
      }
    }
  }
}
</script>
