var lista = [1,3,7,12,63,2];
var personas = [
    {nombre:"jose",edad:12},
    {nombre:"Mario",edad:32},
    {nombre:"Irene",edad:22},
    {nombre:"Ivana",edad:25},
    {nombre:"Danny",edad:22}
];

/*
Misiones personas: 
1) buscar todas las personas que menores de edad
2) mostrar a todas las personas
3) sumar la edad de las personas en 2 

Misiones Numeros:
1) sacar el cuadrado de todos los numeros
2) filtrar los numeros mayores a 5
*/

/**
 * 1) buscar todas las personas que menores de edad
 */

var GetPersonasMenoresDeEdad = () =>{
    let menores = [];
    for (let persona of  personas) {
        if (persona.edad <= 18) {
            menores.push(persona);
        }
    }
    return menores;
}

var personasMenores2 = personas.filter((item) => item.edad <= 18);
var personasMenores1 = GetPersonasMenoresDeEdad(personas);

/**
 * 2) mostrar a todas las personas
 */
var MostrarTodasLasPersonas = () => {
    for(let persona of personas){
        MostrarPersona(persona);
    }
}

var MostrarPersona = (persona) => {
    document.write(`<h2> Nombre: ${persona.nombre}; Edad ${persona.edad}</h2>`);
}

/**
 * 3) Añadir 2 años a la edad de cada persona
 */
var Envejecer2Anios = (persona) => {
    persona.edad += 2;
    return persona;
}


var personasEnvejecidas = personas.map((persona) => Envejecer2Anios(persona));


/**
 * 1) sacar el cuadrado de todos los numeros
 */
var GetCuadradoDeNumeros = (listaNumeros) =>{
    var resultado = []
    for(let numero of listaNumeros){
        resultado.push(numero * numero);
    }
    return resultado;
}

var cuadrados = GetCuadradoDeNumeros(lista);

/**
 * 2) filtrar los numeros mayores a 5
 */
var MostrarNumerosMayoresA5 = (numeros) =>{
    for(let num of numeros){
        if(num > 5){
            document.write(num);
        }
    }
}


var pais = {
    nombre : "Bolivia",
    departamentos : [
        {nombre: "Cochabamba", poblacion: 50000},
        {nombre: "La Paz", poblacion: 40000},
        {nombre: "Santa Cruz", poblacion: 70000},
    ]
} 