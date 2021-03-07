# Informe. Práctica 3: Tipos de datos estáticos.
## Desarrollo de Sistemas Informáticos.
#### ADRIAN HERNANDEZ SUAREZ - alu0101235516@ull.edu.es


### _**Introducción.**_

  Para llevar a cabo este informe, hemos tenido que realizar 10 ejercicios diferentes acerca de los tipo de datos estáticos. Cada ejercico es diferente a otro y con eso hemos conseguido mayor diversidad y mayor conocimiento acerca de diferentes áreas del **TypeScript**, como utilización de métodos muy útiles como `.test()`, `.match()` o por ejemplo las Expresiones regulares `RegExp` que veremos a lo largo de este informe.

### _**Objetivos.**_

  El objetivo de esta práctica es resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad, tanto los tipos de datos estáticos en **TypeScript**, como las `funciones`.

### _**Primer paso: Creación de los directorios de trabajo**_

  Para completar este primer apartado, tendremos que seguir los pasos que se muestran en el siguiente enlace [Creación de un proyecto inicial para trabajar con TypeScript](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) con esto lo que conseguiremos será crear un espacio de trabajo ideal para comenzar con el desarrollo de los ejercicios propuestos.
  Cuando tengamos esta parte realizada, tendremos creado un directorio llamado `./src`, en este directorio es donde alojaremos todos los ejercicios que vayamos haciendo, cada uno en un fichero independiente con la siguiente notación `ejercicio-n.ts`.
  
### _**Segundo paso: Realizar los ejercicios propuestos**_
### Ejercicio 1 - Años bisiestos.

  **Enunciado a realizar**

Crear una funcion `isLeapYear` que devuelva true o false en el caso de que sea o no bisiesto el año. Teniendo en cuenta que un año bisiesto ocurre en el calendario gregoriano:

  - Cada año que es divisible por 4.
  - Excepto cada año que es divisible por 100.
  - Al menos que el año también sea divisible por 400.

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
function isLeapYear(year: number) {
  let bis: boolean;
  if ( year % 4 == 0 ) {
    if (( year % 100 != 0 ) || ( year % 400 == 0 )) {
      bis = true;
    } else {
      bis = false;
    }
  } else {
    bis = false;
  }
  return bis;
}
```
  La funcion responde de la siguiente manera, a nuestra función `isLeapYear` le pasamos como parámetro una variable de tipo número, en este caso `year` que será el año que estemos evaluando lo que hará nuestra función (teniendo en cuenta el calendario gregoriano) crearemos un condicional `if` para ver si ese número es divisible por 4, en el caso de que sea asi tendremos que valorar si la función no es divisible por 100 o si lo es por 400, en el caso de que esto se cumpla retornaremos el valor `boolean` **true**. Además tenemos que contemplar otra cosa, cuando sea divisible por 400 también tiene que ser que es divisible por 100, pero no es necesario ponerlo porque de forma indirecta, si un número es divisible por 400, también lo será por 100.
  
  **Aqui tenemos el ejemplo de la salida del código:**
    
 ![Ejercicio 1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%201.PNG)
 
 
 ### Ejercicio 2 - Notación decimal y factorial.

  **Enunciado a realizar**
 
  Defina dos funciones decimalToFactorial y factorialToDecimal. La primera, recibirá un entero positivo y devolverá como resultado una cadena de texto con la representación factorial del número recibido. Por el contrario, la función factorialToDecimal realizará la operación opuesta. Esto es, recibirá como paŕametro una cadena de texto en notación factorial y devolverá el número entero que representa.
  
  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
function factorial(num: number): number {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function decimalToFactorial(num: number): string {
  let factUp: number = 0;
  let notFact: string = '';
  let notNum: number = 0;

  while (factorial(factUp) < num) {
    factUp++;
  }
  factUp--;

  for (let i: number = factUp; i > -1; i--) {
    notNum = Math.floor(num / factorial(i));
    notFact = notFact + notNum.toFixed();
    num = num - (notNum * factorial(i));
  }
  return notFact;
}

function factorialToDecimal(str: string): number {
  let notNum: number = 0;
  let j: number = 0;
  const tam: number = str.length;
  for (let i: number = tam - 1; i > - 1; i--, j++) {
    notNum = notNum + (parseInt(str[j]) * factorial(i));
  }
  return notNum;
}
```
  En este ejercicio, tenemos 3 funciones diferentes:
  
   - La función `factorial` funciona de la siguiente manera, se le pasa como parámetro un número. Lo que haremos dentro de esta función es retornar el factorial del número que hayamos puesto, para esto, gracias a usar recursividad, sin necesidad de un bucle, multiplicamos el número por el factorial del anterior, y cuando ese número sea 0, retornará 1.
   - La función `decimalToFactorial` funciona de la siguiente manera, se le pasa como parámetro un número, a través de un bucle `while` se obtiene el factorial mayor por debajo del número, posteriormente, lo que hacemos es a través de un bucle `for` donde los números que multiplican a los factoriales se obtienen haciendo la división entre el resto y el factorial. Después de sacar ese número se multiplica por el factorial correspondiente, se va haciendo el sumatorio hasta que ya obtenemos la notación factorial y la retornamos.
   - La función `factorialToDecimal` funciona de la siguiente manera, se le pasa como parámetro una notación factorial. Lo que haremos es crear una variable que representará la notación que se retorna y una auxiliar, en este caso `j`, la cual se va incrementando para ir cogiendo los números de la notación de izquierda a derecha. Posteriormente a través de un bucle `for` que va desde el tamaño de la notación hasta 0, multiplicamos el número correspondiente de la notación por el factorial correspondiente y haremos el sumatorio moviendonos en todas las posiciones de la notación. Finalmente se obtiene el número entero que representa dicha notación y se retorna.

  **Aqui tenemos el ejemplo de la salida del código:**
    
 ![Ejercicio 2](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%202.PNG)
 
 
  ### Ejercicio 3 - Validador de mensajes.
 
   **Enunciado a realizar**

Defina una función isValid que reciba como parámetro una cadena de texto compuesta por números y letras y determine si es válida según las reglas anteriores. La función devolverá el resultado del cálculo mediante un valor de tipo booleano.

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
function isValid(str: string) {
  let strNew: string;
  let num: number;
  let stR: string;
  const tam = str.length;
  strNew = str;

  for (let i = 0; i < tam; i++) {
    num = parseInt(strNew, 10);
    const numS = num.toFixed().length;

    if (numS > 1) {
      i = i + (numS - 1);
    }
    if (isNaN(num) == true) {
      return false;
    }

    for (let j = 1; j <= num; j++) {
      stR = str.charAt(i + j);
      if (!/[a-z]/g.test(stR)) {
        return false;
      }
    }
    strNew = strNew.slice(num + 1);
    i = i + num;
  }
  return true;
}
```
  La función `isValid` funciona de la siguiente manera, recibe como parámetro una cadena. Primero creamos un bucle `for` que recorre la cadena entera, primero comprueba si la posicion en la que se encuentra es un número. Posteriormente avanzamos en la cadena hasta la primera letra, realizamos un nuev `for` dentro del anterior que vaya desde 0 hasta el número encontrado, que lo que hace es ir posición a posición para comprobar que haya tanta letras como el número que indicaba previamente. Si todo esto se cumple retorna true, en caso de no ser así retorna false, al ser un mensaje no válido.
  
  **Aqui tenemos el ejemplo de la salida del código:**
    
 ![Ejercicio 3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%203.PNG)


 ### Ejercicio 4 - Conversor de estilo.
 
   **Enunciado a realizar**
 
Desarrolle dos funciones `fromSnakeToCamelCase` y `fromCamelToSnakeCase` que conviertan una cadena de texto de un formato a otro. Ambas funciones recibirán como parámetro una cadena de texto y devolverán otra cadena con el nuevo formato. Por ejemplo: `sample_string` a `sampleString` y viceversa. 

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
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
```
  La función `fromSnakeToCamel` y `fromCameltoSnake` funcionan de la siguiente manera, a cada función le va a llegar una cadena, donde una contendrá un `_` y la otra una letra en mayúscula (o varias). En la primera función `fromSnakeToCamel` lo que hará dicha función es recorrer nuestra cadena hasta que encuentre un `_`, cuando lo logre (si es que existe) la función lo que hará es guardar la siguiente posición al `_` en la nueva cadena de almacenamiento pero con la diferencia de que la pondrá en mayúscula, en el caso de que vayamos recorriendo la cadena y no encontremos ningún `_` se irá almacenando en la nueva cadena `snakeConv`.
  En el caso de la otra función hará lo contrario, cuando alguna posición de la cadena sea igual a una letra mayúscula, lo que hará nuestra función `fromCameltoSnake` es añadir delante un `_` y poner dicha letra en minúscula y almacenar todo en una nueva cadena `camelConv` como en la función anterior.
  
  **Aqui tenemos el ejemplo de la salida del código:**
  
   ![Ejercicio 4](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%204.PNG)
   

### Ejercicio 5 - Un solo golpe.
 
  **Enunciado a realizar**
  
Chuck espera como resultado una cadena de caracteres con sus cosas favoritas separadas, ordenadas, unidas de nuevo y, además, que se eliminen todas las apariciones de las letras e y a. Si alguien se atreve a retar a Chuck Norris con una cadena vacía la función devuelve “Broken!”.

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
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
```
  La función `unSoloGolpe` funciona de la siguiente manera, le pasamos una cadena de caracteres, y lo primero que hace nuestra función es ver si la cadena esta vacía, en el caso de que la cadena este vacía nos retornará `Broken!` en caso contrario, recorrerá la cadena en busca de las vocales `|a,e|` y las eliminará de nuestra cadena almacenando los demás caracteres en una nueva cadena llamada `onePunchFinal`.
  Cuando nuestra función haya eliminado las vocales `|a,e|` lo que haremos será utilizar los métodos `.split(" ")` para dividir nuestra cadena por los espacios, es decir se nos quedaría tal que `Hola me llamo Adrián => [Hola],[me],[llamo],[Adrián]` luego con `.sort()` lo que haremos será ordenar alfabéticamente las pequeñas cadenas que se nos han generado y finalmente con el `.join(" ")` haremos que se vuelva unir la cadena por espacios en blanco.
  
  **Aqui tenemos el ejemplo de la salida del código:**
  
  ![Ejercicio 5](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%205.PNG)
  
### Ejercicio 6 - Conversor ISBN.

  **Enunciado a realizar**

Para resolver este ejercicio, defina una función isValidISBN que compruebe la validez de un código ISBN-10. La función recibirá como parámetro una cadena de caracteres compuesta por un posible código ISBN-10 separado o no por guiones. Como resultado, la función devolverá verdadero o falso según corresponda con la validez del código ISBN-10.

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
  ```TypeScript
  function converISBN(codigo: string) {
  codigo = codigo.replace(/[-]/g, "");
  let j = 10;
  let sm: number = 0;
  let codigoNew: string = ``;
  for (let i = 0; i < codigo.length; i++, j--) {
    codigoNew = codigo.charAt(i);
    if ( codigo.charAt(i) == `X`) {
      codigoNew = codigo.charAt(i).replace(`X`, `10`);
    }
    sm += (parseInt(codigoNew, 10) * j);
  }
  if (sm % 11 == 0) {
    return true;
  } else {
    return false;
  }
}
```
  La función `converISBN` funciona de la siguiente manera, le llega como parámetro una cadena dde caracteres, en este caso numérico, el cual también puede añadir guiones y la X que tomará el valor 10. Lo primero que hace nuestra función es eliminar todos los guiones que contenga el código, para eso hacemos uso del método `.replace()` el cual reemplaza los `[-]` por un "espacio" en blanco, es decir, por vacío, con esto conseguimos que nuestro código ISBN pase de `3-598-21507-X` a `359821507X` para poder trabajar mejor con él.
  Después de hacer esto, pasamos a recorrer nuestra cadena en busca de alguna X para cambiarla por el valor 10, de nuevo haciendo uso del `.replace()` cuando hayamos verificado esto, lo que principalmente queremos que haga nuestra función es ir sumando cada posición del código ISBN. Para esto hacemos uso de lo siguiente `sm += (parseInt(codigoNew, 10) * j);` donde `codigoNew` es las posiciones de nuestro código y la j será nuestra constante a multiplicar que irá decreciendo según la posición del código vaya aumentando. Cuando todo esto termine verificaremos si al hacer el módulo por 11 al sumatorio da 0 y retornaremos un valor `true`, en cualquier otro caso retornaremos `false`.
  
   **Aqui tenemos el ejemplo de la salida del código:**
   
   ![Ejercicio 6](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%206.PNG)


 ### Ejercicio 7 - El siguiente número.

  **Enunciado a realizar**
  
   Defina una función que reciba como parámetro un entero positivo y devuelva el siguiente número mayor que pueda ser formado al reposicionar sus dígitos.
   
   - 12 -> 21
   - 513 -> 531
   - 2017 -> 2071

   **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
function nextNumber(number: number) {
  let numS: string = number.toFixed();
  let spc: string = "";
}
```
  He estado haciendo pruebas, pero no he encontrado la manera de realizar bien la función para este ejercicio.. Lo he intentado, pero siempre llego al mismo punto. Cuando estoy haciendo el código, paso de tipo number a string, pero a la forma de ordenarlo, solo consigo que me muestre el número mayor que puedo hacer con los digitos, es decir, de `2017 -> 7210` no me muestra el número siguiente más grande.
  
### Ejercicio 8 - Contando IP.
 
   **Enunciado a realizar**

A partir de cadenas de texto que representan direcciones IPv4, cree una función que reciba como parámetros dos cadenas y devuelva un valor numérico que represente el número de IPs disponibles en el rango correspondiente (incluyendo la primera y excluyendo la última).

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
  ```TypeScript
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
```
  La función `ipsInRange` funciona de la siguiente manera, primero le pasamos como parámetros dos cadenas que serán nuestras IPs a valorar, usando el método `.spli()` las dividiremos por el punto, dejando a los números sueltos, de esta forma `10.0.2.10 => [10],[0],[2],[10]` después de hacer esto lo que haremos será recorrer alguna de las IPs, en este caso la 1, pero de forma decreciente luego restaremos cada posición `ip1 - ip` y lo multiplicaremos por 256 cada vez que avance el bucle.
  
   **Aqui tenemos el ejemplo de la salida del código:**
   
   ![Ejercicio 8](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%208.PNG)


 ### Ejercicio 9 - Entrenador Pokemon.
 
   **Enunciado a realizar**
   
Defina una función que reciba como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente. La función devolverá como resultado el daño causado. Los ataques pueden ser super efectivos, neutrales o no muy efectivos. Esto depende del tipo de Pokemons que estén combatiendo.

  - Super efectivo = x2 de daño
  - Neutral = x1 de daño
  - No muy efectivo = x0.5 de daño

Considerando únicamente Pokemons de tipo fuego, agua, hierba y eléctrico, la efectividad de cada emparejamiento es la siguiente:

  - fuego > hierba
  - fuego < agua
  - fuego = eléctrico
  - agua < hierba
  - agua < eléctrico
  - hierba = eléctrico

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
  ```TypeScript
  function pokemonBattle(tipPok: string, tipPok1: string,
    capAt: number, capDf: number) {
  let efect: number = 0;
  let daño: number = 0;
  let dañoInt: number = 0;

  switch (tipPok) {
    case `fuego`: {
      if (tipPok1 == `hierba`) {
        efect = 2;
      } else if (tipPok1 == `agua` || tipPok1 == `fuego`) {
        efect = 0.5;
      } else {
        efect = 1;
      }
    }

    case `agua`: {
      if (tipPok1 == `fuego`) {
        efect = 2;
      } else {
        efect = 0.5;
      }
    }

    case `hierba`: {
      if (tipPok1 == `agua`) {
        efect = 2;
      } else if (tipPok1 == `fuego` || tipPok1 == `hierba`) {
        efect = 0.5;
      } else {
        efect = 1;
      }
    }

    case `electrico`: {
      if (tipPok1 == `agua`) {
        efect = 2;
      } else if (tipPok1 == `electrico`) {
        efect = 0.5;
      } else {
        efect = 1;
      }
    }
  }

  daño = 50 * (capAt / capDf) * efect;
  return dañoInt = Math.round(daño);
}
```
  La función `pokemonBattle`funciona de la siguiente manera, le pasaremos como parámetros, los dos pokemon siendo una variable de tipo string, el daño del pokemon1 siendo de tipo number y la defensa del pokemon2 siendo de tipo number. Una vez dentro de la función inicializaremos la efectividad del ataque y el daño.
  Para poder definir que hacer según el tipo de pokemon, tendremos que hacer uso del `switch` que en caso de que sea de tipo hierba, fuego, agua o eléctrico hará una cosa u otra. Para no repetir la explicación con cada tipo, lo haré solo una vez con el de tipo fuego.
  
  En el caso de que el pokemon1 sea de tipo fuego, tendremos diferentes condiciones para ver la efectividad de su ataque. Si el oponente es de tipo `hierba` el ataque será super efectivo, por lo que tendra un multiplicador `x2`. En el caso de que el pokemon adversario sea de tipo `agua` o `fuego` el ataque será muy poco efectivo, por lo que su multiplicador será `x0.5` y contra cualquier otro tipo, el ataque será normal, y tendrá multiplicador `x1`.
  Cuando tengamos la efectividad del ataque, pasaremos a nuestro método principal, el de calcular cuanto daño hemos causado, para eso hacemos uso de la siguiente función `daño = 50 * (capAt / capDf) * efect;` donde capAt es el ataque del pokemon1, capDf es la defensa del pokemon2 y efect, es la efectividad del ataque. Finalmente retornarnamos el ataque pero he usado el método `Math.round()` ya que la vida de los pokemon varían en función de números enteros, por lo que en el caso de que nos salga de tipo flotante, es decir, con decimales, lo pasamos a entero y lo retornamos.

   **Aqui tenemos el ejemplo de la salida del código:**
   
   ![Ejercicio 9](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%209.PNG)
   

 ### Ejercicio 10 - Validador de nombre usuario.
 
   **Enunciado a realizar**
 
 Cree una función `isValidUsername` que compruebe la validez de un nombre de usuario. La función recibirá como parámetro una cadena con un nombre de usuario y devolverá verdadero o falso según las siguientes condiciones.
 
   **La funcion para la realización de este ejercicio ha sido el siguiente:**
   
```TypeScript
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
```
  La función `isValidUsername` funciona de la siguiente manera, recibe como parámetro una cadena que será nuestro nombre de usuario, lo primero que hará nuestra función es ver si cumple con el tamaño establecido siendo mayor de 4 y menor de 30, y además de comprobar si no termina ni empieza por un `_`.
  Cuando hayamos comprobado esto y se cumpla, pasaremos a los condicionales de nuestro nombre, definimos unas constantes que serán de tipo `RegExp` es decir, expresiones regulares, que las definiremos como:
  
  - Todas las letras minusuclas
  - Todas las letras mayúsculas
  - Caracteres especiales
  - Caraceres numéricos

a parte de hacer esto, también lo definiremos, pero 3 veces seguidas, esto lo haremos para verificar que el usuario no pone 3 caracteres iguales seguidos, ya sean especiales o alfanuméricos. Finalmente con nuestros condicionales y haciendo uso del método `.test()` estamos evaluando o comprobando si dentro de nuestra cadena existe al menos una letra minúsucla y mayúscula, y caracter especial y un número. Además de comprobar que no existe ninguno de los anteriores (que sean iguales) más de 2 veces seguidas.
  Si todo esto se cumple, retornaremos el valor `true` como que el nombre de usuario es correcto, en cualquier otro caso, retornaremos `false`.
  
   **Aqui tenemos el ejemplo de la salida del código:**
   
  ![Ejercicio 10](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%2010.PNG)
  
  
### Conclusiones.

  Para concluir, creo que la práctica ha estado divertida, y ha sido productiva, hemos tocado muchos puntos de TypeScript, descubierto muchas herramientas muy útiles, y desarrollado nuestra primera estructura de proyecto. En cuanto a los ejercicios creo que tengo que destacar la dificultad del ejercicio 7, que no he podido encontrar la función correcta, pero también tenemos que destacar otras funciones muy divertidas como el ejercicio 5, 9 y 10 y otras muy interesantes como el ejercicio 6 y 8. Creo que en conjunto ha estado muy bien realizar esta práctica, y ver la inmensidad de formas que tenemos de realizar cada ejercicio es increible. Creo que mis ganas de aprender TypeScript y JavaScript, no hacen más que aumentar, y eso me alegra, ya que para poder ser buen desarrollador, tengo que tener estos lenguajes muy presentes.


### _**Bibliografía.**_

Nombre | Enlaces
-------|--------
Introducción a Markdown | https://guides.github.com/features/mastering-markdown/
Información sobre GitHub Pages | https://docs.github.com/en/github/working-with-github-pages
Sitio web de Jekyll | https://jekyllrb.com/
GutHub Learning Lab | https://lab.github.com/
Curso de GitHub Pages | https://lab.github.com/githubtraining/github-pages
Visual Studio Code | https://code.visualstudio.com/
Instalar Visual Studio Code | https://code.visualstudio.com/docs/setup/setup-overview
Tutorial VSCode sobre Additional Components | https://code.visualstudio.com/docs/setup/additional-components
Tutorial VSCode sobre User Interface | https://code.visualstudio.com/docs/getstarted/userinterface
Tutorial VSCode sobre Basic Editing | https://code.visualstudio.com/docs/editor/codebasics
Tutorial VSCode sobre Extension MarketPlace | https://code.visualstudio.com/docs/editor/extension-gallery
Tutorial VSCode sobre IntelliSense | https://code.visualstudio.com/docs/editor/intellisense
Tutorial VSCode sobre Code Navigation | https://code.visualstudio.com/docs/editor/editingevolved
Tutorial VSCode sobre Debugging | https://code.visualstudio.com/docs/editor/debugging
Tutorial VSCode sobre Version Control | https://code.visualstudio.com/docs/editor/versioncontrol
Tutorial VSCode sobre Working with GitHub | https://code.visualstudio.com/docs/editor/github
Tutorial VSCode sobre Integrated Terminal | https://code.visualstudio.com/docs/editor/integrated-terminal
Tutorial VSCode sobre Tasks | https://code.visualstudio.com/docs/editor/tasks
Tutorial VSCode sobre Snippets | https://code.visualstudio.com/docs/editor/userdefinedsnippets
Tutorial VSCode sobre Emmet | https://code.visualstudio.com/docs/editor/emmet
Tutorial VSCode sobre Command Line | https://code.visualstudio.com/docs/editor/command-line
Tutorial VSCode sobre  Multiroot Workspaces | https://code.visualstudio.com/docs/editor/multi-root-workspaces
Tutorial VSCode sobre  Accessibility | https://code.visualstudio.com/docs/editor/accessibility
Conectarnos desde VSCode a una máquina remota por SSH | https://code.visualstudio.com/docs/remote/ssh-tutorial
Informe de la práctica 1 de DSI | https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct01-iaas-alu0101206479/
Live Share Extension Pack | https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack
Documentación de Visual Studio Live Share | https://docs.microsoft.com/en-us/visualstudio/liveshare/
Libro Essential TypeScript: From Beginner to Pro | https://learning.oreilly.com/library/view/essential-typescript-from/9781484249796/html/Part_1.xhtml
