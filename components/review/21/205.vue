<script setup lang="ts">
const lines = [
  '6 60',
  '10 20 30 40 50 60',
]

const [N, C] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const need = Math.floor(N / 2) + 1

const passed = A.filter(x => x >= C).length

if (passed >= need) {
  console.log(0)
}
else {
  const needK = A.filter(x => x < C).map(x => C - x)
  needK.sort((a, b) => a - b)

  const lack = need - passed
  const result = needK[lack - 1]

  console.log(result)
}
</script>
