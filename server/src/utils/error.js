export const ResponseHandler = (res, statusCode, message, success = false) => {
    res
        .status(statusCode)
        .json({message , success})
}