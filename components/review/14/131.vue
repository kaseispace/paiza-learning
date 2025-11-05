<script setup lang="ts">
const lines = ['1abc2efg345']
const S = lines[0]

const isDigit = (ch: string): boolean => ch >= '0' && ch <= '9'

for (let i = 0; i < S.length; i++) {
  if (!isDigit(S[i])) continue

  for (let j = i; j < S.length; j++) {
    if (isDigit(S[j])) {
      console.log(S.slice(i, j + 1))
    }
  }
}
</script>
