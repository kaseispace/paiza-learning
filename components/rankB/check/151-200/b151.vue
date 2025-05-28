<script setup lang="ts">
const lines = [
  '20',
  '3 300',
  '8 700',
  '15 1200',
]
const N = Number(lines[0])
const [X, A] = lines[1].split(' ').map(Number)
const [Y, B] = lines[2].split(' ').map(Number)
const [Z, C] = lines[3].split(' ').map(Number)
let result = Infinity

for (let i = 0; i <= Math.ceil(N / X); i++) {
  for (let j = 0; j <= Math.ceil(N / Y); j++) {
    for (let k = 0; k <= Math.ceil(N / Z); k++) {
      const totalCount = i * X + j * Y + k * Z
      if (N <= totalCount) {
        const totalMoney = i * A + j * B + k * C
        result = Math.min(result, totalMoney)
      }
    }
  }
}

console.log(result)
</script>
