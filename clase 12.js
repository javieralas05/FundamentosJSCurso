var rodrigo = {
    nombre: 'rodrigo',
    apellido: 'alas',
    edad: 19,
    desarollador: true,
    cocinero: false,
    surfer: true,
    administrador: false
}

var mateo = {
    nombre: 'mateo',
    apellido: 'alas',
    edad: 3
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

const MAYORIA_DE_EDAD = 18

//    const esMayorDeEdad = function (persona){
//    return persona.edad >= MAYORIA_DE_EDAD
//    }

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function permitirAcceso(persona) {
    if (!EsMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })


imprimirSiEsMayorDeEdad(rodrigo)