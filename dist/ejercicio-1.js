// Ejercicio 1 - Año bisiestos.
function isLeapYear(year) {
    let bis;
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            bis = true;
        }
        else if ((year % 100 != 0) || (year % 400 == 0)) {
            bis = true;
        }
        else {
            bis = false;
        }
    }
    else {
        bis = false;
    }
    return bis;
}
const año = 1997;
const compr = isLeapYear(año);
console.log(`¿Se confirma que el año ${año} es bisiesto? --> ${compr}`);
const año2 = 1996;
const compr2 = isLeapYear(año2);
console.log(`¿Se confirma que el año ${año2} es bisiesto? --> ${compr2}`);
