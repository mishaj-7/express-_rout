const express = require('express');
const app = express();
const PORT = 3000;
const routeTask = require('./routes/routeTasks')
const connectDB = require('./DB/connect')

 app.use(express.json());

app.get('/helo', (req, res) => {
    res.send("helo")
})
 
app.use("/todo/v1/tasks", routeTask);


const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`port run on ${PORT}`);
            
        });
    }
    catch (err) {

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