//Сумма цифр в числе
function sumDigits(num) {
    let sum = 0;
    let tempNum = Math.abs(num);
    while (tempNum > 0) {
        sum += tempNum % 10;
        tempNum = Math.floor(tempNum / 10);
    }
    return sum;
}
console.log(sumDigits(1234));