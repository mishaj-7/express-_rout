const Task = require('../models/models_task');
const asycWarapper = require('../middlewares/async')



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
            const e = new Error("Not found");
            e.status = 404;
            return next(e);
        }
    res.status(200).json({ task });
});

const updateTask = asycWarapper(async (req, res) => {
  
    const { id: taskID } = req.params;
    const data = req.body;
    const updtTask = await Task.findOneAndUpdate({ _id: taskID }, data);
    if (!updtTask) {
      return res.status(500).json("no data given id " + taskID);
    }
    res.status(200).json({updtTask});
});


const deleteTask = asycWarapper(async (req, res) => {
    
        const { id: taskID } = req.params;
        const dltTask = await Task.findOneAndDelete({ _id: taskID });
        if (!dltTask) {
            res.status(500).json(`no data in given id ${taskID}`);
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