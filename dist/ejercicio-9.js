function pokemonBattle(tipPok, tipPok1, capAt, capDf) {
    let efect = 0;
    let daño = 0;
    let dañoInt = 0;
    switch (tipPok) {
        case `fuego`: {
            if (tipPok1 == `hierba`) {
                efect = 2;
            }
            else if (tipPok1 == `agua` || tipPok1 == `fuego`) {
                efect = 0.5;
            }
            else {
                efect = 1;
            }
        }
        case `agua`: {
            if (tipPok1 == `fuego`) {
                efect = 2;
            }
            else {
                efect = 0.5;
            }
        }
        case `hierba`: {
            if (tipPok1 == `agua`) {
                efect = 2;
            }
            else if (tipPok1 == `fuego` || tipPok1 == `hierba`) {
                efect = 0.5;
            }
            else {
                efect = 1;
            }
        }
        case `electrico`: {
            if (tipPok1 == `agua`) {
                efect = 2;
            }
            else if (tipPok1 == `electrico`) {
                efect = 0.5;
            }
            else {
                efect = 1;
            }
        }
    }
    daño = 50 * (capAt / capDf) * efect;
    return dañoInt = Math.round(daño);
}
let pokemon1 = `fuego`;
let pokemon2 = `agua`;
const battle1 = pokemonBattle(pokemon1, pokemon2, 600, 500);
console.log(`En la primera batalla el pokemon de tipo ${pokemon1} ha hecho [${battle1}] de daño al de tipo ${pokemon2}.`);
pokemon1 = `electrico`;
pokemon2 = `hierba`;
const battle2 = pokemonBattle(`electrico`, `hierba`, 1200, 1400);
console.log(`En la segunda batalla el pokemon de tipo ${pokemon1} ha hecho [${battle2}] de daño al de tipo ${pokemon2}.`);
