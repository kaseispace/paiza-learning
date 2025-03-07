<script setup lang="ts">
const lines = [
    '3 25',
    '-2 17',
    '-7 20',
    '2 24'
]
const [k, n] = lines[0].split(' ').map(Number);

for(let i = 1; i <= k; i++) {
    const [d, a] = lines[i].split(' ').map(Number);
    
    if(d >= 10) {
        console.log('D');
    }else{
        const score = d >= 1 ? Math.floor(a / n * 80) : a / n * 100;
        
        switch (true) {
            case score >= 80:
                console.log('A');
                break;
            case score >= 70:
                console.log('B');
                break;
            case score >= 60:
                console.log('C');
                break;
            default:
                console.log('D');
        }
    }
}
</script>