<script setup lang="ts">
const lines = [
  '4',
  'TA ok',
  'TA ng',
  'TA ng',
  'TA ok',
]
const logs = lines.slice(1)

const stages = ['TA', 'TB', 'TC', 'TD']
const rankMap = { TA: 'A', TB: 'B', TC: 'C', TD: 'D' }
const results = { TA: { ok: 0, ng: 0 }, TB: { ok: 0, ng: 0 }, TC: { ok: 0, ng: 0 }, TD: { ok: 0, ng: 0 } }
const passed = new Set()

for (const line of logs) {
  const [test, result] = line.split(' ')
  if (passed.has(test)) continue

  results[test][result]++
  if (results[test]['ok'] === 2) {
    passed.add(test)
  }
  else if (results[test]['ng'] === 2) {
    passed.delete(test)
    results[test]['ok'] = -99
  }
}

for (const stage of stages) {
  if (results[stage]['ok'] >= 2) {
    console.log(rankMap[stage])
    return
  }
}

console.log('E')
</script>
