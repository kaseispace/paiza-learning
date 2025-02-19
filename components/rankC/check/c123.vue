<script setup>
const n = Number(lines[0]);
const users = [];
const m = Number(lines[n + 1]);

class User {
    constructor(age) {
        this.age = Number(age);
        this.count = 0;
    }
    
    add(count) {
        this.count = Math.min(this.age, this.count + count);
    }
}

for(let i = 1; i <= n; i++) {
    users.push(new User(lines[i]));
}

for(let i = n + 2; i <= n + m + 1; i++) {
    const [a, b, c] = lines[i].split(' ').map(Number);
    
    for(let j = a; j <= b; j++) {
        users[j - 1].add(c);
    }
}

for(const user of users) {
    console.log(user.count);
}
</script>