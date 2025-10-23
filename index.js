//Повтор текста
function repeatText(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text
    }
    return result;
}
console.log(repeatText('Привет', 3));