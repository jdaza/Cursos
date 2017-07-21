var lista = [1,3,7,12,63,2];
var personas = [
    {nombre:"jose",edad:12},
    {nombre:"Mario",edad:32},
    {nombre:"Irene",edad:22},
    {nombre:"Ivana",edad:25},
    {nombre:"Danny",edad:22}
];

var mostrarPersonas = (personas)=>{
    for(let item of personas){
        document.write(`
        nombre: ${item.nombre}
        edad: ${item.edad} 
        <br>`);
    }
}

var esMenor = (persona)=>{
    return persona.edad < 18;
}
//1 personas
var personasMenores1 = (personas)=>{
    let menores = []
    for(let item of personas){
        if(esMenor(item)){
            menores.push(item);
        }
    }
    return menores;
}

var personasmenores = personas.filter(
    (item)=> esMenor(item)
);
mostrarPersonas(personasmenores);

var menores = personasMenores1(personas);
mostrarPersonas(menores);

var cumpliranios = (personas)=>{
    for(let persona of personas){
        persona.edad+=2;
    }
}

var cumplir2anios = (persona) => {
    persona.edad+=2;
    return persona;
}
var cumplidos = personas.map(
     (item) => cumplir2anios(item)
);

mostrarPersonas(cumplidos);
cumpliranios(personas);
mostrarPersonas(personas);

/*
Misiones personas: 
1) buscar todas las personas que menores de edad
2) mostrar a todas las personas
3) aniadir 2 anios a la edad de cada persona

Misiones Numeros:
1) sacar el cuadrado de todos los numeros
2) filtrar los numeros mayores a 5
*/

var pais = {
    nombre : "Bolivia",
    departamentos : [
        {nombre: "Cochabamba", poblacion: 50000},
        {nombre: "La Paz", poblacion: 40000},
        {nombre: "Santa Cruz", poblacion: 70000},
    ]
}
