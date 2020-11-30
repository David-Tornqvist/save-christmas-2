import { randomArray } from './helpers.js';
import { swap } from './helpers.js';

function bubblesort(arr){    

for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1])
        swap(arr,i,i+1);
    }     
}    

return arr;

}

console.log(bubblesort(randomArray(100, 10)));



