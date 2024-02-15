const mongoose = require('mongoose');

const taksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    completed: Boolean,
});
console.log(mongoose.model('task',taksSchema));

module.exports = mongoose.model('task', taksSchema);