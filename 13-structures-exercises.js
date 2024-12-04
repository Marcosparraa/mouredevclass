// 1. Crea un array que almacene cinco animales.
let animales = ["Perro", "Gato", "Leon", "Tigre", "Aguila"]

console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final.
animales.unshift ("conejo")
animales.push ("Elefante")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición.
animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros.
let libros = new Set (["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])

// 5. Añade dos más. Uno de ellos repetido.
libros.add("Libro6")
libros.add("Libro1")
console.log(libros)

// 6. Elimina uno concreto a tu elección.
libros.delete("Libro1")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre.
let monthsMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosot"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],

])
console.log(monthsMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
if(monthsMap.has(5)) {
    console.log(monthsMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
monthsMap.set("summerMonths", ["Junio", "Julio", "Agosto"])
console.log(monthsMap.get("summerMonths"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
let fruitsArray = ["manzana", "plátano", "naranja", "manzana"]
console.log(fruitsArray)
let fruitsSet = new Set(fruitsArray)
console.log(fruitsSet)
let fruitsMap = new Map()
fruitsMap.set("fruits", fruitsSet)
console.log(fruitsMap)
console.log(fruitsMap.get("fruits"))