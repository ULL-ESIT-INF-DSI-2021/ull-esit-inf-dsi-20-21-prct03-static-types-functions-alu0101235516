function isValidUsername(nombreUsuario) {
    if ((nombreUsuario.length < 4) || (nombreUsuario.length > 30)) {
        return false;
    }
    if ((nombreUsuario[0] == `_`) ||
        (nombreUsuario[nombreUsuario.length - 1] == `_`)) {
        return false;
    }
    const minus = /[a-z]/g;
    const mayus = /[A-Z]/g;
    const espec = /[$_-]/g;
    const num = /\d/;
    const minusDb = /[a-z][a-z][a-z]/g;
    const mayusDb = /[A-Z][A-Z][A-Z]/g;
    const especDb = /[$_-][$_-][$_-]/g;
    const numDb = /\d\d\d/g;
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
const pruebaname = `Alu16$uLL`;
const mostrar = isValidUsername(pruebaname);
console.log(`¿El usuario [${pruebaname}] es válido? -> ${mostrar}`);
const pruebaname2 = `_Alu16$uLL_`;
const mostrar2 = isValidUsername(pruebaname2);
console.log(`¿El usuario [${pruebaname2}] es válido? -> ${mostrar2}`);
const pruebaname3 = `Alu16$uLLL`;
const mostrar3 = isValidUsername(pruebaname3);
console.log(`¿El usuario [${pruebaname3}] es válido? -> ${mostrar3}`);
