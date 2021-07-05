const registarValidator = require('../validator/registerValidator')
//for Login controller
module.exports = {
    login(req, res) {
        let name = req.body.name
        let email = req.body.email
        res.json({
            massage: `welcome my fraind ${name} and ${email}`
        })
    },
    //for Registration controller or methode
    register(req, res) {
        //read client data
        let { name, password, email, confirmPassword } = req.body
        //validate have two object
        let validate = registarValidator({ name, email, password, confirmPassword })
        if (!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            res.status(200).json({
                massage: 'Everything is oky'
            })
        }
        //validation chack usre data
        //new user object
        //save to database
        //response back with new data
    }
}
