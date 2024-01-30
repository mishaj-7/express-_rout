const mongoose = require('mongoose');

const connectionString =
  "mongodb+srv://amstig:dUSYlNnz988KlGRo@cluster0.ycouv5i.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose.connect(connectionString)
};

module.exports = connectDB;


