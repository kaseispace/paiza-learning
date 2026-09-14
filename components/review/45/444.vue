<script setup lang="ts">
const lines = [
  '6',
  'ADD_RIGHT 1',
  'ADD_RIGHT 2',
  'ADD_LEFT 3',
  'REMOVE_RIGHT',
  'ADD_RIGHT 4',
  'ADD_LEFT 5',
]
const Q = Number(lines[0])
const weights: number[] = Array(Q * 2 + 1)

let left = Q
let right = Q
let total = 0

for (let i = 0; i < Q; i++) {
  const query = lines[i + 1].split(' ')
  const command = query[0]

  if (command === 'ADD_RIGHT') {
    const weight = Number(query[1])

    weights[right] = weight
    right++
    total += weight
  }
  else if (command === 'ADD_LEFT') {
    const weight = Number(query[1])

    left--
    weights[left] = weight
    total += weight
  }
  else if (command === 'REMOVE_RIGHT') {
    right--
    total -= weights[right]
  }
  else {
    total -= weights[left]
    left++
  }
}

console.log(total)
</script>
