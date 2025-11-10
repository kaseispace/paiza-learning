<script setup lang="ts">
const lines = [
  '5',
  '17 22',
  '9 20',
  '21 6',
  '4 13',
  '22 5',
]
const shifts = lines.slice(1).map(line => line.split(' ').map(Number))

const count: number[] = Array(24).fill(0)

for (const [S, E] of shifts) {
  if (S < E) {
    for (let h = S; h < E; h++) count[h]++
  }
  else if (S > E) {
    for (let h = S; h < 24; h++) count[h]++
    for (let h = 0; h < E; h++) count[h]++
  }
}

const ok = count.every(c => c >= 2)
console.log(ok ? 'OK' : 'NG')
</script>
