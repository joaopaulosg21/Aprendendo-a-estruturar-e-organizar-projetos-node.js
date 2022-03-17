import UserService from "../service/UserService.js"
const user = new UserService()
class UserController{
    async newUser(req,res){
        try{
            const response = await user.new(req.body)
            return res.status(201).json(response)
        }catch(e){
            return res.status(500).json(e)
        }
    }
}

export default UserController;