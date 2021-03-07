// Ejercicio 2 - Notación decimal y factorial.

function factorial(num: number): number {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function decimalToFactorial(num: number): string {
  let factUp: number = 0;
  let notFact: string = '';
  let notNum: number = 0;

  while (factorial(factUp) < num) {
    factUp++;
  }
  factUp--;

  for (let i: number = factUp; i > -1; i--) {
    notNum = Math.floor(num / factorial(i));
    notFact = notFact + notNum.toFixed();
    num = num - (notNum * factorial(i));
  }
  return notFact;
}

function factorialToDecimal(str: string): number {
  let notNum: number = 0;
  let j: number = 0;
  const tam: number = str.length;
  for (let i: number = tam - 1; i > - 1; i--, j++) {
    notNum = notNum + (parseInt(str[j]) * factorial(i));
  }
  return notNum;
}

const dec: number | string = 463;
let func: number | string = decimalToFactorial(dec);
console.log(`El número [${dec}] en notación factorial sería: ${func}`);

const fac = "341010";
func = factorialToDecimal(fac);
console.log(`La notacion factorial [${fac}] sería: ${func}`);
