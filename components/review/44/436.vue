<script setup lang="ts">
const lines = [
  '23 5 7',
  '2 6 9 10 12 15 19',
]
const [L, n] = lines[0].split(' ').map(Number)
const cuts = lines[1].split(' ').map(Number)

function canDivide(minLength: number) {
  let lastCut = 0
  let cutCount = 0

  for (const cut of cuts) {
    if (cut - lastCut >= minLength) {
      lastCut = cut
      cutCount++
    }

    if (cutCount === n - 1) {
      break
    }
  }

  return cutCount === n - 1 && L - lastCut >= minLength
}

let low = 0
let high = L + 1

while (high - low > 1) {
  const mid = Math.floor((low + high) / 2)

  if (canDivide(mid)) {
    low = mid
  }
  else {
    high = mid
  }
}

console.log(low)
</script>
