// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();
//     $('.parallax').parallax();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

var incrementar = (numero) => {
  return ++numero;
}

var decrementar = (numero) => {
  return numero-1;
}

var aplicarFuncion = (numero, funcion) => {
  return funcion(numero);
}

var numero = 5;
var incrementado = aplicarFuncion(numero, incrementar);
var decrementado = aplicarFuncion(numero, decrementar);
console.log(`${incrementado} -- ${decrementado} -- ${numero}`);

/**
 * JQuery
 */
//Obtiene un elemento por el id
document.getElementById('titulo');  

//Accede al dom y obtiene el elemtno con id titulo.
$('#titulo')

//InnerHtml

//OuterHtml