<script setup lang="ts">
const lines = [
  '10',
  '7 6 10 2 5 4 8 3 9 1',
  '2',
  '4 1',
]
const n = Number(lines[0])
const A = lines[1].split(' ').map(Number)
const H = lines[3].split(' ').map(Number)

const arr = [...A]
const results: number[] = []

for (const h of H) {
  let num_of_move = 0

  for (let i = h; i < n; i++) {
    const temp = arr[i]
    let j = i

    while (j >= h && arr[j - h] > temp) {
      arr[j] = arr[j - h]
      j -= h
      num_of_move++
    }

    arr[j] = temp
  }

  results.push(num_of_move)
}

results.map(num => console.log(num))
</script>
