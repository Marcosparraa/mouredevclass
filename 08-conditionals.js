// if, else if, else

//if (si) // else (sino)

let age = 27

if (age == 27) {
    console.log("La edad es 27")
} else {
    console.log("La edad no es 37")
}

// else if (sino, si)

if (age == 27) {
    console.log("La edad es 27")
}  else if(age < 18) {
    console.log("Es menor de edad")
}else {
    console.log("La edad no es 37 y ni es menor de edad")
}
 

//Operador ternario

const message = age = 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch
let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName ="Numero de dia incorrecto"
}

console.log(dayName)