module.exports = (req, res, next) => {
    if (req.headers.apikey == null || req.headers.apikey == "") {
        return res.status(401).json({
            Message: "Api Key Is Required"
        })
    }
    if(req.headers.apikey==process.env.API_KEY){
        next();
    }
     else{
        return res.status(401).json({
            Message: "Invalid Api Key",
            Description:"Please Use Valid Api Key To Make Api Request",
            IsAuthorized:false
        })
     }
        

}