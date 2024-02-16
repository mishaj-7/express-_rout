const { CustomAPIError } = require('../errors/custom-errors')



const errorHandlerMiddleware = (err, req, res, next) => {
   
    console.log(err instanceof CustomAPIError);
   
    if (err instanceof CustomAPIError) {                                        // instanceof kery word return true or false 
        return res.status(err.statusCode).json({ msg: err.message });
    }



    return res.status(500).json({msg: "something went wrong, pls try agian"})
};

module.exports = errorHandlerMiddleware;