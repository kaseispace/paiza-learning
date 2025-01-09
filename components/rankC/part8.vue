<script setup lang="ts">
const lines = [
    "9", 
    "1 2 3 2 5 3 3 10 2",
];
const n = parseInt(lines[0]);
const a = lines[1].split(' ').map(Number);
  
//   開始が2なので、初期値を2にしておく
for (let i = 2; i <= n; i++) {
    //   探す対象の配列
    const s = a.slice(0, i - 1);
    //   値を探す
    const result = s.includes(a[i - 1]);
    console.log(result ? 'Yes' : 'No');
  }
</script>