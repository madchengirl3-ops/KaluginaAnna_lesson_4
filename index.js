//Подсчет цифр в числе
function countDigits(num) {
    const numString = String(num);
    return numString.length;
}
console.log(countDigits(123456));