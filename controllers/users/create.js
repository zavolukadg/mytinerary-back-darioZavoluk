import User from "../../models/User.js";

//Es una buena practica responder el error con los mismos elementos que el exito
export default async (req, res)=> {
    try {
      let newUser = await User.create(req.body)
      return res.status(201).json({ 
        success:true,
        message: 'user created',
        response:newUser._id
    });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'not created',
        response: null
      })
    }
  }