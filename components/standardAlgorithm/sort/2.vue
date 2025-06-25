<script setup lang="ts">
const lines = [
  '5',
  '4 1 3 5 2',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

// 昇順にソートする選択ソート
for (let i = 0; i < N - 1; i++) {
  let index = i

  for (let j = i + 1; j < N; j++) {
    if (A[index] > A[j]) {
      index = j
    }
  }

  [A[i], A[index]] = [A[index], A[i]]
  console.log(A.join(' '))
}
</script>
