// Ejercicio 4 - Conversor de estilo.

let snakeConv: string = "";
function fromSnakeToCamel(snake: string) {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i] == "_") {
      snakeConv += snake[i+1].toUpperCase();
      i++;
    } else {
      snakeConv += snake[i];
    }
  }
  return snakeConv;
}

let camelConv: string = "";
function fromCameltoSnake(camel: string) {
  for (let i = 0; i < camel.length; i++) {
    if (camel[i] == camel[i].toUpperCase()) {
      camelConv += "_" + camel[i].toLowerCase();
    } else {
      camelConv += camel[i];
    }
  }
  return camelConv;
}

const snake: string = "sample_string";
const camel: string = "sampleString";

const result: string = fromSnakeToCamel(snake);
console.log(`El resultado para pasar a Camel es: ${result}`);

const result2: string = fromCameltoSnake(camel);
console.log(`El resultado para pasar a Snake es: ${result2}`);
