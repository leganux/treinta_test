require('./db')
let diagnosisModel = require('./models/diagnosis.model')
let vitalsModel = require('./models/vitals.model')
let doctorModel = require('./models/doctor.model')
let metaModel = require('./models/meta.model')
let userModel = require('./models/user.model')
let data_total = require('./rawDataRequests')


let run = async function () {
    try {
        console.log('Inicia carga de datos')


        for (let item of data_total) {

            let diagnosis = await diagnosisModel.create(item.diagnosis)
            let vitals = await vitalsModel.create(item.vitals)
            let doctor = await doctorModel.create(item.doctor)
            let meta = await metaModel.create(item.meta)

            item.diagnosis = diagnosis._id
            item.vitals = vitals._id
            item.doctor = doctor._id
            item.meta = meta._id

            let user = await userModel.create(item)
            console.log('creado con exito ', user)


        }
        console.log('Termina carga de datos')

    } catch (e) {
        console.error(e)
    }
}

setTimeout(function () {
    run()
}, 3000)
