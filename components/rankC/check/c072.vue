<script setup>
const [ATK, DEF, AGI] = lines[0].split(' ').map(Number);
const n = Number(lines[1]);
const result = [];

for(let i = 2; i <= n + 1; i++) {
    const [s, MINATK, MAXATK, MINDEF, MAXDEF, MINAGI, MAXAGI] = lines[i].split(' ');
    const min_a = Number(MINATK);
    const max_a = Number(MAXATK);
    const min_d = Number(MINDEF);
    const max_d = Number(MAXDEF);
    const min_ag = Number(MINAGI);
    const max_ag = Number(MAXAGI);
    
    if(ATK >= min_a && ATK <= max_a && DEF >= min_d && DEF <= max_d && AGI >= min_ag && AGI <= max_ag) {
        result.push(s);
    }
}

if(result.length > 0) {
    result.forEach(name => console.log(name));
}else{
    console.log('no evolution')
}
</script>