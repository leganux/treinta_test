const userModel = require("../models/user.model");
const vitalsModel = require("../models/vitals.model");
const diagnosisModel = require("../models/diagnosis.model");
const doctorModel = require("../models/doctor.model");
const metaModel = require("../models/meta.model");

const functions = {}

functions.get = async function (req, res) {

    try {

        let {page, per_page} = req.query

        if (!page || Number(page) <= 0) {
            page = 1
        }
        if (!per_page || Number(per_page) > 10 || Number(per_page) < 1) {
            per_page = 10
        }
        page = Number(page)
        per_page = Number(per_page)
        let skip = per_page * (page - 1)

        let count = await userModel.count()

        let users = await userModel.find()
            .populate([
                {
                    path: 'doctor',
                    model: doctorModel,
                },
                {
                    path: 'diagnosis',
                    model: diagnosisModel,
                },
                {
                    path: 'vitals',
                    model: vitalsModel,
                },
                {
                    path: 'meta',
                    model: metaModel,
                },
            ])
            .sort({timestamp: 1})
            .limit(10).skip(skip).lean()

        res.status(200).json({
            page,
            per_page: users.length,
            total: count,
            total_pages: Math.ceil(count / per_page),
            data: users
        })


    } catch (error) {
        res.status(500).json({
            message: 'internal server error',
            status: 500,
            error: error
        })
    }

}

module.exports = functions
