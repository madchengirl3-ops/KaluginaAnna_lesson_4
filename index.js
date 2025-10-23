//Сумма чисел от 1 до N
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum +=i;
    }
    return sum;
}
console.log(sumTo(4))