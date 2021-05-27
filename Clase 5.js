var nombre = 'Rodrigo'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)

    imprimirNombreEnMayusculas()
}