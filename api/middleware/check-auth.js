const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.headers.authorization == null || req.headers.authorization == "") {
        return res.status(401).json({
            Message: "Access Token Is Required Parameter"
        })
    }
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            Message: "Access Token is Invalid",
            Description: "Your Access Token Is Invalid Please Use Valid Access Token",
            IsAuthenticated: false
        })
    }
}