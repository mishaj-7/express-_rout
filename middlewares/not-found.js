const notFound = (req,res, next)=> {
    res.status(404).send('requrest Route does not exist')
    // next();
}

module.exports = notFound;