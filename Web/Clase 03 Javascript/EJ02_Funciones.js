/**************************************************
 * Funciones normales
 *************************************************/
function suma(num1, num2){
    return num1 + num2;
}


 /**************************************************
 * Funciones anónimas
 *************************************************/
var resta = function(num1, num2){
    return num1 - num2;
}

 /**************************************************
 * Funciones flecha/ Arrow functions
 *************************************************/
var mult = (num1, num2) => {
    return num1 * num2;
}
//debugger;
document.write("<h1>" + suma(1,2) + "</h1>");
document.write(`
    <div>
        <h1>${resta(2,2)}</h1>
    </div>`);
document.write(`<h2>${mult(2,4)}</h2>`);