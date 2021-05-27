var javier = {
    nombre: 'Ravier',
    edad: 27
}

var rodrigo = {
    nombre: 'Rodrigo',
    edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
   }
   
   imprimirNombreEnMayusculas(javier)
   imprimirNombreEnMayusculas(rodrigo) 
   