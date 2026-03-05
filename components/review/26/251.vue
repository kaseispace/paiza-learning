<script setup lang="ts">
const lines = [
  '8 1 3',
  '8 1 3 8 1 3 8 1',
]
const [N, A, B] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const s: number[] = new Array(N + 1).fill(0)
for (let i = 0; i < N; i++) {
  s[i + 1] = s[i] + a[i]
}

const ans = s[B + 1] - s[A]
console.log(ans)
</script>
