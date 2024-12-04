// Operadores

// Operadores Aristmeticos
let a = 5
let b = 10
console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division



console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 6) // igualdad por valor
console.log(a == "6") // igualdad por valor
console.log(a == a)
console.log(a === a) // igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== 6)
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == "")

// Truty values
// todos los numeros positivos negativos menos el cero
// todas las cadenas de texto menos las vacias
// boolean true

// Falsy values
//0
//0n
//null
// undefined
// NaN
// Boolean false
// cadenas de texto vacias


// Operadores lógicos

// and (&&)
console.log (5 > 10 && 15 > 20)
console.log (5 < 10 && 15 < 20)
console.log (5 < 10 && 15 > 20)

// or (||)
console.log (5 > 10 || 15 > 20)
console.log (5 < 10 || 15 < 20)
console.log (5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log (!(5 > 10 && 15 > 20))
console.log (!(5 > 10 || 15 > 20))

// Operadores ternarios
const isRaining = false

isRaining ?console.log("Esta lloviendo") : console.log("no esta lloviendo")








