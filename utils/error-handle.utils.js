const error = (err, req, res, next) => {
    console.log(err.message)
    res
        .status(err.code || 500)
        .json({ message: err.message || "smt Error" })

}

export default error