<script setup lang="ts">
const lines = [
  '4 4',
  '3 29',
  '4',
  '3 28 1',
  '3 31 1',
  '4 1 3',
  '4 3 2',

]
const [M_A, D_A] = lines[0].split(' ').map(Number)
const [M_B, D_B] = lines[1].split(' ').map(Number)
const N = Number(lines[2])
let count = 0

for (let i = 3; i < 3 + N; i++) {
  const [M, D, x] = lines[i].split(' ').map(Number)
  count += x

  if (count >= 5) {
    let a = 0
    let b = 0

    // Aの場合
    if (M_A === M) {
      a = Math.abs(D_A - D)
    }
    else if (M_A === 3) {
      a = 31 - D_A + D
    }
    else {
      a = 31 - D + D_A
    }

    // Bの場合
    if (M_B === M) {
      b = Math.abs(D_B - D)
    }
    else if (M_B === 3) {
      b = 31 - D_B + D
    }
    else {
      b = 31 - D + D_B
    }

    console.log(M, D)
    console.log(a === b ? 'DRAW' : a > b ? 'B' : 'A')
    break
  }
}
</script>
