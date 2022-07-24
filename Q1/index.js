let I1 = require('./intent1')
let I2 = require('./intent2')

/**
 *  A continuación coloco los 3 primeros casos de prueba de números de la plataforma, sin embargo, considero que el ejercicio está mal  elaborado ya que para los números dados es imposible obtener esos resultados.
 *  Los screenshots del mismo se encuentran en  la carpeta de screenshots, para todos los casos siguientes la suma es suficiente
 * */

let arr_0 = [6, 6, 3, 4, -1, 9, 17] //expected 38  !== Valor real calculado a mano =  44
let arr_1 = [5, -1, -2, -3, 8, 7] // expected 14 !== Valor real calculado a mano =  20
let arr_2 = [7, 2, 3, 6, -5, 10, 1, 1] // expected 22 !== Valor real calculado a mano =  30

console.log(" == Pruebas== ")

console.log(" == Array 0 == ", arr_0)
let i1_a0 = I1(arr_0)
let i2_a0 = I2(arr_0)
console.log("El resultado del array 0 en el intento 1 es de :", i1_a0)
console.log("El resultado del array 0 en el intento 2 es de :", i2_a0)

console.log(" == ***** == ")

console.log(" == Array 1 == ", arr_1)

let i1_a1 = I1(arr_1)
let i2_a1 = I2(arr_1)

console.log("El resultado del array 1 en el intento 1 es de :", i1_a1)
console.log("El resultado del array 1 en el intento 2 es de :", i2_a1)

console.log(" == ***** == ")

console.log(" == Array 2 == ", arr_2)

let i1_a2 = I1(arr_2)
let i2_a2 = I2(arr_2)

console.log("El resultado del array 2 en el intento 1 es de :", i1_a2)
console.log("El resultado del array 2 en el intento 2 es de :", i1_a2)

console.log("***************************************************")
console.log("**************   Resumen  ********************")
console.log(" El arreglo 0 :", arr_0, " Resultado 1: " + i1_a0 + " Resultado 2 : " + i2_a0, " Supuesto valor HackerRank Erroneo (38)")
console.log(" El arreglo 1 :", arr_1, " Resultado 1: " + i1_a1 + " Resultado 2 : " + i2_a1, " Supuesto valor HackerRank Erroneo (14)")
console.log(" El arreglo 2 :", arr_2, " Resultado 1: " + i1_a2 + " Resultado 2 : " + i2_a2, " Supuesto valor HackerRank Erroneo (22)")
console.log("***************************************************")

console.log(" == Fin de ejecución == ")





