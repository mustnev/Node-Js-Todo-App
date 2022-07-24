const express = require('express')
const router = express.Router()
const todoController = require('../Controllers/todoController')


router.get('/',todoController.getAll)
router.get('/newTodo',todoController.newTodoGet)
router.post('/newTodo',todoController.newTodoPost)
router.post('/todoDelete/:id',todoController.todoDelete)

module.exports = router