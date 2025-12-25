<script setup lang="ts">
const lines = [
  '5 5',
  '3 1 2 5 4',
]
const [nStr, kStr] = lines[0].split(' ')
const n = Number(nStr)
let k = Number(kStr)
const a = lines[1].split(' ').map(Number)

const multiply = (p: number[], q: number[]) => {
  const res: number[] = new Array(n)
  for (let i = 0; i < n; i++) {
    res[i] = p[q[i] - 1]
  }
  return res
}

let result = Array.from({ length: n }, (_, i) => i + 1)
let base = a.slice()

while (k > 0) {
  if (k & 1) {
    result = multiply(base, result)
  }
  base = multiply(base, base)
  k >>= 1
}

console.log(result.join(' '))
</script>
