<script setup lang="ts">
const lines = [
    "5",
    "s 70 78 82 57 74",
    "l 68 81 81 60 78",
    "s 63 76 55 80 75",
    "s 90 100 96 10 10",
    "l 88 78 81 97 93"
]
const n = Number(lines[0]);
let result = 0;

for(let i = 1; i <= n; i++) {
    const [t, e, m, s, j, g] = lines[i].split(' ');
    const scores = [e, m, s, j, g]
    const sum = scores.map(Number).reduce((acr, cur) => acr + cur, 0);
    
    // 文系
    if(sum >= 350) {
        if(t === 'l') {
            const l_sum = Number(j) + Number(g);
            if(l_sum >= 160) result++;
        }else{
            const s_sum = Number(m) + Number(s);
            if(s_sum >= 160) result++;
        }
    }
}

console.log(result);
</script>