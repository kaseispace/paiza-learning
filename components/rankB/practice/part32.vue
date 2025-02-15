<script setup>
const [N, K, M] = lines[0].split(' ').map(Number);
const members = Array.from({length: N}, (_, i) => i + 1);
const words = new Set();
let beforeEnd = '';
let currentUser = 0;

for(let i = 1; i <= K; i++) {
    words.add(lines[i]);
}

for(let i = K + 1; i <= K + M; i++) {
    const word = lines[i];
    
    // 前の単語の末尾と同じか(前の人が抜けた場合は無視する)
    
    if(beforeEnd === '') {
        // リスト内に存在する単語か
        if(words.has(word) && word.slice(-1) !== 'z') {
            // リスト内から単語を削除
            words.delete(word);
            // 次の人が始める先頭文字
            beforeEnd = word.slice(-1);
            // 次の人に回す
            currentUser = (currentUser + 1) % members.length;
        }else{
            beforeEnd = '';
            members.splice(currentUser, 1);
            if (currentUser >= members.length) currentUser = 0;
        }
    }else{
        if(words.has(word) && word.slice(-1) !== 'z' && word[0] === beforeEnd) {
            // リスト内から単語を削除
            words.delete(word);
            // 次の人が始める先頭文字
            beforeEnd = word.slice(-1);
            // 次の人に回す
            currentUser = (currentUser + 1) % members.length;
        }else{
            beforeEnd = '';
            members.splice(currentUser, 1);
            if (currentUser >= members.length) currentUser = 0;
        }
    }
}

console.log(members.length);
members.forEach(num => console.log(num));
</script>