// Ejercicio 1 - Año bisiestos.

function isLeapYear(year: number) {
  let bis: boolean;
  if ( year%4 == 0 ) {
    if ( year%100 != 0 ) {
      bis = true;
    } else if (( year%100 != 0 ) || ( year%400 == 0 )) {
      bis = true;
    } else {
      bis = false;
    }
  } else {
    bis = false;
  }
  return bis;
}

const año: number = 1997;
const compr: boolean = isLeapYear(año);
console.log(`¿Se confirma que el año ${año} es bisiesto? --> ${compr}`);
