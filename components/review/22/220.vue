<script setup lang="ts">
const lines = ['5', '3 3 3 3 3', 'abc def ghi jkl mno']
const N = Number(lines[0])
const S = lines[2].split(' ')
const result: Set<string> = new Set()

for (let i = 0; i < N; i++) {
  S[i] = S[i][0] + S[i][S[i].length - 1]
}

for (let i = 0; i < N; i++) {
  const w = S[i]

  for (let j = 0; j < N; j++) {
    if (w[0] === S[j][0]) {
      const wSum = S[j][1] + w[1]

      for (let k = 0; k < N; k++) {
        if (wSum === S[k]) {
          const key = [i + 1, j + 1, k + 1].sort((a, b) => a - b).join('')
          result.add(key)
        }
      }
    }
  }
}

console.log(result.size)
</script>
