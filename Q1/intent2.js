// función que nos ayudara a calular las combinaciones totales sin repetición
function combination(array) {
    //Declaramos el arreglo donde se van a guardar los arreglos de las combinaciones
    let combinations = [];
    //Declaramos el arreglo de ayuda que nos permitirá agregar los elementos internos
    let inner = [];
    let length = array.length
    //Calculamos el valor máximo  de combinación que puede albergar 2^n -1
    let maxComb = Math.pow(2, length);
    console.log('No comb: ', maxComb - 1)

    //recorremos el desde 0 hasta el valor máximo de combinación
    for (let i = 0; i < maxComb; i++) {
        //limpiamos el elemento interno
        inner = [];

        //recorremos el arreglo de los elementos 1 a 1
        for (let j = 0; j < length; j++) {
            //Determinamos bit a bit (bitwise) la coincidencia de la posición de máximas combinaciones, con la combinación para el elemento actual
            console.log("Valor de i ", i, ' valor de J ', j, "comparado con combinación de elemento actual ", Math.pow(2, j))
            console.log("bitwise comparación i", (i).toString(2), ' & ', (Math.pow(2, j)).toString(2) + '  =  ' + (i & Math.pow(2, j)))
            if ((i & Math.pow(2, j))) {
                //si cumple lo agregamos al array interno
                inner.push(array[j]);
            }
        }
        //si el array interno tiene por lo menos un elemento se agrega al array prncipal
        if (inner.length) {
            combinations.push(inner);
        }
    }
    return combinations;
}


let getMaximumEvenSum = function (val) {
    // Comenzamos la ejecion del intento 2 para el array
    console.log('Intento 2 el arreglo', val)

    //calculamos las combinaciones diferentes  de los elementos del arreglo
    let combinations = combination(val)
    console.log("Intento 2 obtenemos las combinaciones del arreglo ", combinations)

    // calculamos las sumas de los elementos internos
    let sumArray = []

    for (let item of combinations) {
        let sum = 0
        for (let number of item) {
            sum = sum + number
        }
        console.log('Intento 2 La suma ', item.join(' + '), ' = ', sum)
        sumArray.push(sum)
    }

    console.log('Intento 2 Obtenemos el array de sumas ', sumArray)

    // filtramos solo los elementos que sean pares en nuestro array
    sumArray = sumArray.filter((item) => {
        return item % 2 === 0
    })

    console.log('Intento 2 Obtenemos el array de sumas que sean pares ', sumArray)

    // Regresamos el valor mayor
    return Math.max(...sumArray)
}


module.exports = getMaximumEvenSum
