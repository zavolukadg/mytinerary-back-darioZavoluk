import City from "../../models/City.js";

//Es una buena practica responder el error con los mismos elementos que el exito
export default async (req, res, next) => {
  try {
    let newCity = await City.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'city created',
      response: newCity.id
    });
  } catch (error) {
    next(error)
  }
}