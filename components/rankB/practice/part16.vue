<script setup>
const [x, d_1, d_2, k] = lines[0].split(' ').map(Number);
const dp = [x];

for(let i = 1; i < k; i++) {
    if((i+1) % 2 == 1) {
        dp[i] = dp[i - 1] +  d_1;
    }else{
        dp[i] = dp[i - 1] +  d_2;
    }
}
console.log(dp[dp.length - 1]);
</script>