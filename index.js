//Подсчёт чётных чисел
 function countEven(n) {
    let count = 0;
    for (let i = 1; i<= n; i++) {
        if (i % 2 === 0) {
            count++
        }
    }
    return count;
 }
console.log(countEven(10));