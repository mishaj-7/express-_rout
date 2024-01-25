const express = require('express');
const app = express();
const PORT = 3000;
const task = require('./routes/tasks')


app.get('/helo', (req, res) => {
    res.status(200).json('helo')
})

app.use("/todo/v1/tasks", task);



app.listen(PORT, () => {
    console.log(`port run on ${PORT}`);
})



/*  

app.get('/todoapi/v1/tasks') //get all the tasks
app.post('/todoapi/v1/tasks') //create a new task
app.get('/todoapi/v1/tasks/:id') //add single task
app.patch('/todoapi/v1/tasks/:id') //update task
app.delete('/todoapi/v1/tasks/:id') // delete task


// mongodb password: dUSYlNnz988KlGRo

*/