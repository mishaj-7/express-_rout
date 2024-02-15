const express = require('express');
const app = express();
const PORT = 3001;
 const routeTask = require('./routes/routeTasks')
//import  {abcd as rotuter}  from './routes/routeTasks'
const connectDB = require('./DB/connect');
const notFound = require('./middlewares/not-found');
require('dotenv').config();
// console.log(process.env.DB_URL);
const errorHandlerMiddleware = require('./middlewares/errorHandler');
  app.use(express.json())

app.use("/todo", routeTask);

app.use(notFound);

app.use(errorHandlerMiddleware);

const start = async () => {
    try {
         await connectDB(process.env.DB_URL)
        app.listen(PORT, () => {
            console.log(`port run on ${PORT}`);
            
        });
    }
    catch (err) {
        console.log('DB_error');
    }
}

start();




/*  

app.get('/todoapi/v1/tasks') //get all the tasks
app.post('/todoapi/v1/tasks') //create a new task
app.get('/todoapi/v1/tasks/:id') //add single task
app.patch('/todoapi/v1/tasks/:id') //update task
app.delete('/todoapi/v1/tasks/:id') // delete task


// mongodb password: dUSYlNnz988KlGRo

*/