// Ejercicio 2 - Notación decimal y factorial.
function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
function decimalToFactorial(num) {
    let factUp = 0;
    let notFact = '';
    let notNum = 0;
    while (factorial(factUp) < num) {
        factUp++;
    }
    factUp--;
    for (let i = factUp; i > -1; i--) {
        notNum = Math.floor(num / factorial(i));
        notFact = notFact + notNum.toFixed();
        num = num - (notNum * factorial(i));
    }
    return notFact;
}
function factorialToDecimal(str) {
    let notNum = 0;
    let j = 0;
    const tam = str.length;
    for (let i = tam - 1; i > -1; i--, j++) {
        notNum = notNum + (parseInt(str[j]) * factorial(i));
    }
    return notNum;
}
const dec = 463;
let func = decimalToFactorial(dec);
console.log(`El número [${dec}] en notación factorial sería: ${func}`);
const fac = "341010";
func = factorialToDecimal(fac);
console.log(`La notacion factorial [${fac}] sería: ${func}`);
