<script setup lang="ts">
const lines = [
  'aaaaaa',
  '2',
]
const s = lines[0]
const i = Number(lines[1])

const start = i - 1

let ans = 0

while (ans < s.length - start && s[ans] === s[start + ans]) {
  ans++
}

console.log(ans)
</script>
