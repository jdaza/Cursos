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
let isInProgress: boolean = false;
let studentsNumber: number = 20;
let firstName: string = "Luis";

console.log('isInprogress', isInProgress);
console.log('studentsNumber', studentsNumber);
console.log('firstName', firstName);

///Prueba de strings
// Template Strings
let sentence: string = "Hello, my name is " + firstName;
//El siguiente es usando backticks
let betterSentence: string = `Hello, 
    my name is ${ firstName }.`

let saludo: string = `Mi nombre es ${firstName}`;

console.log(sentence);
console.log(betterSentence);
console.log(saludo);

// Array
let arrayA: number[] = [1, 2, 3];
let arrayB: Array<number> = [1, 6572, 3];

console.log(arrayA);
console.log(arrayB);

//Tuplas
let tupleX: [string, number];
tupleX = ["Hello", 10];
console.log('tupleX', tupleX);

var tupleY: [boolean, string] = [true, 'test'];
console.log('tupleY', tupleY);


//Enum
enum Color {Red, Green, Blue};

//muestra el color con su valor numerico.
let colorA: Color = Color.Blue;
console.log('colorA', colorA);

//Para mostrar el color como string.
let colorB: string = Color[0];
console.log('colorB', colorB);


// Any
//Any permite que se le asigne cualquier valor a una variable.
//Se uede usar cuando estamos escuchando a un servicio, porque podria devolvernos diferentes tupos de datos.
let notSure: any = 5;
notSure = "maybe I'm a string";
console.log(notSure);

notSure = false;
console.log(notSure);

// Void
function nothingInteresting(): void {
    let x = 'hello world';
    console.log(x);
}

nothingInteresting();
let result = nothingInteresting();
console.log('result', result);//Muestra Undefined cuando el tipo del metodo nothinInteresting es void.


//Variable declarations 
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { 
//         console.log(i); 
//     }, 100 * i);
// }
//En el for se ejecuta el var i y no ejecuta nada dentro de su codigo.
//Una forma de arreglar es por IIFE


//Otra forma de arreglarlo es usando let
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 100 * i);
}


//INTERFACES
interface Figura{
    color: string;
    dibujar(): void;
}

interface Linea {
    grosor: number;
}


interface  Cuadrado extends Figura, Linea{
    lado: number;
}

let miCuadrado: Cuadrado = {
    color: 'rojo',
    grosor: 1,
    lado: 100,


    //Implementacion al vuelo de la función de la interface
    dibujar: function() {
        console.log('dibujando dibujando');
    }
};

console.log('miCuadrado', miCuadrado);
miCuadrado.dibujar();