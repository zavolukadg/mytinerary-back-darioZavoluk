import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let objetoDeBusqueda = {}

    if (req.query.city_id) {
        objetoDeBusqueda.city_id = req.query.city_id 
    }

    let allItineraries = await Itinerary
      .find(objetoDeBusqueda, 'name price duration tags photo _id')
      .populate('city_id', 'country city population -_id')
    if (allItineraries.length > 0) {
      return res.status(200).json({
        success: true,
        message: `${allItineraries.length} itineraries found`,
        response: allItineraries
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'not found',
        response: null
      })
    }
  } catch (error) {
    next(error)
  }
}