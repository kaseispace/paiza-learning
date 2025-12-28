<script setup lang="ts">
const lines = [
  '10',
  '7 6 10 2 5 4 8 3 9 1',
]
const n = Number(lines[0])
const A = lines[1].split(' ').map(Number)

let count = 0
const INF = 2000000000

const merge = (A: number[], left: number, mid: number, right: number) => {
  const nl = mid - left
  const nr = right - mid

  const L = new Array(nl + 1)
  const R = new Array(nr + 1)

  for (let i = 0; i < nl; i++) L[i] = A[left + i]
  for (let i = 0; i < nr; i++) R[i] = A[mid + i]

  L[nl] = INF
  R[nr] = INF

  let lindex = 0
  let rindex = 0

  for (let i = left; i < right; i++) {
    if (L[lindex] < R[rindex]) {
      A[i] = L[lindex++]
    }
    else {
      A[i] = R[rindex++]
      count++
    }
  }
}

const merge_sort = (A: number[], left: number, right: number) => {
  if (left + 1 < right) {
    const mid = (left + right) >> 1
    merge_sort(A, left, mid)
    merge_sort(A, mid, right)
    merge(A, left, mid, right)
  }
}

merge_sort(A, 0, n)

console.log(A.join(' '))
console.log(count)
</script>
