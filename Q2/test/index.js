let axios = require('axios')

async function pulseRate(diagnosisName, doctorId) {

    try {
        // se declara la  url a consumir
        let uri = 'http://localhost:3000/api/medical_records'
        // se realiza una primera peticion para conocer la cantidad de elementos y elementos por página
        let response = await axios.get(uri);
        let users = await response.data

        // guardamos el total de registros y de  paginas para conocer la cantidad de peticiones que haremos
        let total_pages = users.total_pages
        let total = users.total
        // preparamos el array donde se almacenaran todos los registros
        let arr = []

        for (let i = 0; i <= total_pages; i++) {
            console.log('trae datos de pagina ', i)
            let response_ = await axios(uri + '?page=' + (i + 1));
            let users_ = await response_.data
            //concatenamos los elementos
            arr = [...arr, ...users_.data]
        }

        //verificamos que tenga la cantidad correcta de elementos
        console.log(arr.length == total)
        if (!arr.length == total) {
            throw new Error('Hubo un error al momento de traer los datos')
        }
        //ejecutamos la función filter para traer solo los elementos que nos interesan
        arr = arr.filter((item) => {
            if (item?.diagnosis?.name == diagnosisName && item?.doctor?.id == doctorId) {
                return item
            }
        })
        console.log('ocurrencias', arr)
        // dejamos solo los numeros
        arr = arr.map(item => {
            return item?.vitals?.pulse
        })
        console.log('solo numeros', arr)
        // sumamos todos los elementos

        let sum = 0

        for (let item of arr) {
            sum = Number(sum) + Number(item)
        }

        console.log('la suma', sum)

        //calculamos el promedio y lo regresamos truncado
        return (sum / arr.length).toFixed(0)

    } catch (e) {
        console.error('ha ocurrido un error ', e)
    }


}

let main = async function () {
    let t1 = await pulseRate('Pulmonary embolism', 2)
    let t2 = await pulseRate('Common Cold', 2)
    console.log('Resultado para  Pulmonary embolism con doctor id 2 ', t1, ' esperado  129')
    console.log('Resultado para  Common Cold con doctor id 2', t2, ' esperado  101')

}


main()
