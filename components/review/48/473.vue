<script setup lang="ts">
const lines = ['10']
const T = Number(lines[0])
const answer: number[] = []

for (let i = 0; i < T; i++) {
  const dice = Math.floor(Math.random() * 6) + 1

  answer.push(dice)
}

console.log(answer.join('\n'))
</script>
