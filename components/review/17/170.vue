<script setup lang="ts">
const lines = [
  '3',
  'cba',
]
const s = lines[1].split('')

const nextPermutation = (arr: string[]) => {
  let i = arr.length - 2
  while (i >= 0 && arr[i] >= arr[i + 1]) i--
  if (i < 0) return false
  let j = arr.length - 1

  while (arr[j] <= arr[i]) j--;
  [arr[i], arr[j]] = [arr[j], arr[i]]
  let l = i + 1, r = arr.length - 1

  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
  return true
}

s.sort()

nextPermutation(s) // 2番目
nextPermutation(s) // 3番目

console.log(s.join(''))
</script>
