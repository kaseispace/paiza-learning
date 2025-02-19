<script setup>
const n = Number(lines[0]);
let total_minutes = 0;
let h = 0;
let m = 0;

for(let i = 1; i <= n; i++) {
    const [e, l] = lines[i].split(' ');
    const [e_h, e_m] = e.split(':').map(Number);
    const [l_h, l_m] = l.split(':').map(Number);
    
    const e_total = e_h * 60 + e_m;
    const l_total = l_h * 60 + l_m;
    
    total_minutes += l_total - e_total;
}

const total_h = Math.floor(total_minutes / 60);
const total_m = total_minutes % 60;

console.log(total_h, total_m);
</script>