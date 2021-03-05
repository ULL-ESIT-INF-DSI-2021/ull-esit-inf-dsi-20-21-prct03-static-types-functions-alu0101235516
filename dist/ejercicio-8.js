// Ejercicio 8 - Contando IP.
function ipsInRange(ip, ip1) {
    const ipNum = ip.split(".");
    const ip1Num = ip1.split(".");
    let range = 1;
    let numerodeIP = 0;
    for (let i = ipNum.length - 1; i >= 0; i--) {
        numerodeIP += ((parseInt(ip1Num[i]) - parseInt(ipNum[i])) * range);
        range *= 256;
    }
    return numerodeIP;
}
const ip = "10.0.0.0";
const ip1 = "10.0.0.50";
const rango = ipsInRange(ip, ip1);
console.log(`El rango de [${ip}] y [${ip1}] es: ${rango} IPs.`);
