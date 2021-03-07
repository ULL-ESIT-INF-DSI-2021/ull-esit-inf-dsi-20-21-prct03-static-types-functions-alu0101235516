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
#### Ejercicio 1 - Años bisiestos.

  **Enunciado a realizar**

Crear una funcion `isLeapYear` que devuelva true o false en el caso de que sea o no bisiesto el año. Teniendo en cuneta que un año bisiesto ocurre en el calendario gregoriano:

  - Cada año que es divisible por 4.
  - Excepto cada año que es divisible por 100.
  - Al menos que el año también sea divisible por 400.

  **La funcion para la realización de este ejercicio ha sido el siguiente:**
  
```TypeScript
function isLeapYear(year: number) {
  let bis: boolean;
  if ( year%4 == 0 ) {
    if (( year%100 != 0 ) || ( year%400 == 0 )) {
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
 
 
 #### Ejercicio 4 - Conversor de estilo.
 
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
   

#### Ejercicio 5 - Un solo golpe.
 
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
  
#### Ejercicio 6 - Conversor ISBN.

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
   
   ![Ejercicio 5](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101235516/blob/gh-pages/images/Ej%206.PNG)
