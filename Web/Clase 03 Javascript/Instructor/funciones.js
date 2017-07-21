//funciones normales
function suma(num1, num2){
    return num1+num2;
}

//funciones anonimas
var resta = function(num1, num2){
    return num1-num2;
}

//arrow functions
var mult = (num1,num2) => {
    return num1*num2;
}

document.write("<h1>" +suma(1,2) +'</h1>');
document.write(`<h1>${resta(2,2)}</h1>`);
document.write(`
    <div>
        <h1> ${mult(2,4)} </h1>
    <div>
`);