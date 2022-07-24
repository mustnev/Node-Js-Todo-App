const todoModel = require('../Models/todoModel')

getAll = function (req, res) {
    todoModel.find((err, data) => {
        if (err) throw err;
        res.render('todo', { data })
    })

}
newTodoGet = function (req, res) {
    res.render('newTodo')
}
newTodoPost = function (req, res) {
    let newtodo = new todoModel(req.body)
    newtodo.save((err, result) => {
        if (err) throw err;
        console.log(result);
    })
    res.redirect('/')
}

todoDelete = function (req, res) {
    console.log(req.params.id)
        todoModel.findById(req.params.id, (err, result) => {
        if (err) throw err
            result.remove((err) => {
                if (err) throw err;
            })
            console.log(result)
            res.redirect('/')
    })
}
module.exports = { getAll, newTodoGet, newTodoPost, todoDelete }