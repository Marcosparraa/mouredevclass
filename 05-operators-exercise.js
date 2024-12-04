// 1. Crea una variable para cada operación aritmética.
    let a = 10
    let b = 15
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
    console.log(a ** b)


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
    let c = 6
    c ++
    console.log(c)

    let d = 6
    d --
    console.log(d)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.
    let numero1 = 15
    let numero2 = 20

    console.log(numero1 < numero2)
    console.log(numero2 > numero1)
    console.log(numero1 == "15")
    console.log(numero1 != numero2)
    console.log(numero1 !== numero2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.
console.log(numero1 > numero2)
console.log(numero2 < numero1)
console.log(numero1 == "14")
console.log(numero1 == numero2)
console.log(numero1 == numero2)

// 5. Utiliza el operador lógico and.
console.log(numero1 < numero2 && numero2 > numero1)

// 6. Utiliza el operador lógico or.
console.log(numero2 < numero1 || numero2 > numero1)

// 7. Combina ambos operadores lógicos.
console.log(numero1 != numero2 && numero2 > numero1 || numero1 == "1")

// 8. Añade alguna negación.
console.log(numero1 !== numero2)

// 9. Utiliza el operador ternario.
let age = 18
let canVote = (age >= 18) ? "Puede votar" : "No puede votar"
console.log(canVote)

// 10. Combina operadores aritméticos, de comparáción y lógicas.
let result = (5 + 3) * 2 > 10 && (4 * 2) === 8;
console.log(result)