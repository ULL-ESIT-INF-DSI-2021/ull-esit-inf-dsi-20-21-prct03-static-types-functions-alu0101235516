let onePunchFinal = "";
function unSoloGolpe(onePunch) {
    for (let i = 0; i < onePunch.length; i++) {
        if (onePunch[i] != "a" && onePunch[i] != "e") {
            onePunchFinal += onePunch[i];
        }
    } // separadas, ordenadas, unidas
    return onePunchFinal.split(" ").sort().join(" ");
}
const onePunch1 = "Beard Jeans Hairbrush Knuckleduster Sand";
const result1 = unSoloGolpe(onePunch1);
console.log(`onePunch "Beard Jeans Hairbrush Knuckleduster Sand": ${result1}`);
