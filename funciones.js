// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
    function despedir(){
        console.log("Adios");
    }
    despedir();
    // 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
    function multiplicarPorDos(numero){
         return numero * 2;   
    }
      multiplicarPorDos(3);
    
// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
    function esMayorDeEdad(numero) {
        if (numero >= 18) { 
            return true;
        }else{
            return false;
        }
    }    
    esMayorDeEdad(20);
    // 2. Parámetros
// 2.1 Crea una función llamada multiplicar que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
    function multiplicar(a, b) {
        return a * b;
    } 
    const resultado = multiplicar(3, 5);   
    console.log(resultado);
   
    // 2.2 Escribe una función llamada saludarPersonalizado que reciba dos parámetros: nombre y apellido. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
    function saludarPersonalizado(nombre, apellido){
       return "Hola: " + nombre + apellido;

    }
      
       console.log (saludarPersonalizado("Clara", "Ferreira"));
       

       // 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
    function calcularPotencia(base, exponente) {
        // Utilizamos Math.pow para elevar la base al exponente
        return Math.pow(base, exponente);
    }
    
    console.log(calcularPotencia(2, 2));
    console.log(calcularPotencia(3, 3));
    console.log(calcularPotencia(5, 0));


    // 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
    function restar(a,b) {
        return a - b;
    } 
    const resultado = restar(8, 5); 
    console.log(resultado);
    
// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
    function dividir(a, b) {
        return a / b;
    } 
    const resultado = dividir(6, 2); 
    console.log(resultado);
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    // Tu código aquí
    const multiplicarDOS = function (a, b){
      return a * b;
    }
    const resultado = multiplicarDOS(6,9);
    console.log(resultado);

    // 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
    const saludar = function (nombre){
        return "Hola, " + nombre;
    }
       console.log(saludar("Clara"));

      // 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí

    const esPar = function (numero){
        if(numero % 2 === 0){
            console.log(true);
        }else{
            console.log(false)
        }
    }
        esPar(7);
        esPar(6);

        // 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    // Tu código aquí
const multiplicarFlecha = (a,b) =>{
    return a * b;
}
    const respuesta = multiplicarFlecha(4, 8);
    console.log(respuesta);

    // 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
    const saludarFlecha = (nombre) => {
        return "Hola " + nombre;
    }
    console.log(saludarFlecha("Clara"));

    // 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
     const calcularArea = radio =>{
    // Tu código aquí
       return Math.PI * Math.pow(radio, 2); 
}
    const areaCirculo = calcularArea(5); // Cambia 5 por el radio que desees
    console.log(areaCirculo);

    // 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    // Tu código aquí
     // Caso base: si n es 0, la suma es 0
    if (n === 0){
       return 0;
    }
     // Llamada recursiva: n + suma(n - 1)
    return n + suma(n - 1);
}
    console.log(suma(3)); 

    // 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
    function fibonacci(n) {
     // Tu código aquí
        if (n === 0) {
            return 0; // Caso base
        }
        if (n === 1) {
            return 1; // Caso base
        }
        return fibonacci(n - 1) + fibonacci(n - 2); // Llamada recursiva
    }
    console.log(fibonacci(6));
// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    // Tu código aquí
    if (n < 0) {
        return "Por favor, ingresa un número entero no negativo :("; 
    }
    if (n === 0) {
        return 1; // Caso base
    }
    return n * factorial(n - 1); // Llamada recursiva
}

    console.log(factorial(5));

 // 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    // Tu código aquí
    if (exponente < 0) {
        return "Por favor, ingresa un exponente no negativo ;(";
    }
    if (exponente === 0) {
        return 1; // Caso base
    }
    return base * potencia(base, exponente - 1); // Llamada recursiva
}
    console.log(potencia(2, 3)); 