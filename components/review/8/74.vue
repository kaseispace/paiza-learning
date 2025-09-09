<script setup lang="ts">
const lines = [
  '3',
  '0.318 134 56',
  '0.314 20 1',
  '0.252 82 30',
]
const players = lines.slice(1).map((line) => {
  const [b, r, h] = line.split(' ')
  return {
    b: parseFloat(b),
    r: Number(r),
    h: Number(h),
  }
})

const maxB = Math.max(...players.map(p => p.b))
const maxR = Math.max(...players.map(p => p.r))
const maxH = Math.max(...players.map(p => p.h))

let triple = false
let double = false

for (const p of players) {
  let count = 0
  if (p.b === maxB) count++
  if (p.r === maxR) count++
  if (p.h === maxH) count++

  if (count === 3) {
    triple = true
    break
  }
  else if (count === 2) {
    double = true
  }
}

if (triple) {
  console.log('Triple')
}
else if (double) {
  console.log('Double')
}
else {
  console.log('Nobody')
}
</script>
