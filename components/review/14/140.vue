<script setup lang="ts">
const lines = [
  '4',
  '20220429',
  '20220503',
  '20220504',
  '20220505',
]
const dates = lines.slice(1).map(Number)

const seenH1: Set<number> = new Set()
const seenH2: Set<number> = new Set()
let collisionsH1 = 0
let collisionsH2 = 0

for (const d of dates) {
  const h1 = d % 10000
  const h2 = Math.floor(d / 10000)

  if (seenH1.has(h1)) {
    collisionsH1++
  }
  else {
    seenH1.add(h1)
  }

  if (seenH2.has(h2)) {
    collisionsH2++
  }
  else {
    seenH2.add(h2)
  }
}

console.log(collisionsH1)
console.log(collisionsH2)
</script>
