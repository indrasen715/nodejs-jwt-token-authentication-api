
//error Code
const errorCode = {
    INTRNAL_SERVER_ERROR:500,
    SUCCESS:200,
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    ERROR:900,
    REQUIRED:901,
    EXIST:902,
    NOT_EXIST:903,
    INVALID_ACCESS_TOKEN:904
}

//Error Message  Constant
const errorMessage={
    EMAIL_EXIST:"Email Allready exist in database",
    USER_NOT_EXIST:"User not Exist In Database",
    AUTHENTICATION_FAILED:"Authentication Failed",
    USER_ID_REQUIRED:"User id is required"
}
module.exports = {errorCode,errorMessage};