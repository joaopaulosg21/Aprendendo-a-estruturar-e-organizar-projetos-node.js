import User from "../database/models/User.js";

class UserService{
    constructor(){
        this.model = User
    }

    async new(user){
        const verifyUser = await this.model.findOne({where:{email:user.email}})
        if(verifyUser){
            return {status:404,msg:'Email ja cadastrado'}
        }
        return {status:201,msg:await this.model.create(user)}
    }

    async view(){
        const verifyUser = await this.model.findAndCountAll()
        if(verifyUser.count > 0){
            return {status:200,msg:await this.model.findAll()}
        }else{
            return {status:404,msg:'Nenhum user cadastrado'}
        }
    }

    async update(id,user){
        const verifyUser = await this.model.findByPk(id)
        if(verifyUser){
            await this.model.update({
                name:user.name,
                email:user.email,
            },{where:{id:id}})
            return {status:200,msg:'User atualizado'}
        }else{
            return {status:404,msg:'User não cadastrado'}
        }
    }

    async delete(id){
        const verifyUser = await this.model.findByPk(id)
        if(verifyUser){
            await this.model.destroy({where:{id:id}})
            return {status:200,msg:'User deletado'}
        }else{
            return {status:404,msg:'User não cadastrado'}
        }
    }

}

export default UserService