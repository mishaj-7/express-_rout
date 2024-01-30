const getAllTask = (req, res) => {
    res.send('all task got');
};

const createTask = (req, res) => {
    res.send('task created');
};

const getTask = (req, res) => {
    res.send('task got');
};

const updateTask = () => {
    res.send('task updated');
};

const deleteTask = () => {
    res.send('task deleted');
};



module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllTask
};