<script setup lang="ts">
const n = 57;
const isPrime = (N: number) => {
    if(N <= 1) return false;
    if(N === 2) return true;
    if(N % 2) return false;

    // 奇数で割り切れるか判定
    // 約数があるなら必ずルートN以下の数にあるので、条件はiの2乗で十分
    for(let i = 3; i * i <= N; i += 2) {
        if(N % i === 0) return false;
    }

    return true;
}

console.log(isPrime(n) ? 'YES' : 'NO');
</script>