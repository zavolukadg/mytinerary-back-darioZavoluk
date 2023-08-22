import Itinerary from "../../models/Itinerary.js";

//Es una buena practica responder el error con los mismos elementos que el exito
export default async (req, res, next) => {
  try {
    let newItinerary = await Itinerary.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'itinerary created',
      response: newItinerary.id
    });
  } catch (error) {
    next(error)
  }
}