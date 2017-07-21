var incrementar = (numero) =>{
  return ++numero;
}

var decrementar = (numero) => {
  return numero-1;
}

var aplicarFuncion = (numero, funcion) =>{
  return funcion(numero);
}

var numero = 5;
var incrementado = aplicarFuncion(numero, incrementar);
var decrementado = aplicarFuncion(numero, decrementar);
console.log(`${incrementado} -- ${decrementado}`);