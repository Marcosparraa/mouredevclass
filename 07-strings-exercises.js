// 1. Concatena dos cadenas de texto.
let myName = "Marcos"
let middleName = "Aurelio"

console.log (`Mi nombre es ${myName} y mi segundo nombre es ${middleName}`)

// 2. Muestra la longitud de una cadena de texto.
let message = "esta es una cadena de texto para reprenstar la longitud"
console.log(message.length)

// 3. Muestra el primer y último carácter de un string.
console.log(message[0])
console.log(message[54])

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(message.toUpperCase())
console.log(message.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.

let multipleLines = `esta es una
cadena de
texto
en varias
lineas`
console.log(multipleLines)

// 6. Interpola el valor de una variable en un string.
let language = "JavaScript"
let interpolatedString = `Estoy aprendiendo ${language}`
console.log(interpolatedString)
// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let stringWithSpaces = "Mi nombre es Brais Moure"
let stringWithHyphens = stringWithSpaces.replace(/ /g, "-")
console.log(stringWithHyphens)
// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(myName.includes("M"))

// 9. Comprueba si dos strings son iguales.
let greet = "hola"
let greet1 = "hola"
console.log(greet === greet1)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(greet.length === greet1.length)