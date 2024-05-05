const aysyncHandler = (fn) => {
    return async(req, res, next) => {
        try{
            await fn(req, res, next)
        }
        catch(error){
            res.status(req.status || 500).json({
                success: false,
                Error: error.message
            })
        }
    }
};

module.exports = aysyncHandler;