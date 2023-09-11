export default (req,res,next) => {  
    try {
        return res.status(200).json({ 
            success:true,
            message: 'user logged in with token',
            response: {         //Mando token mas datos del usuario
                token: req.token,      //Nuevo Token
                user: req.user    //Datos del usuario que no vienen por formulario y necesito una estrategia para obtener sus datos
            }
        }) 
    } catch (error) {
        next(error);
    }
}