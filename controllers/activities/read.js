import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let objetoDeBusqueda = {}

    if (req.query.itinerary_id) {
        objetoDeBusqueda.itinerary_id = req.query.itinerary_id 
    }

    let allActivities = await Activity
      .find(objetoDeBusqueda, 'name photo itinerary_id')
      .populate('itinerary_id', 'name city_id')
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