<script setup>
const N = Number(lines[0]);
const s = [];
let sSum = 0;
let result = 0;
const center = Math.ceil((N + 1) / 2);
let num = center - 1;

// 盤面の作成
for(let i = 1; i <= N; i++) {
    const col = lines[i].split(' ').map(Number);
    const sum = col.reduce((acr, cur) => acr + cur, 0);
    s.push([...col]);
    sSum += sum;
}

result += center;

// 完成する盤面の合計
for(let i = 8; i <= (center - 1) * 8; i += 8) {
    result += i * num;
    num--;
}

console.log(sSum - result);
</script>