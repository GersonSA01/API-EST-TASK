import {Router} from 'express'

import * as TaskCtrl from '../controllers/taskcontroller.js'

const router = Router()
// para presentar todas las tareas
router.get('/', TaskCtrl.findAllTasks)
//para crear las tareas
router.post('/', TaskCtrl.createTask)
//para presentar las tarea que tengan done true
router.get('/done', TaskCtrl.findAllDoneTasks)
//para buscar una tarea con el id 
router. get('/:id', TaskCtrl.findOneTask)
//para eliminar una tarea 
router. delete('/:id', TaskCtrl.deleteTask)
//para actualizar datos utlizando el id
router. put('/:id', TaskCtrl.updateTask)




export default router


