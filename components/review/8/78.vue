<script setup lang="ts">
const lines = ['1 3 10']
const [N, X, K] = lines[0].split(' ').map(Number)

const countCL = (T: number) => {
  const q = Math.floor(T / 4)
  const r = T % 4
  return 2 * q + Math.max(0, r - 2)
}

const extra = X * (countCL(K) - countCL(4 * N))
console.log(extra.toString())
</script>
