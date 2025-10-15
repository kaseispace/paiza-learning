<script setup lang="ts">
const lines = [
  '5',
  '2',
  'CW',
  '3',
]
const N = parseInt(lines[0])
let current = parseInt(lines[1]) - 1
const S = lines[2]
const B = parseInt(lines[3])

const used: boolean[] = Array(N).fill(false)
const result: number[] = []

used[current] = true
result.push(current + 1)

const direction = S === 'CW' ? 1 : -1

for (let count = 1; count < N; count++) {
  let step = 0
  while (step < B) {
    current = (current + direction + N) % N
    if (!used[current]) {
      step++
    }
  }
  used[current] = true
  result.push(current + 1)
}

console.log(result.join(' '))
</script>
