<script setup>
let [n, m] = lines[0].split(' ').map(Number);
let point = 0;

for(let i = 1; i <= m; i++) {
    const s = Number(lines[i]);
    
    if(point >= s) {
        point -= s;
    }else{
        n -= s;
        point += Math.floor(s * 0.1);
    }
    
    console.log(n, point);
}
</script>