import User from "../database/models/User.js";

class UserService{
    constructor(){
        this.model = User
    }

    async new(user){
        const verifyUser = await this.model.findOne({where:{email:user.email}})
        if(verifyUser){
            return {msg:'Email ja cadastrado'}
        }
        return await this.model.create(user)
    }

}

export default UserService