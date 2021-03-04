// Ejercicio 5 - Un solo golpe.
function unSoloGolpe(onePunch) {
    let onePunchFinal = "";
    if (onePunch == ``) {
        return `Broken!`;
    }
    for (let i = 0; i < onePunch.length; i++) {
        if (onePunch[i] != "a" && onePunch[i] != "e") {
            onePunchFinal += onePunch[i];
        }
    } // separadas, ordenadas, unidas
    return onePunchFinal.split(" ").sort().join(" ");
}
const onePunchV = ``;
const vacia = unSoloGolpe(onePunchV);
console.log(`onePunch "Cadena Vacía": ${vacia}`);
const onePunch1 = "Beard Jeans Hairbrush Knuckleduster Sand";
const result1 = unSoloGolpe(onePunch1);
console.log(`onePunch "Beard Jeans Hairbrush Knuckleduster Sand": ${result1}`);
const onePunch2 = "Sock Beard Vest Lady Sage";
const resulta = unSoloGolpe(onePunch2);
console.log(`onePunch "Sock Beard Vest Lady Sage": ${resulta}`);
const onePunch3 = "Beard Sack Gun Parachute Face-Kicking-Shoes";
const result3 = unSoloGolpe(onePunch3);
console.log(`onePunch "Beard Sack Gun Parachute Face-Kicking-Shoes": ${result3}`);
const onePunch4 = "Snot Snow Soda Tank Beard";
const result4 = unSoloGolpe(onePunch4);
console.log(`onePunch "Snot Snow Soda Tank Beard": ${result4}`);
