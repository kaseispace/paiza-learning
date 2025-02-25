<script setup>
const s = lines[0].split('');
const t = lines[1].split('');

if(s.join('') === t.join('') || s.length !== t.length) {
    console.log('NO');
}else{
    s.sort();
    t.sort();
    
    console.log(s.join() === t.join() ? 'YES' : 'NO');
}
</script>