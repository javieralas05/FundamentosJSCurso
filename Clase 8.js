var susan = {
    nombre: 'Susan',
    edad: 28
}

var mateo = {
    nombre: 'mateo',
    edad: 4
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
   }
   
 //  imprimirNombreEnMayusculas(javier)
 //  imprimirNombreEnMayusculas(rodrigo) 
   

function imprimirNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
   }

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

cumpleanos(susan)
cumpleanos(mateo)
