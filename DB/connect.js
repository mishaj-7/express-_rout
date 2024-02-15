const mongoose = require('mongoose');



const connectDB = (url) => {
  // console.log(url);
  mongoose.connect(url)
};

module.exports = connectDB;


