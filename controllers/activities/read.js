import Activity from "../../models/Activity.js";

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

    let allActivities = await Activity
      .find(objetoDeBusqueda, 'name photo itinerary_id')
      .populate('itinerary_id', 'name city_id')
      .sort(objetoDeOrdenamiento)
    if (allActivities.length > 0) {
      return res.status(200).json({
        success: true,
        message: `${allActivities.length} activities found`,
        response: allActivities
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'activities not found',
        response: null
      })
    }
  } catch (error) {
    next(error)
  }
}