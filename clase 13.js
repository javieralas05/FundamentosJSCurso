var rodrigo = {
    nombre: 'rodrigo',
    apellido: 'alas',
    edad: 28,
    peso: 73
}

console.log(`Al inicio del año ${rodrigo.nombre} pesaba ${rodrigo.peso} kg.`)

const INCREMENTO_PESO = 0.20

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= 365; i++){
    var random = Math.random()
        
    if (random < 0.25){
        aumentarDePeso(rodrigo)
    } else if (random < 0.5){
        adelgazar(rodrigo)
    }
}


console.log(`Al final del año ${rodrigo.nombre} pesaba ${rodrigo.peso.toFixed(2)} kg.`)

