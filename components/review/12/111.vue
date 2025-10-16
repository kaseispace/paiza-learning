<script setup lang="ts">
const lines = [
  '\\/___',
  '/_/__',
  '\\/___',
  '/\\__\\',
  '\\/\\_\\',
]
const [H] = lines[0].split(' ').map(Number)
const map: Record<string, number> = { '_': 0, '/': 1, '\\': 2 }

for (let i = 1; i <= H; i++) {
  const row = lines[i].split('').map(ch => map[ch])
  console.log(row.join(' '))
}
</script>
