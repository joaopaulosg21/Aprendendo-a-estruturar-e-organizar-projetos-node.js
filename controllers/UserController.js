import UserService from "../service/UserService.js"
const user = new UserService()
class UserController{
    async newUser(req,res){
        try{
            const response = await user.new(req.body)
            return res.status(response.status).json({msg:response.msg})
        }catch(e){
            return res.status(500).json(e)
        }
    }

    async viewUsers(req,res){
        try{
            const response = await user.view()
            res.status(response.status).json({msg:response.msg})
        }catch(e){
            res.status(500).json(e)
        }
    }
    async updateUser(req,res){
        try{
            const response = await user.update(req.params.id,req.body)
            res.status(response.status).json({msg:response.msg})
        }catch(e){
            res.status(500).json(e)
        }
    }

    async deleteUser(req,res){
        try{
            const response = await user.delete(req.params.id)
            res.status(response.status).json({msg:response.msg})
        }catch(e){
            res.status(500).json(e)
        }
    }
}

export default UserController;