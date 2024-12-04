// Un Map es una estructura de datos que te permite almacenar pares clave-valor. Las claves pueden ser de cualquier tipo, esto hace que los Maps sean muy flexibles y robustos.

// Map

// Declaracion
let myMap = new Map()

console.log(myMap)

//Inicializacion

myMap = new Map([
    ["name", "Marcos"],
    ["email", "Marcosparraa@gmail.com"],
    ["age", 27]
])
console.log(myMap)


// Metodos y propiedades

//set

myMap.set("alias", "xElzuldo")
myMap.set("name", "xElzuldo")
console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//keys, values y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size

console.log(myMap.size)

// delete

myMap.delete("email")
console.log(myMap)

//clear

myMap.clear()
console.log(myMap)

console.log((myMap.keys()))


