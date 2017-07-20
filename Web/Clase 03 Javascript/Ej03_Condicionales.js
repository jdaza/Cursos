var esPar = (numero) => {
    return numero%2==0;
}

document.write(esPar(2));
document.write(esPar(3));

var imprimirEsPar = (numero) => {
    debugger;
    let resultado = numero % 2 == 0;
    if(resultado)
        document.write(`<h1> ${resultado} </h1>`);
    else 
        document.write(`<h2> ${resultado} </h2>`);
}

var imprimirMultiplo = (numero) =>{
    // if(numero % 2 == 0)
    //     document.write("<h1> Es multiplo de 2 </h1>");
    // else if(numero % 3 == 0)
    //     document.write("<h1> Es multiplo de 3 </h1>");
    // else if(numero % 3 == 0)
    //     document.write("<h1> Es multiplo de 5 </h1>");
    let contador = 1;
    let divisorEncontrado = false;
    while(contador <= (numero/2)){
        contador= GetSiguientePrimo(contador);
        if(numero % contador == 0){
            document.write(`<h1> Es multiplo de ${contador} </h1>`);
            divisorEncontrado = true;
        }
    }
    if(!divisorEncontrado){
        document.write("No tiene divisores enteros.")
    }
}

var GetSiguientePrimo = (numero) => {
    numero = numero +1;
    while(!EsPrimo(numero)){
        numero = numero +1;
    }
    return numero;
}

var EsPrimo = (numero) => {
    let divisor = 2;
    while(divisor <= (numero / 2)){
        if(numero % divisor == 0)
            return false;
        divisor = divisor +1;
    }
    return true;
}

debugger;
document.write(imprimirEsPar(2));
document.write(imprimirEsPar(3));

document.write(imprimirMultiplo(2));
document.write(imprimirMultiplo(12));
document.write(imprimirMultiplo(45));
document.write(imprimirMultiplo(330));
