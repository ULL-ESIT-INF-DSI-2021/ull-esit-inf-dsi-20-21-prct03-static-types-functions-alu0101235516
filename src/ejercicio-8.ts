// Ejercicio 8 - Contando IP.

function ipsInRange(ip: string, ip1: string) {
  const ipNum = ip.split(".");
  const ip1Num = ip1.split(".");
  let range: number = 1;
  let numerodeIP: number = 0;

  for (let i: number = ipNum.length - 1; i >= 0; i--) {
    numerodeIP += ((parseInt(ip1Num[i]) - parseInt(ipNum[i])) * range);
    range *= 256;
  }
  return numerodeIP;
}


const ip: string = "10.0.0.0";
const ip1: string = "10.0.0.50";
const rango = ipsInRange(ip, ip1);
console.log(`El rango de [${ip}] y [${ip1}] es: ${rango} IPs.`);
