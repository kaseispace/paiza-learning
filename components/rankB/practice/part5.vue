<script setup lang="ts">
const lines = [
    '5 10',
    '8 2 24 40 25 42 26',
    '59 48 13 21 13 56 2',
    '5 59 7 57 5 25 24',
    '99 28 6 32 5 23 2',
    '62 24 19 11 19 7 21',
    '2 1 3 2',
    '2 1 3 2',
    '5 1 3 1',
    '5 3 1 2',
    '1 1 2 2',
    '4 2 3 1',
    '5 3 3 2',
    '2 3 3 2',
    '4 1 5 3',
    '2 3 3 2'
]

const [n, k] = lines[0].split(' ').map(Number);
const players = [];
let count = 0;

class Player {
    constructor(hp, F1, A1, F2, A2, F3, A3) {
        this.hp = hp;
        this.techniques = [ { F: F1, A: A1 }, { F: F2, A: A2 }, { F: F3, A: A3 } ];
    }

    technique(num) {
        return this.techniques[num - 1];
    }
    
    reinforcement(num) {
        this.techniques.forEach((tech, index) => {
            if(index != num - 1) {
                tech.F = Math.max(0, tech.F - 3);
                tech.A += 5;
            }
        })
    }
}

for(let i = 1; i <= n; i++) {
    const [...item] = lines[i].split(' ').map(Number);
    players.push(new Player(...item));
}

for(let i = n+1; i <= n+k; i++) {
    const [P1_1, T1_1, P2_1, T2_1] = lines[i].split(' ').map(Number);
    const player1 = players[P1_1 - 1];
    const player2 = players[P2_1 - 1];
    
    const p1_attack = player1.technique(T1_1);
    const p2_attack = player2.technique(T2_1);
    
    if(player1.hp > 0 && player2.hp > 0) {
        if(p1_attack.A > 0 && (p2_attack.F == 0 && p2_attack.A == 0)) {
            player2.reinforcement(T2_1);
            player2.hp = Math.max(0, player2.hp - p1_attack.A);
        }else if(p2_attack.A > 0 && (p1_attack.F == 0 && p1_attack.A == 0)) {
            player1.reinforcement(T1_1);
            player1.hp = Math.max(0, player1.hp - p2_attack.A);
        }else if(p1_attack.F != p2_attack.F){
            p1_attack.F < p2_attack.F ?  player2.hp = Math.max(0, player2.hp - p1_attack.A) : player1.hp = Math.max(0, player1.hp - p2_attack.A);
        }
    }
}

players.forEach(player => {
    if(player.hp > 0) {
        count++;
    }
})

console.log(count);
</script>

<template>
    <div/>
 </template>