// Ejercicio 7 - El siguiente número.

function ordenar(a, b) {
  return b - a;
}
function nextNumber(numero: string) {
  const valorAceptado = /^[0-9]+$/;
  if (numero.match(valorAceptado) ) {
    let numdiv = num.split("").sort(ordenar).join("");
    return numdiv;
    if (numdiv = numero) {
      return -1;
    }
  }
}


const num: string = "2017";
console.log(nextNumber(num));
