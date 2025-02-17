<script setup>
const s = lines[0];
const leetMapping = {
    'A': '4',
    'E': '3',
    'G': '6',
    'I': '1',
    'O': '0',
    'S': '5',
    'Z': '2'
};
let result = '';

for(const char of s) {
    if(leetMapping[char]) {
        result += leetMapping[char];
    }else{
        result += char;
    }
}

console.log(result);
</script>