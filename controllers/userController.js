const bcrypt = require('bcrypt')
const User = require('../model/User')
const registarValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')
//for Login controller
module.exports = {
    login(req, res) {
        //Extract data from request
        let { email, password } = req.body
        //validate data
        //check for user availability
        //Compare password
        //Generate token for password
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
            //check dublicate data

            User.findOne({ email })
                .then(user => {
                    //Chack for user is stay or null..
                    // console.log(user)
                    // res.json({ user })
                    //Chack the user is  exist...
                    if (user) {
                        return res.status(400).json({
                            massage: 'Email Already Exist'
                        })
                    }
                    // if the user not exist than we create the user...using the bcrypt for hashing the password

                    bcrypt.hash(password, 11, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                massage: 'Server error occurred'
                            })

                        }
                        let user = new User({
                            name,
                            email,
                            password: hash
                        })
                        //for save the registar data for save methode
                        user.save()
                            .then(user => {
                                res.status(201).json({
                                    massage: 'User created succussfully',
                                    user
                                })
                            })
                            .catch(error => {
                                console.log(error)
                                res.status(500).json({
                                    massage: 'server error is occured'
                                })
                            })
                    })

                })
                .catch(error => {
                    console.log(error)
                    res.stutus(500).json({
                        massage: 'server error is occured'
                    })
                })

        }

        //new user object
        //save to database
        //response back with new data
    }
}
