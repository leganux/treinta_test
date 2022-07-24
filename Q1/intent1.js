let getMaximumEvenSum = function (val) {
// inicializamos en 0 la suma
    console.info('=== Inicia el intento 1 para el arreglo ===', val)
    let sum = 0;
    //extraemos los valores positivos del arreglo
    let sums = val.filter((item) => {
        if (item > -1) {
            return item
        }
    })

    console.log('Intento 1 Separamos  valores positivos del arreglo', sums)
    sums = sums.sort((a, b) => {
        return a - b;
    })

    //extraemos los valores negativos del arreglo
    let substracts = val.filter((item) => {
        if (item < 0) {
            return item
        }
    })
    console.log('Intento 1 Separamos  valores negativos del arreglo', substracts)

    // sumamos los valores positivos
    for (let item of sums) {
        sum = sum + item
    }
    console.log('Intento 1 Sumamos valores positivos', sum)

    // verificamos si es par
    if (sum % 2 == 0) {
        console.log('Intento 1 Verificamos si es par y lo retornamos', sum)
        return sum
    }

    // ordenamos los menores de mayor a menos
    substracts = substracts.sort((a, b) => {
        return a - b;
    })
    console.log('Intento 1 Ordenamos los negativos de menor a mayor', substracts)

    //restamos cada negativo  y en cada 1 comparamos su cada valor de salida hasta que encuentre un par que devolver
    for (let item of substracts) {
        console.log('Intento 1 restamos a la suma ' + sum + ' ' + item)
        sum = sum + item
        console.log('Intento 1 Comparamos si es par ', sum)
        if (sum % 2) {
            console.log('Intento 1 Si es par, Retornamos ', sum)
            break
        }
    }

    return sum
}

module.exports = getMaximumEvenSum
