<script setup>
const [n, m] = lines[0].split(' ').map(Number);
const requiredSushi = lines.slice(1, m + 1).map(Number);

for(let i = m + 1; i <= m + m; i++) {
    const sushi = Number(lines[i]);
    
    for(let j = 0; j < requiredSushi.length; j++) {
        if(requiredSushi[j] === sushi) {
            requiredSushi.splice(j, 1);
            break;
        }
    }
}

console.log(requiredSushi.length === 0 ? 'Yes' : 'No');
</script>