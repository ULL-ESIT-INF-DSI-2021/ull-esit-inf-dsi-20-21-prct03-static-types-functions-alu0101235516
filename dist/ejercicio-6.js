// Ejercicio 6 - Conversor ISBN.
function converISBN(codigo) {
    codigo = codigo.replace(/[-]/g, "");
    let j = 10;
    let sm = 0;
    let codigoNew = ``;
    for (let i = 0; i < codigo.length; i++, j--) {
        codigoNew = codigo.charAt(i);
        if (codigo.charAt(i) == `X`) {
            codigoNew = codigo.charAt(i).replace(`X`, `10`);
        }
        sm += (parseInt(codigoNew, 10) * j);
    }
    if (sm % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let p1 = `3-598-21507-X`;
const comp = converISBN(p1);
console.log(`¿${p1} es válido? --> ${comp}`);
p1 = `359821507X`;
const comp2 = converISBN(p1);
console.log(`¿${p1} es válido? --> ${comp2}`);
