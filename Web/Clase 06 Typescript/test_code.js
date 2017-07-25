//node test-code.js No podra ejecutar la aplicaion porque no ejecuta typescript.
//tsc test_code.ts //Este comando servirá para ejecutar la aplicación.
// var x = 123;
// x.trim (); //Ya se marca como error porque esta compilando typescript.
//tsc es para compilar
//node es para ejecutar el codigo
var x = 'hello Angular world';
console.log(x.trim());
//Para levantar un servicio observer que vea todo el tiempo los cambios hechos en typescript ejecutar
//Esto debe ser ejecutar en una linea de comandos independiente.
//tsc -watch test_code.ts 
//Agregando Basic Types.
//Boolean
var isInProgress = false;
var studentsNumber = 20;
var firstName = "Luis";
console.log('isInprogress', isInProgress);
console.log('studentsNumber', studentsNumber);
console.log('firstName', firstName);
///Prueba de strings
// Template Strings
var sentence = "Hello, my name is " + firstName;
//El siguiente es usando backticks
var betterSentence = "Hello, \n    my name is " + firstName + ".";
var saludo = "Mi nombre es " + firstName;
console.log(sentence);
console.log(betterSentence);
console.log(saludo);
// Array
var arrayA = [1, 2, 3];
var arrayB = [1, 6572, 3];
console.log(arrayA);
console.log(arrayB);
//Tuplas
var tupleX;
tupleX = ["Hello", 10];
console.log('tupleX', tupleX);
var tupleY = [true, 'test'];
console.log('tupleY', tupleY);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//muestra el color con su valor numerico.
var colorA = Color.Blue;
console.log('colorA', colorA);
//Para mostrar el color como string.
var colorB = Color[0];
console.log('colorB', colorB);
// Any
//Any permite que se le asigne cualquier valor a una variable.
//Se uede usar cuando estamos escuchando a un servicio, porque podria devolvernos diferentes tupos de datos.
var notSure = 5;
notSure = "maybe I'm a string";
console.log(notSure);
notSure = false;
console.log(notSure);
// Void
function nothingInteresting() {
    var x = 'hello world';
    console.log(x);
}
nothingInteresting();
var result = nothingInteresting();
console.log('result', result); //Muestra Undefined cuando el tipo del metodo nothinInteresting es void.
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
//Variable declarations 
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { 
//         console.log(i); 
//     }, 100 * i);
// }
//En el for se ejecuta el var i y no ejecuta nada dentro de su codigo.
//Una forma de arreglar es por IIFE
//Otra forma de arreglarlo es usando let
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var miCuadrado = {
    color: 'rojo',
    grosor: 1,
    lado: 100,
    //Implementacion al vuelo de la función de la interface
    dibujar: function () {
        console.log('dibujando dibujando');
    }
};
console.log('miCuadrado', miCuadrado);
miCuadrado.dibujar();
