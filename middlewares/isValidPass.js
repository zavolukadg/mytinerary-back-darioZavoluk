import { hashSync } from "bcrypt"

export default async (req, res, next) => {  ///Funcion que hashea la contraseña para protejerla
    try {
        let hashPassword = hashSync(req.body.password, 10)
        req.body.password = hashPassword
        next()    
    } catch (error) {
        next(error)
    }
}