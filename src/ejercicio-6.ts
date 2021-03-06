// Ejercicio 6 - Conversor ISBN.

function converISBN(codigo: string) {
  codigo = codigo.replace(/[-]/g, "");
  let j = 10;
  let sm: number = 0;
  let codigoNew: string = ``;
  for (let i = 0; i < codigo.length; i++, j--) {
    codigoNew = codigo.charAt(i);
    if ( codigo.charAt(i) == `X`) {
      codigoNew = codigo.charAt(i).replace(`X`, `10`);
    }
    sm += (parseInt(codigoNew, 10) * j);
  }
  if (sm % 11 == 0) {
    return true;
  } else {
    return false;
  }
}

let p1: string = `3-598-21507-X`;
const comp: boolean = converISBN(p1);
console.log(`¿${p1} es válido? --> ${comp}`);

p1 = `359821507X`;
const comp2: boolean = converISBN(p1);
console.log(`¿${p1} es válido? --> ${comp2}`);
