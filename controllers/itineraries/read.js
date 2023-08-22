import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let objetoDeBusqueda = {}
    let objetoDeOrdenamiento = {}
    if (req.query.name) {
      objetoDeBusqueda.name = new RegExp(req.query.name, 'i')
    }

    if (req.query.sort) {
      objetoDeOrdenamiento.sort = req.query.sort;
    }

    let allItineraries = await Itinerary
      .find(objetoDeBusqueda, 'name price duration photo ')
      .populate('city_id', 'country city population -_id')
      .sort(objetoDeOrdenamiento)
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