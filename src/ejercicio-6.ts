// Ejercicio 6 - Conversor ISBN.

function converISBN(codigo: string) {
  codigo = codigo.replace(/[-]/g, "");
  let j = 10;
  let sm: number = 0;
  let codigo_new: string = ``;
  for (let i = 0; i < codigo.length; i++, j--) {
    codigo_new = codigo.charAt(i);
    if ( codigo.charAt(i) == `X`) {
      codigo_new = codigo.charAt(i).replace(`X`, `10`);
    }
    sm += (parseInt(codigo_new, 10) * j);
  }
  if (sm % 11 == 0) {
    return true;
  } else {
    return false;
  }
}

const p1: string = `3-598-21507-X`;
const comp: boolean = converISBN(p1);
console.log(`¿${p1} es válido? --> ${comp}`);
