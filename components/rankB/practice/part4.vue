<script setup lang="ts">
const lines = [
    '10 20',
    '161 295 842 678 857 640 702',
    '703 973 816 584 474 996 452',
    '640 929 296 484 617 785 968',
    '621 946 565 298 297 17 963',
    '82 75 684 44 706 828 615',
    '509 27 178 957 156 705 150',
    '224 247 745 338 11 969 218',
    '343 25 757 600 277 478 814',
    '217 537 596 50 807 363 299',
    '123 296 770 108 25 500 938',
    '4 muscle_training 367 195',
    '8 pray 229',
    '10 levelup 683 829 497 446 843 38',
    '3 pray 505',
    '6 pray 488',
    '6 muscle_training 280 653',
    '4 study 630',
    '10 muscle_training 111 609',
    '8 levelup 846 819 872 906 126 58',
    '7 muscle_training 75 112',
    '3 levelup 750 656 95 557 50 95',
    '7 study 771',
    '3 muscle_training 251 458',
    '8 study 888',
    '4 study 52',
    '3 pray 912',
    '10 study 264',
    '2 pray 886',
    '5 muscle_training 1000 676',
    '9 study 125'
]


const [n, k] = lines[0].split(' ').map(Number);
const braves = [];

class Brave {
    constructor(level, physical, power, defense, quickness, wisdom, luck) {
        this.level = level;
        this.physical = physical;
        this.power = power;
        this.defense = defense;
        this.quickness = quickness;
        this.wisdom = wisdom;
        this.luck = luck;
    }
    
    levelup(physical, power, defense, quickness, wisdom, luck) {
        this.level++;
        this.physical += physical;
        this.power += power;
        this.defense += defense;
        this.quickness += quickness;
        this.wisdom += wisdom;
        this.luck += luck;
    }
    
    muscle_training(physical, power) {
        this.physical += physical;
        this.power += power;
    }
    
    running(defense, quickness) {
        this.defense += defense;
        this.quickness += quickness;
    }
    
    study(wisdom) {
        this.wisdom += wisdom;
    }
    
    pray(luck) {
        this.luck += luck;
    }
}

for(let i = 1; i <= n; i++) {
    const [level, physical, power, defense, quickness, wisdom, luck] = lines[i].split(' ').map(Number);
    braves.push(new Brave(level, physical, power, defense, quickness, wisdom, luck))
}

for(let i = n+1; i <= n+k; i++) {
    const status = lines[i].split(' ');
    const brave = braves[Number(status[0]) - 1];
    const [, event, ...values] = status;
    
    switch (event) {
        case 'levelup':
            brave.levelup(...values.map(Number));
            break;
        case 'muscle_training':
            brave.muscle_training(...values.map(Number));
            break;
        case 'running':
            brave.running(...values.map(Number));
            break;
        case 'study':
            brave.study(...values.map(Number));
            break;
        case 'pray':
            brave.pray(...values.map(Number));
            break;
    }
}
  
braves.forEach(brave => {
    console.log(brave.level, brave.physical, brave.power, brave.defense, brave.quickness, brave.wisdom, brave.luck);
})

</script>

<template>
    <div/>
 </template>