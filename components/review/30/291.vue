<script setup lang="ts">
const lines = [
  '10',
  '7 6 10 2 5 1 8 3 9 4',
]
const n = Number(lines[0])
const A = lines[1].split(' ').map(Number)

let count = 0

function partition(A: number[], l: number, r: number) {
  const pivot = A[r]
  let i = l - 1

  for (let j = l; j < r; j++) {
    if (A[j] <= pivot) {
      i++
      const tmp = A[i]
      A[i] = A[j]
      A[j] = tmp
    }
  }

  const tmp = A[i + 1]
  A[i + 1] = A[r]
  A[r] = tmp
  return i + 1
}

function quicksort(A: number[], l: number, r: number) {
  if (l >= r) return
  count++
  const p = partition(A, l, r)
  quicksort(A, l, p - 1)
  quicksort(A, p + 1, r)
}

quicksort(A, 0, n - 1)

console.log(A.join(' '))
console.log(count)
</script>
