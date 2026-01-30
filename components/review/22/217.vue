<script setup lang="ts">
const lines = [
  '6 6',
  '3',
  '3 5 1 abc',
  '1 1 0 xyz',
  '6 2 1 hi',

]
const [H, W] = lines[0].split(' ').map(Number)
const N = Number(lines[1])
const grid: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

for (let i = 2; i < N + 2; i++) {
  const [r, c, b, S] = lines[i].split(' ')
  const R = Number(r) - 1
  const C = Number(c) - 1
  const B = Number(b)

  if (B === 0) {
    for (let k = 0; k < S.length; k++) {
      grid[R + k][C] = S[k]
    }
  }
  else {
    for (let k = 0; k < S.length; k++) {
      grid[R][C + k] = S[k]
    }
  }
}

grid.forEach(row => console.log(row.join('')))
</script>
