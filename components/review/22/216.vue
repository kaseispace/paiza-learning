<script setup lang="ts">
const lines = ['10']
const k = Number(lines[0])
const L: number[] = Array(k + 1).fill(0)

L[1] = 1
if (k >= 2) L[2] = 1
if (k >= 3) L[3] = 1

for (let i = 4; i <= k; i++) {
  L[i] = L[i - 1] + L[i - 2] + L[i - 3]
}

console.log(L[k])
</script>
