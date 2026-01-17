<script setup lang="ts">
const lines = [
  '10 50',
  '60 60 61 61 85 85 90 90 95 96',
]
const [N, C] = lines[0].split(' ').map(Number)
const score = lines[1].split(' ').map(Number)
const half = Math.floor(N / 2) + 1
let border = 0

score.sort((a, b) => b - a)

for (let i = 0; i < N; i++) {
  if (score[i] < C) break
  border++
}

if (border >= half) {
  console.log(0)
}
else {
  let count = 0

  while (true) {
    let result = 0

    for (let i = 0; i < N; i++) {
      score[i]++
      if (score[i] >= C) {
        result++
      }
    }
    count++

    if (result >= half) break
  }

  console.log(count)
}
</script>
