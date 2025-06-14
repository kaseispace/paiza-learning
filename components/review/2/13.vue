<script setup lang="ts">
const lines = [
  '10',
  '3 11 18 25 40 58 69 81 88 99',
  '5',
  '11',
  '100',
  '2',
  '41',
  '69',
]
const a = lines[1].split(' ').map(Number)
const q = Number(lines[2])

const binarySearch = (arr: number[], target: number) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) {
      return 'Yes'
    }
    else if (arr[mid] < target) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  return 'No'
}

for (let i = 3; i < 3 + q; i++) {
  console.log(binarySearch(a, Number(lines[i])))
}
</script>
