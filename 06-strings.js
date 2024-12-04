//Strings

//Concatenación

let myName = "Marcos"
let greeting = "Hola, " + myName+ "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Marcos"))
console.log(greeting.includes("parra"))// comparar
console.log(greeting.slice(0,10))
console.log(greeting.replace("Marcos", "Parra"))


// Template literals

let message = `Hola, este es mi
curso de javaScript`
console.log(message)

let email = "marcosparraa@gmail.com"

console.log(`Hola, ${myName}!, Tu email es ${email}`)