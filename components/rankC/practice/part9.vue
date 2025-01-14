<script setup lang="ts">
const lines = [
    "5", 
    "1",
    "2 T",
    "K"
];

const n = parseInt(lines[0]); // 文字数
const q = lines[1]; // 覚えておく文字数
const C = lines[lines.length - 1]; // 埋める文字
const result = Array(n).fill(C); // 配列の作成

for(let i = 2; i < lines.length -1; i++) {
    const [n, c] = lines[i].split(' ');
    result[parseInt(n) - 1] = c;
}
console.log(result.join(''));


</script>