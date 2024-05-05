class errorHandler extends Error{
    constructor(statusCode, message = 'something went wrong', errors = [], stack = ""){
        this.success = false;
        this.statusCode = statusCode
        super(message)
        this.errors = errors
        this.message = message
        this.data = null

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

module.exports = errorHandler;