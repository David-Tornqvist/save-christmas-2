import { randomArray } from './helpers.js';

const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]

function sortKids(arr,sortBy){
    if(sortBy === "naughtyScore" || sortBy === "age"){
        return arr.sort((a,b) => {
            return a[`${sortBy}`] - b[`${sortBy}`]});
    } else {
        
        return arr.sort((a,b) => {
            
        });

    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
    }         
}

console.log(sortKids(kids,"naughtyScore"));
console.log(sortKids(kids,"age"));
console.log(sortKids(kids,"name"));