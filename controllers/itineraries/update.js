import Itinerary from "../../models/Itinerary.js";
export default async (req, res) => {
    try {
        let updatedItinerary = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body, {new: true} 
        ).select('country city descripcion')
        if (updatedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary updated',
                response: updatedItinerary
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