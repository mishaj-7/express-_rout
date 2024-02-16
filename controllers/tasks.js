const {createCustomError} = require('../errors/custom-errors')
const Task = require('../models/models_task');
const asycWarapper = require('../middlewares/async');




const getAllTask = asycWarapper( async (req, res) => {
        const tasks = await Task.find({});
        console.log(tasks);
        res.status(200).json({ tasks:tasks})
});

const createTask = asycWarapper( async (req, res) => {
    console.log(req.body);
    const task = await Task.create(req.body);
    
    return res
        .status(201)
        .json({ success: true, message: task });
});

const getTask = asycWarapper (async (req, res, next) => {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return next(createCustomError(`no task with id ${taskID}`,404))
        }
    res.status(200).json({ task });
});

const updateTask = asycWarapper(async (req, res, next) => {
  
    const { id: taskID } = req.params;
    const data = req.body;
    const updtTask = await Task.findOneAndUpdate({ _id: taskID }, data);
    if (!updtTask) {
      return next(createCustomError(`not data found given id ${taskID}`))
    }
    res.status(200).json({updtTask});
});


const deleteTask = asycWarapper(async (req, res, next) => {
    
        const { id: taskID } = req.params;
        const dltTask = await Task.findOneAndDelete({ _id: taskID });
        if (!dltTask) {
             return next(createCustomError(`no task with id ${taskID}`))
        }
        res.status(200).json({ msg:  dltTask });

});



module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllTask
};