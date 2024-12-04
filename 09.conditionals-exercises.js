// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let nombre = "Marcos"

if(nombre == "Marcos") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let usuario = "Marcosparra03"
let contrasena = "marcos21"

if(usuario == "Marcosparra03" && contrasena == "marcos21") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let number = -5
if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let edad = 20

if(edad >= 18) {
    console.log ("Puede votar")
}else {
    console.log(`te faltan ${18 - edad} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let category = edad >= 18 ? "adulto" : "menor"
console.log(category)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let month = 0
let actualmonth

switch(month) {
    case 0:
       actualmonth = "Enero"
       break
       case 1:
        actualmonth = "Febrero"
        break
        case 2:
       actualmonth = "Marzo"
       break
       case 3:
        actualmonth = "Abril"
        break
        case 4:
       actualmonth = "Mayo"
       break
       case 5:
        actualmonth = "Junio"
        break
        case 6:
       actualmonth = "Julio"
       break
       case 0:
}
    console.log(actualmonth)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

if (month === 2) {
    console.log("28 o 29 días")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 días")
} else {
    console.log("31 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let idioma = "en"

switch(idioma) {
    case "es" :
        console.log("Hola")
        break
        case "en" :
        console.log("Hello")
        break
    
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
let month1 = 0
let actualmonth2

switch(month) {
    case 0:
       actualmonth2 = "Enero"
       break
       case 1:
        actualmonth2 = "Febrero"
        break
        case 2:
       actualmonth2 = "Marzo"
       break
       case 3:
        actualmonth2 = "Abril"
        break
        case 4:
       actualmonth2 = "Mayo"
       break
       case 5:
        actualmonth2 = "Junio"
        break
        case 6:
       actualmonth2 = "Julio"
       break
       case 0:
}
    console.log(actualmonth)

// 10. Usa un switch para hacer de nuevo el ejercicio 7.