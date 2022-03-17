import { Router } from "express"
import UserController from "../controllers/UserController.js"
const router = Router()
const user = new UserController()

router.post('/add',user.newUser)

export default router