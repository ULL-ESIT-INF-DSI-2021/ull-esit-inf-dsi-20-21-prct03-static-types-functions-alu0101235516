// Ejercicio 4 - Conversor de estilo.
let snakeConv = "";
function fromSnakeToCamel(snake) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i] == "_") {
            snakeConv += snake[i + 1].toUpperCase();
            i++;
        }
        else {
            snakeConv += snake[i];
        }
    }
    return snakeConv;
}
let camelConv = "";
function fromCameltoSnake(camel) {
    for (let i = 0; i < camel.length; i++) {
        if (camel[i] == camel[i].toUpperCase()) {
            camelConv += "_" + camel[i].toLowerCase();
        }
        else {
            camelConv += camel[i];
        }
    }
    return camelConv;
}
const snake = "sample_string";
const camel = "sampleString";
const result = fromSnakeToCamel(snake);
console.log(`El resultado para pasar a Camel es: ${result}`);
const result2 = fromCameltoSnake(camel);
console.log(`El resultado para pasar a Snake es: ${result2}`);
