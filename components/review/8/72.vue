<script setup lang="ts">
const lines = ['2 5']
const MOD = 10000000
const [xStr, kStr] = lines[0].split(' ').map(Number)
const x = Number(xStr)
const k = Number(kStr)

let cur = x % MOD
const out: string[] = []
for (let i = 0; i < k; i++) {
  out.push(String(cur))
  cur = (cur * cur) % MOD
}

console.log(out.join('\n'))
</script>
