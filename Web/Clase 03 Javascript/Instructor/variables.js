const PI = 3.1416;
function scope(){
    let msg = "hola soy un mensaje";
    console.log(msg);
}

PI = 3; // los const no se pueden modificar 
scope();
console.log(msg); // retorna undefined