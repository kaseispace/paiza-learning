<script setup lang="ts">
const lines = [
  '5',
  '4 1 3 5 2',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

// 昇順にソートするバブルソート
for (let i = 0; i < N - 1; i++) {
  for (let j = N - 1; j > i; j--) {
    if (A[j - 1] > A[j]) {
      [A[j - 1], A[j]] = [A[j], A[j - 1]]
    }
  }

  console.log(A.join(' '))
}
</script>
