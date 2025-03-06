<script setup lang="ts">
const lines = [
    '4',
    '192.400.1.10.1000...',
    '4.3.2.1',
    '0..33.444...',
    '1.2.3.4'
]
const n = Number(lines[0]);

for(let i = 1; i <= n; i++) {
    const ip = lines[i].split('.');
    
    if(ip.length === 4) {
        let isValid = true;
        
        for(const segment of ip) {
            if(!/^\d+$/.test(segment)) {
                isValid = false;
                break;
            }
            
            const num = Number(segment);
            
            if(num >= 256 || num < 0) {
                isValid = false;
                break;
            }
        }
        
        console.log(isValid ? 'True' : 'False');
    }else{
        console.log('False');
    }
}
</script>