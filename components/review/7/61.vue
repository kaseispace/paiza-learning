<script setup lang="ts">
const lines = [
  '5',
  'abc',
  'bca',
  'cab',
  'aaa',
  'abc',
]
const strings = lines.slice(1)

const hash = (s: string) => {
  let h = 0
  const prime = 31
  for (let i = 0; i < s.length; i++) {
    h = (h * prime + s.charCodeAt(i)) % 1000000007
  }
  return h % 100
}

for (const s of strings) {
  console.log(hash(s))
}
</script>
