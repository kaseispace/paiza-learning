<script setup lang="ts">
// 要素ではなく、indexを使用したフィルター
const lines = [
    "5 3", 
    "1 2 3 4 5",
];
const [n, m] = lines[0].split(' ').map(Number);
const s = lines[1].split(' ').map(Number);
const result = s.filter((_, i) => i !== m-1 );
result.forEach(num => console.log(num));
</script>