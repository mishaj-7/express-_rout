const express = require('express');
const router = express.Router();


router.route("/").get( (req, res) => {
    res.send("all items")
    
})

router.route("/new").get((req, res) => {
    res.status(201).send('new response')
})

module.exports = router;