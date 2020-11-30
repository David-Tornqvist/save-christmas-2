
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}




//Funktionen heter randomarray och generar en array med längden len och fyller den med slumpmässiga siffror 
//Från 0 till n.
//Det fungerar inte eftersom vi först sätter i[3] = i[5] sedan sätter vi i[5] = i[3] Vilket är samma sak som i[5] var från början

export function swap (arr,pos1,pos2) {
    const temp = arr[pos1];

    arr[pos1] = arr[pos2];
    arr[pos2] = temp 
    return arr;
}












//Vad är grejen med new?
//Vaför funkar inte:
// function swap(arr,pos1,pos2){
//     let a = arr;
//     a[pos1] = arr[pos2];
//     a[pos2] = arr[pos1];
//     return a;
// }