
function isValidUsername(nombreUsuario: string) {
  if ((nombreUsuario.length < 4) || (nombreUsuario.length > 30)) {
    return false;
  }
  if ((nombreUsuario[0] == `_`) ||
       (nombreUsuario[nombreUsuario.length - 1] == `_`)) {
    return false;
  }

  const minus: RegExp = /[a-z]/g;
  const mayus: RegExp = /[A-Z]/g;
  const espec: RegExp = /[$_-]/g;
  const num: RegExp = /\d/;

  const minusDb: RegExp = /[a-z][a-z][a-z]/g;
  const mayusDb: RegExp = /[A-Z][A-Z][A-Z]/g;
  const especDb: RegExp = /[$_-][$_-][$_-]/g;
  const numDb: RegExp = /\d\d\d/g;

  if ((minus.test(nombreUsuario)) && (mayus.test(nombreUsuario)) &&
         (espec.test(nombreUsuario)) && (num.test(nombreUsuario))) {
    if ((!minusDb.test(nombreUsuario)) &&
           (!mayusDb.test(nombreUsuario)) &&
           (!especDb.test(nombreUsuario)) &&
           (!numDb.test(nombreUsuario))) {
      return true;
    }
  }
  return false;
}

const pruebaname: string = `Alu16$uLL`;
const mostrar: boolean = isValidUsername(pruebaname);
console.log(`¿El usuario [${pruebaname}] es válido? -> ${mostrar}`);

const pruebaname2: string = `_Alu16$uLL_`;
const mostrar2: boolean = isValidUsername(pruebaname2);
console.log(`¿El usuario [${pruebaname2}] es válido? -> ${mostrar2}`);

const pruebaname3: string = `Alu16$uLLL`;
const mostrar3: boolean = isValidUsername(pruebaname3);
console.log(`¿El usuario [${pruebaname3}] es válido? -> ${mostrar3}`);
