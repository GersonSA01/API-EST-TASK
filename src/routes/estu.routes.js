import {Router} from 'express'

import * as EstCtrl from '../controllers/Estudiantecontroller.js'

const router = Router()

router.get('/', EstCtrl.findAllEstud)

router.post('/', EstCtrl.createEstud)

router.get('/:cedula', EstCtrl.findOneEstud)

router.delete('/:cedula', EstCtrl.deleteEstud)

router.delete('/', EstCtrl.deleteAllEstud)

router.put('/:cedula', EstCtrl.updateEstud)



export default router


