<script setup lang="ts">
const lines = [
  '3',
  '1 3',
  '2 5',
  '4 6',
]
const N = Number(lines[0])
const A: number[] = new Array(N)
const L: number[] = new Array(N)

for (let i = 0; i < N; i++) {
  const [a, l] = lines[1 + i].split(' ').map(Number)
  A[i] = a
  L[i] = l
}

const sortedA = Float64Array.from(A).sort()
const sortedL = Float64Array.from(L).sort()

function lowerBound(arr: Float64Array, x: number) {
  let lo = 0
  let hi = arr.length

  while (lo < hi) {
    const mid = (lo + hi) >> 1

    if (arr[mid] < x) {
      lo = mid + 1
    }
    else {
      hi = mid
    }
  }

  return lo
}

function upperBound(arr: Float64Array, x: number) {
  let lo = 0
  let hi = arr.length

  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] <= x) {
      lo = mid + 1
    }
    else {
      hi = mid
    }
  }

  return lo
}

const out = []

for (let i = 0; i < N; i++) {
  const before = lowerBound(sortedL, A[i])
  const after = N - upperBound(sortedA, L[i])
  out.push(String(N - 1 - before - after))
}

console.log(out.join('\n'))
</script>
