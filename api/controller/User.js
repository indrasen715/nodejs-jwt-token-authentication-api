const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { errorCode, errorMessage } = require('../configurations/error-code')


var userRegistration = (req, res, next) => {
    User.find({ Email: req.body.Email, IsDeleted: false })
        .exec()
        .then(user => {

            if (user.length >= 1) {
                return res.status(409).json({
                    Message: errorMessage.EMAIL_EXIST,
                    Success: false
                })
            } else {

                bcrypt.hash(req.body.Password, 10, (err, hash) => {
                    if (err) {
                        return res.status(errorCode.INTRNAL_SERVER_ERROR).json({
                            error: err
                        })
                    } else {
                        req.body.Password = hash
                        const user = new User(req.body);

                        user.save()
                            .then(result => {
                                return res.status(errorCode.SUCCESS).json({
                                    IsPosted: true,
                                    Success: true
                                })
                            })
                            .catch(err => {
                                return res.status(errorCode.INTRNAL_SERVER_ERROR).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
}

var deleteUser = (req, res, next) => {
    if (req.query.user_id == null) {
        return res.status(errorCode.REQUIRED).json({
            Message: errorMessage.USER_ID_REQUIRED,
            Success: false
        })
    }
    User.find({ _id: req.query.user_id })
        .exec()
        .then(user => {
            if ((user.length < 1)) {
                return res.status(errorCode.NOT_EXIST).json({
                    Message: errorMessage.USER_NOT_EXIST,
                    Success: false
                })
            }
            else {
                User.updateOne({ _id: req.query.user_id }, { IsDeleted: true })
                    .exec()
                    .then(result => {
                        return res.status(200).json({
                            IsDeleted: true,
                            Success: true
                        })
                    })
                    .catch(err => {
                        return res.status(errorCode.INTRNAL_SERVER_ERROR).json({
                            error: err
                        })
                    })
            }
        }).catch(err => {
            return res.status(errorCode.INTRNAL_SERVER_ERROR).json({
                error: err
            })
        })


}

var userLogin = (req, res, next) => {
    User.find({ Email: req.body.Email, IsDeleted: false })
        .exec()
        .then(user => {
            if (user.length < 1) {

                return res.status(errorCode.UNAUTHORIZED).json({
                    Message: errorMessage.USER_NOT_EXIST,
                    IsExist: false
                })
            }
            bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
                console.log(result)
                if (err) {
                    return res.status(errorCode.UNAUTHORIZED).json({
                        Message: errorMessage.AUTHENTICATION_FAILED,
                        IsAuthenticated: false
                    })
                }
                if (result) {
                    //create jwt token
                    const accessToken = jwt.sign({ Email: user[0].Email, UserId: user[0]._id }, process.env.JWT_KEY, { expiresIn: "1h" })
                    return res.status(errorCode.SUCCESS).json({
                        access_token: accessToken,
                        IsAuthenticated: true
                    })
                }
                else {
                    return res.status(errorCode.UNAUTHORIZED).json({
                        Message: errorMessage.AUTHENTICATION_FAILED,
                        IsAuthenticated: false
                    })
                }

            })

        })
}



var getUserByToken = (req, res, next) => {

    User.find({ _id: req.userData.UserId, IsDeleted: false }, { Password: 0, __v: 0 })
        .exec()
        .then(result => {

            if (result < 1) {
                return res.status(errorCode.NOT_EXIST).json({
                    Message: errorMessage.USER_NOT_EXIST,
                    IsExist: false
                })
            }
            return res.status(errorCode.SUCCESS).json({
                Profile: result,
                Success: true
            })
        }).catch(err => {
            return res.status(errorCode.INTRNAL_SERVER_ERROR).json({
                error: err
            })
        })
}
module.exports = { userRegistration, deleteUser, userLogin, getUserByToken }