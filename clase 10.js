var rodrigo = {
    nombre: 'rodrigo',
    apellido: 'alas',
    edad: 19,
    desarollador: true,
    cocinero: false,
    surfer: true,
    administrador: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.desarollador){
    console.log(`Si es desarollador`)
    } else {
        console.log('No es desarollador')
    }

    if (persona.cocinero){
        console.log('cocinero')
    }

    if (persona.surfer){
        console.log('surfer')
    }

    if (persona.administrador){
        console.log('administrador')
    }
}



function imprimirSiEsMayorDeEdad({nombre, edad}) {
        if (edad > 17){
        console.log(`${nombre} es mayor de edad, tiene ${edad} años`)
    } else {
        console.log(`${nombre} es menor de edad, tiene ${edad} años`)
    }
}


imprimirSiEsMayorDeEdad(rodrigo)