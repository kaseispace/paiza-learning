<script setup>
const [x, d_1, d_2] = lines[0].split(' ').map(Number);
const q = Number(lines[1]);
const dp = [x];
const k = [];

for(let i = 2; i < 2 + q; i++) {
    k.push(Number(lines[i]));
}

for(let i = 1; i <= Math.max(...k); i++) {
    if((i + 1) % 2 == 1) {
        dp[i] = dp[i - 1] + d_1;
    }else{
        dp[i] = dp[i - 1] + d_2;
    }
}

k.forEach(num => console.log(dp[num - 1]));
</script>