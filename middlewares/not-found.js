const notFound = (req,res)=> {
    res.status(404).send('requrest Route does not exist')
}

module.exports = notFound;