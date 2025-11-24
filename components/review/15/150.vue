<script setup lang="ts">
const lines = [
  '5',
  '-1 2 -4 8 -16',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

let isArithmetic = true
const d = A[1] - A[0]
for (let i = 0; i < N - 1; i++) {
  if (A[i + 1] - A[i] !== d) {
    isArithmetic = false
    break
  }
}

let isGeometric = true
const r = A[1] / A[0]
for (let i = 0; i < N - 1; i++) {
  if (A[i + 1] / A[i] !== r) {
    isGeometric = false
    break
  }
}

console.log(isArithmetic ? 'Yes' : 'No')
console.log(isGeometric ? 'Yes' : 'No')
</script>
