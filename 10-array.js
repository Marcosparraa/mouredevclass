//Array

//Declaracióm

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion
myArray = [3] 
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = ["Marcos","Parra","xElzuldo",4, true]
myArray2 = new Array("Marcos","Parra","xElzuldo",4, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Marcos"
myArray2[1] = "Parra"
myArray2[2] = "xElzuldo"
console.log(myArray2)

myArray = []
myArray [0] = "Marcos"
myArray [1] = "Parra"
myArray [2] = "xElzuldo"
console.log(myArray)

//Metodos comunes

myArray = []

// push y pop

myArray.push("Marcos") // agrega de ultimo
myArray.push("Parra")
myArray.push("xElzuldo")
myArray.push("27")
console.log(myArray)

myArray.pop() // Elimina el ultimo y lo devuelve
myArray.pop()
console.log(myArray)


// shift unshift

myArray.shift()
console.log(myArray)

myArray.unshift("Marcos", "xElzuldo") // Agrega al principio del array
console.log(myArray)

// lenght

console.log(myArray.length)

//clear

// myArray = []
myArray.length = 0
console.log(myArray)

// slice
myArray = ["Marcos","Parra","xElzuldo",4, true, 27]
let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1,5)
console.log(myArray)

myArray = ["Marcos","Parra","xElzuldo",4, true, 27]

myArray.splice(1,2,"Nueva")
console.log(myArray)