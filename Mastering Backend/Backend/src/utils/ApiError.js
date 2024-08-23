class ApiError extends Error {
    constructor(
        //objects
        statusCode,
        message = "Something went wrong ",
        errors = [],
        stactck = ""
    ){
        //supercall
        super(message)
        //this keyword refers to an object
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = this.errors
        
        if(stactck) {
            this.stack = statck
        }else{
             Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}