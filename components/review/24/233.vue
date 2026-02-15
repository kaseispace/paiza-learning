<script setup lang="ts">
const lines = [
  '4 8',
  '5 3 8 2',
]
const [n, k] = lines[0].trim().split(' ').map(Number)
const a = lines[1].trim().split(' ').map(Number)

const m = Math.floor(n / 2)
const left = a.slice(0, m)
const right = a.slice(m)

const enumSums = (arr: number[]) => {
  const res = []
  const len = arr.length
  const total = 1 << len

  for (let mask = 0; mask < total; mask++) {
    let sum = 0
    for (let i = 0; i < len; i++) {
      if (mask & (1 << i)) sum += arr[i]
    }

    res.push(sum)
  }

  return res
}

const leftSums = enumSums(left)
const rightSums = enumSums(right)
rightSums.sort((x, y) => x - y)

const countEqual = (arr: number[], value: number) => {
  let l = 0, r = arr.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] < value) l = mid + 1
    else r = mid
  }
  const start = l

  l = 0
  r = arr.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] <= value) l = mid + 1
    else r = mid
  }
  const end = l

  return end - start
}

let ans = 0
for (const s of leftSums) {
  const need = k - s
  ans += countEqual(rightSums, need)
}

console.log(ans.toString())
</script>
