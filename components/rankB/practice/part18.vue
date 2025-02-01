<script setup>
const [n, a, b, c] = lines[0].split(' ').map(Number);
const dp = Array(n + 1).fill(0);
dp[0] = 1;

for(let i = 1; i <= n; i++) {
    if(i >= a) {
        dp[i] += dp[i - a];
    }
    
    if(i >= b) {
        dp[i] += dp[i - b];
    }
    
    if(i >= c) {
        dp[i] += dp[i - c];
    }
}

console.log(dp[n]);
</script>