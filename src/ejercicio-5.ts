// Ejercicio 5 - Un solo golpe.

function unSoloGolpe(onePunch: string) {
  let onePunchFinal: string = "";
  if ( onePunch == ``) {
    return `Broken!`;
  }
  for ( let i = 0; i < onePunch.length; i++) {
    if ( onePunch[i] != "a" && onePunch[i] != "e") {
      onePunchFinal += onePunch[i];
    }
  } // separadas, ordenadas, unidas
  return onePunchFinal.split(" ").sort().join(" ");
}

const onePunchV: string = ``;
const vacia: string = unSoloGolpe(onePunchV);
console.log(`onePunch "Cadena Vacía": ${vacia}`);

const onePunch1: string = "Beard Jeans Hairbrush Knuckleduster Sand";
const result1: string = unSoloGolpe(onePunch1);
console.log(`onePunch "Beard Jeans Hairbrush Knuckleduster Sand": ${result1}`);

const onePunch2: string = "Sock Beard Vest Lady Sage";
const resulta: string = unSoloGolpe(onePunch2);
console.log(`onePunch "Sock Beard Vest Lady Sage": ${resulta}`);

const onePunch3: string = "Beard Sack Gun Parachute Face-Kicking-Shoes";
const result3: string = unSoloGolpe(onePunch3);
console.log(`onePunch "Beard Sack Gun Parachute Face-Kicking-Shoes": ${result3}`);

const onePunch4: string = "Snot Snow Soda Tank Beard";
const result4: string = unSoloGolpe(onePunch4);
console.log(`onePunch "Snot Snow Soda Tank Beard": ${result4}`);
