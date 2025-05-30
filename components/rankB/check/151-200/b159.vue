<script setup lang="ts">
const lines = [
  '5 2000',
  '1000 800 500 700 400',
  '100 80 60 70 30',
  '1 3 2 1 2',
]
const [, M] = lines[0].split(' ').map(Number)
const c = lines[1].split(' ').map(Number)
const s = lines[2].split(' ').map(Number)
const d = lines[3].split(' ').map(Number)
const foods: Map<number, [number, number][]> = new Map()
let maxScore = -1

d.forEach((num, i) => {
  if (foods.has(num)) {
    foods.get(num)!.push([c[i], s[i]])
  }
  else {
    foods.set(num, [[c[i], s[i]]])
  }
})

if (!(foods.has(1) && foods.has(2) && foods.has(3))) {
  console.log(-1)
}
else {
  for (const [cal1, sat1] of foods.get(1)!) {
    for (const [cal2, sat2] of foods.get(2)!) {
      for (const [cal3, sat3] of foods.get(3)!) {
        const totalCal = cal1 + cal2 + cal3
        if (totalCal <= M) {
          maxScore = Math.max(maxScore, sat1 + sat2 + sat3)
        }
      }
    }
  }

  console.log(maxScore)
}
</script>
