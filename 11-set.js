// Un Set es una estructura de datos que te permite almacenar valores únicos. A diferencia de los arrays, un Set no admite duplicados, lo que lo hace ideal para casos donde necesites garantizar que todos los elementos de una colección sean distintos.

// set

//Declaracion

let mySet = new Set()

console.log(mySet)


//Inicializacion

mySet = new Set(["Marcos","Parra","xElzuldo",4, true, 27, "Marcosparraa@gmail.com"])

console.log(mySet)

//Metodos comunes


//add y delete

mySet.add("https:moure.dev")

console.log(mySet)

mySet.delete("https:moure.dev")
console.log(mySet)

console.log(mySet.delete("Marcos"))
console.log(mySet.delete(5))

console.log(mySet)

//has

console.log(mySet.has("Parra"))
console.log(mySet.has("Marcos"))

// size para verificar si un elemento existe en el Set.
console.log(mySet.size)

//convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)


// no admite duplicados

mySet.add("marcosparraa@gmail.com")
console.log(mySet)



