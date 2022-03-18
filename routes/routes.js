import { Router } from "express"
import UserController from "../controllers/UserController.js"
const router = Router()
const user = new UserController()

router.post('/add',user.newUser)

router.get('/',user.viewUsers)

router.put('/update/:id',user.updateUser)

router.delete('/delete/:id',user.deleteUser)
export default router