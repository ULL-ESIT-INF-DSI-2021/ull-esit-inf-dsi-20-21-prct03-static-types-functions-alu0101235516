function isValid(str: string) {
  let strNew: string;
  let num: number;
  let stR: string;
  const tam = str.length;
  strNew = str;

  for (let i = 0; i < tam; i++) {
    num = parseInt(strNew, 10);
    const numS = num.toFixed().length;

    if (numS > 1) {
      i = i + (numS - 1);
    }
    if (isNaN(num) == true) {
      return false;
    }

    for (let j = 1; j <= num; j++) {
      stR = str.charAt(i + j);
      if (!/[a-z]/g.test(stR)) {
        return false;
      }
    }
    strNew = strNew.slice(num + 1);
    i = i + num;
  }
  return true;
}

const strV: string = '';
const strB: string = '3hey5hello2hi';
const strM: string = '3alu4lalaguna';

const solstrV = isValid(strV);
const solstrB = isValid(strB);
const solstrM = isValid(strM);

console.log(`¿La cadena vacía es válida? -> ${solstrV}`);
console.log(`¿La cadena [${strB}] es válida? -> ${solstrB}`);
console.log(`¿La cadena [${strM}] es válida? ->  ${solstrM}`);
