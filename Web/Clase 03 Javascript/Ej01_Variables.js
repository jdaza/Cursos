/********************
//las variables var viven todo el documento
var a =1;
typeof a //Esta funcion se encarga de evaluar el tipo de a
//primitivos de javascript son 
//number, object, string, boolean, etc.

//solo vive en el scope donde ha sido inicializado
let temporal = 1;

//const, se usa par definir constantes, que nunca cambian.
const PI = 3.1416;
PI = 3; //Retorna un error porque no se puede cambiar el valor de una constante.
**************************/
function scope(){
    let msg = "hola soy un mensaje";
    console.log(msg);
}
debugger;
scope();
console.log(msg); //retorna undefined


/**************************************************
 * Objetos literales
 *************************************************/

 var patricio = {nombre:"Patricio", edad:27};
 console.log(patricio.nombre);
 console.log(patricio.edad);

 var patricio2 = patricio; //SE hace una copia de la referencia.
patricio2.edad = 20; //Al tener la misma referncia que patricio es como poner patricio.edad = 20;

