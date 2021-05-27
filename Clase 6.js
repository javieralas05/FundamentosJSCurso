var javier = {
    nombre: 'Javier',
    edad: 27
}

var rodrigo = {
    nombre: 'Rodrigo',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
   };
   
   imprimirNombreEnMayusculas(javier)
   imprimirNombreEnMayusculas(rodrigo) 
   