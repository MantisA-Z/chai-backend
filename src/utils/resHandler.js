class responseHandler{
    constructor(statusCode, data, message = "success"){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = statusCode
    }
}

module.exports = responseHandler;